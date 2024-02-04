import React, { useEffect, useState } from 'react';
import '../styles/bmGrid.css';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';

function BMGrid() {

    const [apiData, setApiData] = useState([]);

    const [acceptLoading, setAcceptLoading] = useState(false);
    const [rejectedLoading, setRejectedLoading] = useState(false);

    const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

    useEffect(() => {
        const bmShareApi = async () => {
            try {
                const response = await fetch('https://sila-b.onrender.com/bmShare');
                const data = await response.json();
                setApiData(data.bmShares);
            } catch (err) {
                console.error(err);
            }
        };

        bmShareApi();
    }, []);

    const accept = (_id) => {
        setAcceptLoading(true);

        const target = apiData.find((x) => x._id === _id);

        const bmStatusPatchApi = async () => {
            try {
                const response = await fetch(`https://sila-b.onrender.com/bmShare/${target._id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        status: 'Accepted'
                    })
                });

                const data = await response.json();
                setAcceptLoading(false);
                window.location.reload();
            } catch (err) {
                console.error(err);
            }
        };

        bmStatusPatchApi();
    };

    const reject = (_id) => {
        setRejectedLoading(true);

        const target = apiData.find((x) => x._id === _id);

        const bmStatusPatchApi = async () => {
            try {
                const response = await fetch(`https://sila-b.onrender.com/bmShare/${target._id}`, {
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

        bmStatusPatchApi();
    };

  return (
    <div className='bm-grid'>
        <div className="id">Application ID</div>
        <div className="ad-id">Ad ID</div>
        <div className="ad-name">Ad name</div>
        <div className="bm-id">BM ID</div>
        <div className="date">Date</div>
        <div className="decision">Decision</div>

        {
            apiData.map((x) => (
                <>
                    <div>{x._id}</div>
                    <div>{x.adID}</div>
                    <div>{x.adName}</div>
                    <div>{x.bmID}</div>
                    <div>{`${x.date.slice(0, 4)} . ${x.date.slice(5, 7)} . ${x.date.slice(8, 10)}`}</div>
                    {
                        x.status === 'Pending' && (
                            <div className='decision-container'>
                                <button onClick={() => accept(x._id)}>
                                    {
                                        acceptLoading ? (
                                            <RingLoader color={'#123abc'} loading={true} css={override} size={20} />
                                        ) : (
                                            <p>Accept</p>
                                        )
                                    }
                                </button>
                                <button onClick={() => reject(x._id)}>
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
};

export default BMGrid;