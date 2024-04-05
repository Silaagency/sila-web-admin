import React from 'react';
import '../styles/selectFormationsPage.css';
import { useState, useEffect, useContext } from 'react';
import data from '../Context';
import { useNavigate } from 'react-router-dom';

function SelectFormationsPage() {

    const navigate = useNavigate();

    const { clickedUser } = useContext(data);

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        const getFormations = async () => {
            try {
                const response = await fetch('https://sila-b.onrender.com/formation/getFormations');
                const data = await response.json();

                if (response.ok) {
                    setApiData(data.formations);
                };
            } catch (err) {
                console.error(err);
            }
        };

        getFormations();
    }, []);

    const add = (_id) => {
        const pushFormation = async () => {
            try {
                const response = await fetch(`https://sila-b.onrender.com/users/pushFormation/${clickedUser}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        formationId: _id
                    })
                });

                const data = await response.json();

                if (response.ok) {
                    alert('Formation Opened successfully! ✅');
                    navigate('/formation');
                };
            } catch (err) {
                console.error(err);
            }
        };

        pushFormation();
    };

  return (
    <div className='select-formations-page'>
        <div className="header">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
            </svg>

            Select Formation
        </div>

        <div className="formations-list">
            {
                apiData.map((x) => (
                    <div className="formation">
                        <img src={x.photo} alt="" />
                        <p>{x.name}</p>
                        <button onClick={() => add(x._id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                            </svg>
                        </button>
                    </div>
                ))
            }
        </div>
    </div>
  )
};

export default SelectFormationsPage;