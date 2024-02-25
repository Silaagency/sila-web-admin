import { useState } from 'react';
import '../styles/shootingPage.css';
import { useEffect } from 'react';

function ShootingPage() {

    const [apiData, setApiData] = useState([]);

    const [linkInput, setLinkInput] = useState(null);

    useEffect(() => {
        const shootingApi = async () => {
            try {
                const response = await fetch('https://sila-b.onrender.com/shooting');
                const data = await response.json();
                setApiData(data.shooting);
            } catch (err) {
                console.error(err);
            }
        };

        shootingApi();
    }, []);

    const sendLink = (_id) => {
        const target = apiData.find((x) => x._id === _id);

        if (linkInput !== null) {
            const shootingLinkApi = async () => {
                try {
                    const response = await fetch('https://sila-b.onrender.com/shootingLink', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            userID: target.userID,
                            link: linkInput
                        })
                    });

                    const data = await response.json();
                    alert('Sent successfully!');
                    window.location.reload();
                } catch (err) {
                    console.error(err);
                }
            };
    
            shootingLinkApi();
        }
    };

    const deleteShooting = (_id) => {
        const target = apiData.find((x) => x._id === _id);
    
        const shootingApi = async () => {
          try {
            const response = await fetch(`https://sila-b.onrender.com/shooting/${target._id}`, {
              method: 'DELETE'
            });
    
            const data = await response.json();
            alert('Deleted successfully!');
            window.location.reload();
          } catch (err) {
            console.error(err);
          }
        };
    
        shootingApi();
    };

  return (
    <div className='shooting-page'>
        <div className="shooting-grid">
            <div className="id">ID</div>
            <div className="user-name">User Name</div>
            <div className="email">Email</div>
            <div className="phone-number">Phone Number</div>
            <div className="shooting-type">Shooting Type</div>
            <div className="shooting-plan">Shooting Plan</div>
            <div className="date">Date</div>
            <div className="send">Send</div>
            <div className="delete">Delete</div>

            {
                apiData.map((x) => (
                    <>
                        <div className="id">{x._id}</div>
                        <div className="user-name">{x.userName}</div>
                        <div className="email">{x.email}</div>
                        <div className="phone-number">{x.phoneNumber}</div>
                        <div className="shooting-type">{x.shootingType}</div>
                        <div className="shooting-plan">{x.shootingPlan}</div>
                        <div className="date">{`${x.date.slice(0, 4)} . ${x.date.slice(5, 7)} . ${x.date.slice(8, 10)}`}</div>
                        <div className="send">
                            <input type="text" onChange={(e) => setLinkInput(e.target.value)} />
                            <button onClick={() => sendLink(x._id)}>Send</button>
                        </div>
                        <div>
                            <button onClick={() => deleteShooting(x._id)} className='delete-btn'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                                </svg>
                            </button>
                        </div>
                    </>
                ))
            }
        </div>
    </div>
  )
};

export default ShootingPage;