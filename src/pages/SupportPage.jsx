import React, { useEffect, useState } from 'react';
import '../styles/supportPage.css';

function SupportPage() {

    const [apiData, setApiData] = useState([]);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const supportApi = async () => {
            try {
                const response = await fetch('https://sila-b.onrender.com/contact');
                const data = await response.json();
                setApiData(data.messages);
            } catch (err) {
                console.error(err);
            }
        };

        supportApi();
    }, []);

    const copyNumber = (phoneNumber) => {
        navigator.clipboard.writeText(phoneNumber);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 1000);
    };

    const deleteSupport = (_id) => {
        const target = apiData.find((x) => x._id === _id);

        const supportApi = async () => {
            try {
                const response = await fetch(`https://sila-b.onrender.com/contact/${target._id}`, {
                    method: 'DELETE'
                });

                const data = await response.json();
                alert('Deleted successfully!');
                window.location.reload();
            } catch (err) {
                console.error(err);
            }
        };

        supportApi();
    };

  return (
    <div className='support-page'>
        <div className="id">ID</div>
        <div className="user-name">User Name</div>
        <div className="email">Email</div>
        <div className="date">Date</div>
        <div className="message">Message</div>
        <div className="phone-number-field">Phone Number</div>
        <div className="delete">Delete</div>

        {
            apiData.map((x) => (
                <>
                    <div>{x._id}</div>
                    <div>{x.userName}</div>
                    <div>{x.email}</div>
                    <div>{`${x.date.slice(0, 4)} . ${x.date.slice(5, 7)} . ${x.date.slice(8, 10)}`}</div>
                    <div className='message'>{x.message}</div>
                    <div className='phone-number'>
                        <button onClick={() => copyNumber(x.phoneNumber)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                            </svg>
                            <p>{x.phoneNumber}</p>
                            {
                                copied && (
                                    <p>Copied!</p>
                                )
                            }
                        </button>
                    </div>

                    <div>
                        <button onClick={() => deleteSupport(x._id)} className='support-delete-btn'>
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
}

export default SupportPage