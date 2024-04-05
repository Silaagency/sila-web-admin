import React from 'react';
import '../styles/formationPage.css';
import { useState, useEffect, useContext } from 'react';
import data from '../Context';
import { useNavigate } from 'react-router-dom';

function FormationPage() {

    const navigate = useNavigate();

    const { setClickedUser } = useContext(data);

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

    const remove = (_id) => {
        const removeOrder = async () => {
            try {
                const response = await fetch(`https://sila-b.onrender.com/orderFormation/${_id}`, {
                    method: 'DELETE'
                });

                const data = await response.json();

                if (response.ok) {
                    window.location.reload();
                };
            } catch (err) {
                console.error(err);
            }
        };

        removeOrder();
    };

    const goToSelect = (userID) => {
        setClickedUser(userID);
        navigate('/SelectFormations');
    };
 
  return (
    <div className='formation-page'>
        <div className="id">ID</div>
        <div className="user-name">User Name</div>
        <div className="email">Email</div>
        <div className="phone-number">Phone Number</div>
        <div className="date">Date</div>
        <div className="open-formation">Open Formation</div>
        <div className="delete">Delete</div>

        {
            apiData.map((x) => (
                <>
                    <div>{x._id}</div>
                    <div>{x.userName}</div>
                    <div>{x.email}</div>
                    <div>{x.phoneNumber}</div>
                    <div>{`${x.date.slice(0, 4)} . ${x.date.slice(5, 7)} . ${x.date.slice(8, 10)}`}</div>
                    <div className='open-formation-btn'>
                        <button onClick={() => goToSelect(x.userID)}>
                            <p>Open formation</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-unlock-fill" viewBox="0 0 16 16">
                                <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2"/>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <button onClick={() => remove(x._id)} className='remove-btn'>
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
};

export default FormationPage;