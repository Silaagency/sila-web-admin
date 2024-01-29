import React, { useEffect, useState } from 'react'
import '../styles/refundGrid.css';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';

function RefundGrid() {

    const [apiData, setApiData] = useState([]);

    const [refundInput, setRefundInput] = useState(null);

    const [acceptLoading, setAcceptLoading] = useState(false);
    const [rejectedLoading, setRejectedLoading] = useState(false);

    const [firstApiDone, setFirstApiDone] = useState(false);
    const [secondApiDone, setSecondApiDone] = useState(false);
    const [thirdApiDone, setThirdApiDone] = useState(false);

    const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

    useEffect(() => {
        const refundApi = async () => {
            try {
                const response = await fetch('http://192.168.1.3:4000/refund');
                const data = await response.json();
                setApiData(data.refunds);
            } catch (err) {
                console.error(err);
            }
        };

        refundApi();
    }, []);

    const acceptRefund = (_id) => {
        setAcceptLoading(true);

        const target = apiData.find((x) => x._id === _id);

        if (refundInput !== null) {
            const usersApi = async () => {
                try {
                    const response = await fetch(`http://192.168.1.3:4000/users/${target.userID}`);
                    const data = await response.json();
                    const currentWallet = data.user.wallet;

                    const patchWalletApi = async () => {
                        try {
                            const response = await fetch(`http://192.168.1.3:4000/users/wallet/${target.userID}`, {
                                method: 'PATCH',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    wallet: currentWallet + parseInt(refundInput)
                                })
                            });

                            const data = await response.json();
                            setFirstApiDone(true);
                        } catch (err) {
                            console.error(err);
                        }
                    };

                    patchWalletApi();
                } catch (err) {
                    console.error(err);
                }
            };

            usersApi();

            const patchRefundStatusApi = async () => {
                try {
                    const response = await fetch(`http://192.168.1.3:4000/refund/${target._id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            status: 'Accepted'
                        })
                    });

                    const data = await response.json();
                    setSecondApiDone(true);
                } catch (err) {
                    console.error(err);
                }
            };

            patchRefundStatusApi();

            const paymentHistoryApi = async () => {
                try {
                    const response = await fetch('http://192.168.1.3:4000/paymentHistory', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            userID: target.userID,
                            type: 'Refund',
                            amount: `+${parseInt(refundInput)}`
                        })
                    });

                    const data = await response.json();
                    setThirdApiDone(true);
                } catch (err) {
                    console.error(err);
                }
            };

            paymentHistoryApi();
        }
    };

    useEffect(() => {
        if (firstApiDone && secondApiDone && thirdApiDone) {
            window.location.reload();
        }
    }, [firstApiDone, secondApiDone, thirdApiDone]);

    const rejectRefund = (_id) => {
        setRejectedLoading(true);

        const target = apiData.find((x) => x._id === _id);

        const patchRefundStatusApi = async () => {
            try {
                const response = await fetch(`http://192.168.1.3:4000/refund/${target._id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        status: 'Rejected'
                    })
                });

                const data = await response.json();
                setRejectedLoading(false);
                window.location.reload();
            } catch (err) {
                console.error(err);
            }
        };

        patchRefundStatusApi();
    };

  return (
    <div className='refund-grid'>
        <div className="id">Application ID</div>
        <div className="ad-id">Ad ID</div>
        <div className="ad-name">Ad name</div>
        <div className="refund-reason">Refund reason</div>
        <div className="refund-amount">Refund amount</div>
        <div className="date">Date</div>
        <div className="decision">Decision</div>

        {
            apiData.map((x) => (
                <>
                    <div>{x._id}</div>
                    <div>{x.adAccountID}</div>
                    <div>{x.adAccountName}</div>
                    <div>{x.refundReason}</div>
                    <div>{x.amount}</div>
                    <div>{x.date}</div>
                    {
                        x.status === 'Pending' && (
                            <div className='decision-container'>
                                <input onChange={(e) => setRefundInput(e.target.value)} type="number" placeholder='Refund amount...' />
                                <button onClick={() => acceptRefund(x._id)}>
                                    {
                                        acceptLoading ? (
                                            <RingLoader color={'#123abc'} loading={true} css={override} size={20} />
                                        ) : (
                                            <p>Accept</p>
                                        )
                                    }
                                </button>
                                <button onClick={() => rejectRefund(x._id)}>
                                    {
                                        rejectedLoading ? (
                                            <RingLoader color={'#123abc'} loading={true} css={override} size={20} />
                                        ) : (
                                            <p>Reject</p>
                                        )
                                    }
                                </button>
                            </div>
                        )
                    }

                    {
                        x.status === 'Accepted' && (
                            <div>Accepted</div>
                        )
                    }

                    {
                        x.status === 'Rejected' && (
                            <div>Rejected</div>
                        )
                    }
                </>
            ))
        }
    </div>
  )
}

export default RefundGrid