import { useEffect, useState } from 'react';
import '../styles/mediaBuyingPage.css';

function MediaBuyingPage() {

    const [apiData, setApiData] = useState([]);

    const videoRegex = /\b(mp4|mov)\b/;
    const imageRegex = /\b(jpg|png|jpeg|gif)\b/;

    useEffect(() => {
        const mediaApi = async () => {
            try {
                const response = await fetch('https://sila-b.onrender.com/media');
                const data = await response.json();
                setApiData(data.media)
            } catch (err) {
                console.error(err);
            }
        };

        mediaApi();
    }, []);

    const takeCommision = (userID) => {
        const usersApi = async () => {
            try {
                const response = await fetch(`https://sila-b.onrender.com/users/${userID}`);
                const data = await response.json();
                const currentEurWallet = data.user.eurWallet;

                const patchWalletApi = async () => {
                    try {
                        const response = await fetch(`https://sila-b.onrender.com/users/eurWallet/${userID}`, {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                eurWallet: currentEurWallet - 0.65
                            })
                        });

                        const data = await response.json();
                        alert('Commision applied successfully!');
                        window.location.reload();
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
    };

  return (
    <div className='media-buying-page'>
        <div className="media-container">
            <div className="user-id">User ID</div>
            <div className="name">User name</div>
            <div className="email">Email</div>
            <div className="phoneNumber">Phone number</div>
            <div className="pack">Pack purchased</div>
            <div className="media">Media</div>
            <div className="date">Date</div>
            <div className="commision">Commision</div>

            {
                apiData.map((x) => (
                    <>
                        <div className="user-id">{x.userID}</div>
                        <div className="name">{x.userName}</div>
                        <div className="email">{x.email}</div>
                        <div className="phoneNumber">{x.phoneNumber}</div>
                        <div className="pack">{x.pack}</div>
                        <div className="media">
                            {
                                x.media.map((y) => (
                                    <>
                                        {
                                            videoRegex.test(y) && (
                                                <video src={y} controls />
                                            )
                                        }

                                        {
                                            imageRegex.test(y) && (
                                                <img src={y} alt="" />
                                            )
                                        }
                                    </>
                                ))
                            }
                        </div>
                        <div className="date">{`${x.date.slice(0, 4)} . ${x.date.slice(5, 7)} . ${x.date.slice(8, 10)}`}</div>
                        <div className="commision">
                            <button onClick={() => takeCommision(x.userID)} className="commision-btn">-£0.65</button>
                        </div>
                    </>
                ))
            }
        </div>
    </div>
  )
};

export default MediaBuyingPage;