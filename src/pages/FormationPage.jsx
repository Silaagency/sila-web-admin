import React from 'react';
import '../styles/formationPage.css';
import { useState } from 'react';
import { useEffect } from 'react';

function FormationPage() {

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        const formationApi = async () => {
            try {
                const response = await fetch('https://sila-b.onrender.com/orderFormation');
                const data = await response.json();

                setApiData(data.orders);
            } catch (err) {
                console.error(err);
            }
        };

        formationApi();
    }, []);

    const unlock = (_id) => {
        const target = apiData.find((x) => x._id === _id);

        const formationApi = async () => {
            try {
                const response = await fetch(`https://sila-b.onrender.com/users/eCommerce/${target.userID}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        eCommerceFormation: true
                    })
                });

                const data = await response.json();

                const deleteOrderApi = async () => {
                    try {
                        const response = await fetch(`https://sila-b.onrender.com/orderFormation/${target._id}`, {
                            method: 'DELETE'
                        });

                        const data = await response.json();
                        alert('Opened successfully!');
                        window.location.reload();
                    } catch (err) {
                        console.error(err);
                    }
                };

                deleteOrderApi();
            } catch (err) {
                console.error(err);
            }
        };

        formationApi();
    };
 
  return (
    <div className='formation-page'>
        <div className="id">ID</div>
        <div className="user-name">User Name</div>
        <div className="email">Email</div>
        <div className="phone-number">Phone Number</div>
        <div className="date">Date</div>
        <div className="open-formation">Open Formation</div>

        {
            apiData.map((x) => (
                <>
                    <div>{x._id}</div>
                    <div>{x.userName}</div>
                    <div>{x.email}</div>
                    <div>{x.phoneNumber}</div>
                    <div>{`${x.date.slice(0, 4)} . ${x.date.slice(5, 7)} . ${x.date.slice(8, 10)}`}</div>
                    <div className='open-formation-btn'>
                        <button onClick={() => unlock(x._id)}>
                            <p>Open formation</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-unlock-fill" viewBox="0 0 16 16">
                                <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2"/>
                            </svg>
                        </button>
                    </div>
                </>
            ))
        }
    </div>
  )
};

export default FormationPage;