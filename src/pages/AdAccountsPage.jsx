import React from 'react';
import '../styles/adAccountsPage.css';

function AdAccountsPage() {
  return (
    <div className='ad-account-page'>
      <div className='ad-account-bar'>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-box2" viewBox="0 0 16 16">
          <path d="M2.95.4a1 1 0 0 1 .8-.4h8.5a1 1 0 0 1 .8.4l2.85 3.8a.5.5 0 0 1 .1.3V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4.5a.5.5 0 0 1 .1-.3zM7.5 1H3.75L1.5 4h6zm1 0v3h6l-2.25-3zM15 5H1v10h14z"/>
        </svg>
        <p style={{fontSize: '40px'}}>Ad accounts</p>
      </div>

      <div className="ad-account">
        <div>License name: RGJDOI</div>
        <div>Page number: 2</div>
        <div>Page URL: http://fjeiosfj.com</div>
        <div>Page URL: http://fjeiosfj.com</div>
        <div>Domain number: 2</div>
        <div>Is App: no</div>
        <div>Domain: http://fjeiosfj.com</div>
        <div>Domain: http://fjeiosfj.com</div>
        <div className="shopify-shop">
          <p>Shopify shop: yes</p>
          <img src="https://ads.hdedu.net/assets/shopify_example-33e120ba.jpg" />
        </div>

        <div>Ads number: 2</div>

        <div className="ad-account-info">
          <p>Ad account name: fesiofjise</p>
          <p>Ad account deposit: 300</p>
        </div>

        <div className="ad-account-info">
          <p>Ad account name: fesiofjise</p>
          <p>Ad account deposit: 300</p>
        </div>

        <div>Remark: ejfjfisjefijesfseuih</div>

        <div className="decision-container">
          <button className="accept">Accept</button>
          <button className="reject">Reject</button>
        </div>
      </div>
    </div>
  )
}

export default AdAccountsPage