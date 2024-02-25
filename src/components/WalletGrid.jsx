import { useEffect, useState } from 'react';
import '../styles/walletGrid.css';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';

function WalletGrid() {

  const [apiData, setApiData] = useState([]);
  const [acceptLoading, setAcceptLoading] = useState(false);
  const [rejectedLoading, setRejectedLoading] = useState(false);

  const [firstApiDone, setFirstApiDone] = useState(false);
  const [secondApiDone, setSecondApiDone] = useState(false);
  const [thirdApiDone, setThirdApiDone] = useState(false);
  const [fourthApiDone, setFourthApiDone] = useState(false);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  useEffect(() => {
    const walletApi = async () => {
      try {
        const response = await fetch('https://sila-b.onrender.com/transaction');
        const data = await response.json();
        setApiData(data.transactions);
      } catch (err) {
        console.error(err);
      }
    };

    walletApi();
  }, []);

  const acceptTransaction = (_id) => {
    setAcceptLoading(true);

    const target = apiData.find((x) => x._id === _id);

    const usersApi = async () => {
      try {
        const response = await fetch(`https://sila-b.onrender.com/users/${target.userID}`);
        const data = await response.json();

        const currentWallet = data.user.wallet;
        const currentEurWallet = data.user.eurWallet;

        //Checking the currency then patching each wallet depending on currency
        if (target.currency === 'USD') {
          const userWalletApi = async () => {
            try {
              const response = await fetch(`https://sila-b.onrender.com/users/wallet/${target.userID}`, {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  wallet: currentWallet + target.chargeAmount
                })
              });
      
              const data = await response.json();
              setFirstApiDone(true);
            } catch (err) {
              console.error(err);
            }
          };
  
          userWalletApi();
        } else {
          ////////////
          const userEurWalletApi = async () => {
            try {
              const response = await fetch(`https://sila-b.onrender.com/users/eurWallet/${target.userID}`, {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  eurWallet: currentEurWallet + target.chargeAmount
                })
              });
      
              const data = await response.json();
              setFirstApiDone(true);
            } catch (err) {
              console.error(err);
            }
          };
  
          userEurWalletApi();
        }
        ///////////////////////////
      } catch (err) {
        console.error(err);
      }
    };

    usersApi();

    //Patching the status of the transaction to 'Accepted'
    const transactionApi = async () => {
      try {
        const response = await fetch(`https://sila-b.onrender.com/transaction/${target._id}`, {
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

    transactionApi();
    ////////////////////////


    //Posting the amount to payment history
    const paymentHistoryApi = async () => {
      try {
        const response = await fetch('https://sila-b.onrender.com/paymentHistory', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            userID: target.userID,
            type: 'Wallet re-charge',
            amount: `+${target.chargeAmount}`
          })
        });

        const data = await response.json();
        setThirdApiDone(true);
      } catch (err) {
        console.error(err);
      }
    };

    paymentHistoryApi();
    /////////////////////

    const sendEmail = async () => {
      try {
        const response = await fetch('https://sila-b.onrender.com/sendMail/acceptedTopUp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            userEmail: target.email,
            paymentMethod: target.paymentMethod,
            transferAmount: target.chargeAmount,
            transactionID: target.transactionID,
            acceptedOn: `${target.date.slice(0, 4)} . ${target.date.slice(5, 7)} . ${target.date.slice(8, 10)}`
          })
        });

        const data = await response.json();
        setFourthApiDone(true);
      } catch (err) {
        console.error(err);
      }
    };

    sendEmail();
  };


  useEffect(() => {
    if (firstApiDone && secondApiDone && thirdApiDone &&
      fourthApiDone) {
      window.location.reload();
    }
  }, [firstApiDone, secondApiDone, thirdApiDone, fourthApiDone]);



  const rejectTransaction = (_id) => {
    setRejectedLoading(true);

    const target = apiData.find((x) => x._id === _id);

    const transactionApi = async () => {
      try {
        const response = await fetch(`https://sila-b.onrender.com/transaction/${target._id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            status: 'Rejected'
          })
        });

        const data = await response.json();
        window.location.reload();
      } catch (err) {
        console.error(err);
      }
    };

    transactionApi();
  };

  const deleteTransaction = (_id) => {
    const target = apiData.find((x) => x._id === _id);

    const transactionApi = async () => {
      try {
        const response = await fetch(`https://sila-b.onrender.com/transaction/${target._id}`, {
          method: 'DELETE'
        });

        const data = await response.json();
        alert('Deleted successfully!');
        window.location.reload();
      } catch (err) {
        console.error(err);
      }
    };

    transactionApi();
  };

  return (
    <div className='wallet-grid'>
      <div className="id">Application ID</div>
      <div className="user-name">User Name</div>
      <div className="user-email">User Email</div>
      <div className="user-phone">User Phone number</div>
      <div className="charge-amount">Charge Amount</div>
      <div className="transaction-id">Transaction ID</div>
      <div className="transaction-photo">Transaction Photo</div>
      <div className="currency">Currency</div>
      <div className="payment-method">Payment Method</div>
      <div className="date">Date</div>
      <div className="decision">Decision</div>
      <div className="delete">Delete</div>

      {
        apiData.map((x) => (
          <>
            <div>{x._id}</div>
            <div>{x.userName}</div>
            <div>{x.email}</div>
            <div>{x.phoneNumber}</div>
            <div>{x.chargeAmount}</div>
            <div>{x.transactionID}</div>
            <div>
              <img className='transaction-proof' src={x.photoProof} alt="" />
            </div>
            <div>{x.currency}</div>
            <div>{x.paymentMethod}</div>
            <div>{`${x.date.slice(0, 4)} . ${x.date.slice(5, 7)} . ${x.date.slice(8, 10)}`}</div>
            <div className='decision-btn-container'>
              {
                x.status === 'Pending' && (
                  <>
                    <button onClick={() => acceptTransaction(x._id)} className="accept-btn">
                      {
                        acceptLoading ? (
                          <RingLoader color={'#123abc'} loading={true} css={override} size={20} />
                        ) : (
                          <p>Accept</p>
                        )
                      }
                    </button>
                    <button onClick={() => rejectTransaction(x._id)} className="reject-btn">
                      {
                        rejectedLoading ? (
                          <RingLoader color={'#123abc'} loading={true} css={override} size={20} />
                        ) : (
                          <p>Reject</p>
                        )
                      }
                    </button>
                  </>
                )
              }

              {
                x.status === 'Accepted' && (
                  <p>Accepted</p>
                )
              }

              {
                x.status === 'Rejected' && (
                  <p>Rejected</p>
                )
              }
            </div>

            <div>
              <button onClick={() => deleteTransaction(x._id)} className='delete-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                </svg>
              </button>
            </div>
          </>
        ))
      }
    </div>
  )
};

export default WalletGrid;