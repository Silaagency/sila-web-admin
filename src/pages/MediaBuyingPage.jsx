import { useEffect, useState } from 'react';
import '../styles/mediaBuyingPage.css';

function MediaBuyingPage() {

    const [apiData, setApiData] = useState([]);

    const [linkInput, setLinkInput] = useState(null);
    const [linkName, setLinkName] = useState(null);

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

    const sendLink = (_id) => {
        const target = apiData.find((x) => x._id === _id);

        if (linkInput !== null && linkName !== null) {
            const mediaLinkApi = async () => {
                try {
                    const response = await fetch('https://sila-b.onrender.com/mediaLink', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            userID: target.userID,
                            link: linkInput,
                            linkName: linkName
                        })
                    });

                    const data = await response.json();
                    alert('Sent successfully!');
                    window.location.reload();
                } catch (err) {
                    console.error(err);
                }
            };

            mediaLinkApi();
        }
    };

    const deleteRow = (_id) => {
        const target = apiData.find((x) => x._id === _id);

        const mediaApi = async () => {
            try {
                const response = await fetch(`https://sila-b.onrender.com/media/${target._id}`, {
                    method: 'DELETE'
                });

                const data = await response.json();
                alert('Deleted successfully!');
                window.location.reload();
            } catch (err) {
                console.error(err);
            }
        };

        mediaApi();
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
            <div className="send">Send video Google drive link</div>
            <div className="commision">Commision</div>
            <div className="delete">Delete</div>

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
                                <p>{x.media}</p>
                            }
                        </div>
                        <div className="date">{`${x.date.slice(0, 4)} . ${x.date.slice(5, 7)} . ${x.date.slice(8, 10)}`}</div>
                        <div className="send">
                            <input onChange={(e) => setLinkInput(e.target.value)} type="text" placeholder='Link...' />
                            <input onChange={(e) => setLinkName(e.target.value)} type="text" placeholder='Link name...' />
                            <button onClick={() => sendLink(x._id)}>Send</button>
                        </div>
                        <div className="commision">
                            <button onClick={() => takeCommision(x.userID)} className="commision-btn">-€0.65</button>
                        </div>
                        <button onClick={() => deleteRow(x._id)} className="delete-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                            </svg>
                        </button>
                    </>
                ))
            }
        </div>
    </div>
  )
};

export default MediaBuyingPage;