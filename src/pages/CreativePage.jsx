import React from 'react';
import '../styles/creativePage.css';
import { useState } from 'react';
import { useEffect } from 'react';

function CreativePage() {

    const [apiData, setApiData] = useState([]);
    const [linkInput, setLinkInput] = useState(null);

    useEffect(() => {
        const creativeVidsApi = async () => {
            try {
                const response = await fetch('https://sila-b.onrender.com/creativeVids');
                const data = await response.json();
                setApiData(data.creativeVids);
            } catch (err) {
                console.error(err);
            }
        };

        creativeVidsApi();
    }, []);

    const sendLink = (_id) => {
        const target = apiData.find((x) => x._id === _id);

        if (linkInput !== null) {
            const creativeLinkApi = async () => {
                try {
                    const response = await fetch('https://sila-b.onrender.com/creativeLink', {
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

            creativeLinkApi();
        }
    }; 

  return (
    <div className='creative-page'>
        <div className="id">ID</div>
        <div className="user-name">User Name</div>
        <div className="email">Email</div>
        <div className="phone-number">Phone Number</div>
        <div className="creative-plan">Creative Plan</div>
        <div className="videos">Videos</div>
        <div className="date">Date</div>
        <div className="send">Send</div>

        {
            apiData.map((x) => (
                <>
                    <div className="id">{x._id}</div>
                    <div className="user-name">{x.userName}</div>
                    <div className="email">{x.email}</div>
                    <div className="phone-number">{x.phoneNumber}</div>
                    <div className="creative-plan">{x.creativePlan}</div>
                    <div className="videos">
                        <video src={x.videos} controls />
                    </div>
                    <div className="date">{`${x.date.slice(0, 4)} . ${x.date.slice(5, 7)} . ${x.date.slice(8, 10)}`}</div>
                    <div className="send">
                        <input onChange={(e) => setLinkInput(e.target.value)} type="text" />
                        <button onClick={() => sendLink(x._id)}>Send</button>
                    </div>
                </>
            ))
        }
    </div>
  )
};

export default CreativePage;