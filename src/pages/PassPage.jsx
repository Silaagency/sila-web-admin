import React, { useState } from 'react';
import '../styles/passPage.css';
import PassImage from '../images&logos/computer-security-with-login-password-padlock.jpg';
import { useNavigate } from 'react-router-dom';

function PassPage() {

    const navigate = useNavigate();

    const [passKey, setPassKey] = useState(null);

    const check = () => {
        const key = 'sila0556';

        if (passKey !== null) {
            if (passKey === key) {
                navigate('/dashboard');
            } else {
                alert('Pass key is incorrect!');
            }
        } else {
            alert('Pass key is required!');
        }
    };

  return (
    <div className='pass-page'>
        <div className="login-window">
            <img src={PassImage} alt="" />
            <div>
                <input onChange={(e) => setPassKey(e.target.value)} type="password" placeholder='Admin pass key...' />
                <button onClick={check}>Access</button>
            </div>
        </div>
    </div>
  )
}

export default PassPage