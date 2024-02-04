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

        //Patching the user's wallet
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
        /////////////////////
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
  };


  useEffect(() => {
    if (firstApiDone && secondApiDone && thirdApiDone) {
      window.location.reload();
    }
  }, [firstApiDone, secondApiDone, thirdApiDone]);



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
          </>
        ))
      }
    </div>
  )
};

export default WalletGrid;