import { useEffect, useState } from 'react';
import '../styles/walletGrid.css';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';

function WalletGrid() {

  const [apiData, setApiData] = useState([]);
  const [acceptLoading, setAcceptLoading] = useState(false);
  const [rejectedLoading, setRejectedLoading] = useState(false);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  useEffect(() => {
    const walletApi = async () => {
      try {
        const response = await fetch('http://192.168.1.3:4000/transaction');
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
        const response = await fetch(`http://192.168.1.3:4000/users/${target.userID}`);
        const data = await response.json();

        const currentWallet = data.user.wallet;

        //Patching the user's wallet
        const userWalletApi = async () => {
          try {
            const response = await fetch(`http://192.168.1.3:4000/users/wallet/${target.userID}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                wallet: currentWallet + target.chargeAmount
              })
            });
    
            const data = await response.json();
          } catch (err) {
            console.error(err);
          }
        };

        userWalletApi();
        /////////////////////
      } catch (err) {
        console.error(err);
      }
    };

    usersApi();

    //Patching the status of the transaction to 'Accepted'
    const transactionApi = async () => {
      try {
        const response = await fetch(`http://192.168.1.3:4000/transaction/${target._id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            status: 'Accepted'
          })
        });

        const data = await response.json();
      } catch (err) {
        console.error(err);
      }
    };

    transactionApi();
    ////////////////////////


    //Posting the amount to payment history
    const paymentHistoryApi = async () => {
      try {
        const response = await fetch('http://192.168.1.3:4000/paymentHistory', {
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
      } catch (err) {
        console.error(err);
      }
    };

    paymentHistoryApi();
    /////////////////////

    setTimeout(() => {
      window.location.reload();
    }, 5000);
  };

  const rejectTransaction = (_id) => {
    setRejectedLoading(true);

    const target = apiData.find((x) => x._id === _id);

    const transactionApi = async () => {
      try {
        const response = await fetch(`http://192.168.1.3:4000/transaction/${target._id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            status: 'Rejected'
          })
        });

        const data = await response.json();
      } catch (err) {
        console.error(err);
      }
    };

    transactionApi();

    setTimeout(() => {
      window.location.reload();
    }, 5000);
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
      <div className="payment-method">Payment Method</div>
      <div className="date">Date</div>
      <div className="decision">Decision</div>

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
            <div>{x.paymentMethod}</div>
            <div>{x.date}</div>
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
          </>
        ))
      }
    </div>
  )
};

export default WalletGrid;