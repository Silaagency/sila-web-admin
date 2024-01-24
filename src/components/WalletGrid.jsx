import React from 'react';
import '../styles/walletGrid.css';

function WalletGrid() {
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

      <div>5483539578497359</div>
      <div>Fake user</div>
      <div>test@gmail.com</div>
      <div>0556753663</div>
      <div>1000</div>
      <div>57837534754337</div>
      <div>
        <img className='transaction-proof' src="https://storage.googleapis.com/support-forums-api/attachment/thread-191661601-15203805108075818741.JPG" alt="" />
      </div>
      <div>USDT</div>
      <div>20.05.2023</div>
      <div className='decision-btn-container'>
        <button className="accept-btn">Accept</button>
        <button className="reject-btn">Reject</button>
      </div>

      <div>5483539578497359</div>
      <div>Fake user</div>
      <div>test@gmail.com</div>
      <div>0556753663</div>
      <div>1000</div>
      <div>57837534754337</div>
      <div>
        <img className='transaction-proof' src="https://storage.googleapis.com/support-forums-api/attachment/thread-191661601-15203805108075818741.JPG" alt="" />
      </div>
      <div>USDT</div>
      <div>20.05.2023</div>
      <div className='decision-btn-container'>
        <button className="accept-btn">Accept</button>
        <button className="reject-btn">Reject</button>
      </div>

      <div>5483539578497359</div>
      <div>Fake user</div>
      <div>test@gmail.com</div>
      <div>0556753663</div>
      <div>1000</div>
      <div>57837534754337</div>
      <div>
        <img className='transaction-proof' src="https://storage.googleapis.com/support-forums-api/attachment/thread-191661601-15203805108075818741.JPG" alt="" />
      </div>
      <div>USDT</div>
      <div>20.05.2023</div>
      <div className='decision-btn-container'>
        <button className="accept-btn">Accept</button>
        <button className="reject-btn">Reject</button>
      </div>
    </div>
  )
};

export default WalletGrid;