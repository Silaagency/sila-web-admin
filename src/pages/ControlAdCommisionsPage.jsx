import React, { useEffect, useState } from 'react';
import '../styles/controlAdCommisionsPage.css';

function ControlAdCommisionsPage() {

    const [changeAdCommision1, setChangeAdCommision1] = useState(false);
    const [changeAdCommision3, setChangeAdCommision3] = useState(false);
    const [changeAdCommision5, setChangeAdCommision5] = useState(false);

    const [changeVipAdCommision1, setChangeVipAdCommision1] = useState(false);
    const [changeVipAdCommision3, setChangeVipAdCommision3] = useState(false);
    const [changeVipAdCommision5, setChangeVipAdCommision5] = useState(false);

    const [changePrice1, setChangePrice1] = useState(false);
    const [changePrice3, setChangePrice3] = useState(false);
    const [changePrice5, setChangePrice5] = useState(false);

    const [changeVipPrice1, setChangeVipPrice1] = useState(false);
    const [changeVipPrice3, setChangeVipPrice3] = useState(false);
    const [changeVipPrice5, setChangeVipPrice5] = useState(false);

    const [adCommision1, setAdCommision1] = useState('');
    const [adCommision3, setAdCommision3] = useState('');
    const [adCommision5, setAdCommision5] = useState('');

    const [vipCommision1, setVipCommision1] = useState('');
    const [vipCommision3, setVipCommision3] = useState('');
    const [vipCommision5, setVipCommision5] = useState('');

    const [adPrice1, setAdPrice1] = useState('');
    const [adPrice3, setAdPrice3] = useState('');
    const [adPrice5, setAdPrice5] = useState('');

    const [vipPrice1, setVipPrice1] = useState('');
    const [vipPrice3, setVipPrice3] = useState('');
    const [vipPrice5, setVipPrice5] = useState('');

    const [apiData, setApiData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await fetch('https://sila-b.onrender.com/users');
                const data = await response.json();

                if (response.ok) {
                    setApiData(data.users);
                };
            } catch (err) {
                console.error(err);
            }
        };

        getUsers();
    }, []);

    const performSearch = () => {
        const getUser = async () => {
            try {
                const response = await fetch(`https://sila-b.onrender.com/users/${search}`);
                const data = await response.json();

                if (response.ok) {
                    setApiData([data.user]);
                };
            } catch (err) {
                console.error(err);
            }
        };

        getUser();
    };

    const patchCommision1 = (_id) => {
        const patch = async () => {
            try {
                const response = await fetch(`https://sila-b.onrender.com/users/changeAdCommision1/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        adCommision1: adCommision1
                    })
                });

                const data = await response.json();

                if (response.ok) {
                    window.location.reload();
                };
            } catch (err) {
                console.error(err);
            }
        };

        patch();
    };

    const patchCommision3 = (_id) => {
        const patch = async () => {
            try {
                const response = await fetch(`https://sila-b.onrender.com/users/changeAdCommision3/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        adCommision3: adCommision3
                    })
                });

                const data = await response.json();

                if (response.ok) {
                    window.location.reload();
                };
            } catch (err) {
                console.error(err);
            }
        };

        patch();
    };

    const patchCommision5 = (_id) => {
        const patch = async () => {
            try {
                const response = await fetch(`https://sila-b.onrender.com/users/changeAdCommision5/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        adCommision5: adCommision5
                    })
                });

                const data = await response.json();

                if (response.ok) {
                    window.location.reload();
                };
            } catch (err) {
                console.error(err);
            }
        };

        patch();
    };

    const patchVipCommision1 = (_id) => {
        const patch = async () => {
            try {
                const response = await fetch(`https://sila-b.onrender.com/users/changeAdCommisionVip1/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        adCommisionVip1: vipCommision1
                    })
                });

                const data = await response.json();

                if (response.ok) {
                    window.location.reload();
                };
            } catch (err) {
                console.error(err);
            }
        };

        patch();
    };

    const patchVipCommision3 = (_id) => {
        const patch = async () => {
            try {
                const response = await fetch(`https://sila-b.onrender.com/users/changeAdCommisionVip3/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        adCommisionVip3: vipCommision3
                    })
                });

                const data = await response.json();

                if (response.ok) {
                    window.location.reload();
                };
            } catch (err) {
                console.error(err);
            }
        };

        patch();
    };

    const patchVipCommision5 = (_id) => {
        const patch = async () => {
            try {
                const response = await fetch(`https://sila-b.onrender.com/users/changeAdCommisionVip5/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        adCommisionVip5: vipCommision5
                    })
                });

                const data = await response.json();

                if (response.ok) {
                    window.location.reload();
                };
            } catch (err) {
                console.error(err);
            }
        };

        patch();
    };

    const patchPrice1 = (_id) => {
        const patch = async () => {
            try {
                const response = await fetch(`https://sila-b.onrender.com/users/changeAd1Price/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        ad1Price: adPrice1
                    })
                });

                const data = await response.json();

                if (response.ok) {
                    window.location.reload();
                };
            } catch (err) {
                console.error(err);
            }
        };

        patch();
    };

    const patchPrice3 = (_id) => {
        const patch = async () => {
            try {
                const response = await fetch(`https://sila-b.onrender.com/users/changeAd3Price/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        ad3Price: adPrice3
                    })
                });

                const data = await response.json();

                if (response.ok) {
                    window.location.reload();
                };
            } catch (err) {
                console.error(err);
            }
        };

        patch();
    };

    const patchPrice5 = (_id) => {
        const patch = async () => {
            try {
                const response = await fetch(`https://sila-b.onrender.com/users/changeAd5Price/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        ad5Price: adPrice5
                    })
                });

                const data = await response.json();

                if (response.ok) {
                    window.location.reload();
                };
            } catch (err) {
                console.error(err);
            }
        };

        patch();
    };

    const patchVipPrice1 = (_id) => {
        const patch = async () => {
            try {
                const response = await fetch(`https://sila-b.onrender.com/users/changeVipAd1Price/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        vipAd1Price: vipPrice1
                    })
                });

                const data = await response.json();

                if (response.ok) {
                    window.location.reload();
                };
            } catch (err) {
                console.error(err);
            }
        };

        patch();
    };

    const patchVipPrice3 = (_id) => {
        const patch = async () => {
            try {
                const response = await fetch(`https://sila-b.onrender.com/users/changeVipAd3Price/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        vipAd3Price: vipPrice3
                    })
                });

                const data = await response.json();

                if (response.ok) {
                    window.location.reload();
                };
            } catch (err) {
                console.error(err);
            }
        };

        patch();
    };

    const patchVipPrice5 = (_id) => {
        const patch = async () => {
            try {
                const response = await fetch(`https://sila-b.onrender.com/users/changeVipAd5Price/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        vipAd5Price: vipPrice5
                    })
                });

                const data = await response.json();

                if (response.ok) {
                    window.location.reload();
                };
            } catch (err) {
                console.error(err);
            }
        };

        patch();
    };

  return (
    <div className='control-ad-commisions-page'>
        <div className="header">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5"/>
            </svg>
            Ad commisions panel
        </div>

        <div className="search-field">
            <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" placeholder='User ID...' />
            <button onClick={performSearch}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </button>
        </div>

        <div className="users-grid">
            <div className='user-container'>User</div>
            <div className='ad-commision-1'>Ad Commision for 1 account</div>
            <div className='ad-commision-3'>Ad Commision for 3 accounts</div>
            <div className='ad-commision-5'>Ad Commision for 5 accounts</div>
            <div className='vip-commision-1'>Vip Ad Commision for 1 account</div>
            <div className='vip-commision-3'>Vip Ad Commision for 3 accounts</div>
            <div className='vip-commision-5'>Vip Ad Commision for 5 accounts</div>
            <div className='ad-price-1'>Ad price 1 account</div>
            <div className='ad-price-3'>Ad price 3 accounts</div>
            <div className='ad-price-5'>Ad price 5 accounts</div>
            <div className='vip-price-1'>Vip Ad price 1 account</div>
            <div className='vip-price-3'>Vip Ad price 3 accounts</div>
            <div className='vip-price-5'>Vip Ad price 5 accounts</div>

            {
                apiData.map((x) => (
                    <>
                        <div className='user-container'>
                            <img src={x.profilePhoto} alt="" />
                            <p>{x.userName}</p>
                        </div>

                        <div className='ad-commision-1'>
                            {
                                changeAdCommision1 ? (
                                    <div className='edit-container'>
                                        <input onChange={(e) => setAdCommision1(e.target.value)} value={adCommision1} type="number" placeholder='Commision %' />
                                        <div className="buttons-container">
                                            <button onClick={() => setChangeAdCommision1(false)}>Cancel</button>
                                            <button onClick={() => patchCommision1(x._id)}>Save</button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <button onClick={() => setChangeAdCommision1(true)} className='edit-btn'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                            </svg>
                                        </button>
                                        {`${x.adCommision1} %`}
                                    </>
                                )
                            }
                        </div>

                        <div className='ad-commision-3'>
                            {
                                changeAdCommision3 ? (
                                    <div className='edit-container'>
                                        <input onChange={(e) => setAdCommision3(e.target.value)} value={adCommision3} type="number" placeholder='Commision %' />
                                        <div className="buttons-container">
                                            <button onClick={() => setChangeAdCommision3(false)}>Cancel</button>
                                            <button onClick={() => patchCommision3(x._id)}>Save</button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <button onClick={() => setChangeAdCommision3(true)} className='edit-btn'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                            </svg>
                                        </button>
                                        {`${x.adCommision3} %`}
                                    </>
                                )
                            }
                        </div>

                        <div className='ad-commision-5'>
                            {
                                changeAdCommision5 ? (
                                    <div className='edit-container'>
                                        <input onChange={(e) => setAdCommision5(e.target.value)} value={adCommision5} type="number" placeholder='Commision %' />
                                        <div className="buttons-container">
                                            <button onClick={() => setChangeAdCommision5(false)}>Cancel</button>
                                            <button onClick={() => patchCommision5(x._id)}>Save</button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <button onClick={() => setChangeAdCommision5(true)} className='edit-btn'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                            </svg>
                                        </button>
                                        {`${x.adCommision5} %`}
                                    </>
                                )
                            }
                        </div>

                        <div className='vip-commision-1'>
                            {
                                changeVipAdCommision1 ? (
                                    <div className='edit-container'>
                                        <input onChange={(e) => setVipCommision1(e.target.value)} value={vipCommision1} type="number" placeholder='Commision %' />
                                        <div className="buttons-container">
                                            <button onClick={() => setChangeVipAdCommision1(false)}>Cancel</button>
                                            <button onClick={() => patchVipCommision1(x._id)}>Save</button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <button onClick={() => setChangeVipAdCommision1(true)} className='edit-btn'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                            </svg>
                                        </button>
                                        {`${x.adCommisionVip1} %`}         
                                    </>
                                )
                            }
                        </div>

                        <div className='vip-commision-3'>
                            {
                                changeVipAdCommision3 ? (
                                    <div className='edit-container'>
                                        <input onChange={(e) => setVipCommision3(e.target.value)} value={vipCommision3} type="number" placeholder='Commision %' />
                                        <div className="buttons-container">
                                            <button onClick={() => setChangeVipAdCommision3(false)}>Cancel</button>
                                            <button onClick={() => patchVipCommision3(x._id)}>Save</button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <button onClick={() => setChangeVipAdCommision3(true)} className='edit-btn'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                            </svg>
                                        </button>
                                        {`${x.adCommisionVip3} %`}         
                                    </>
                                )
                            }
                        </div>

                        <div className='vip-commision-5'>
                            {
                                changeVipAdCommision5 ? (
                                    <div className='edit-container'>
                                        <input onChange={(e) => setVipCommision5(e.target.value)} value={vipCommision5} type="number" placeholder='Commision %' />
                                        <div className="buttons-container">
                                            <button onClick={() => setChangeVipAdCommision5(false)}>Cancel</button>
                                            <button onClick={() => patchVipCommision5(x._id)}>Save</button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <button onClick={() => setChangeVipAdCommision5(true)} className='edit-btn'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                            </svg>
                                        </button>
                                        {`${x.adCommisionVip5} %`}          
                                    </>
                                )
                            }
                        </div>

                        <div className='ad-price-1'>
                            {
                                changePrice1 ? (
                                    <div className='edit-container'>
                                        <input onChange={(e) => setAdPrice1(e.target.value)} value={adPrice1} type="number" placeholder='Commision %' />
                                        <div className="buttons-container">
                                            <button onClick={() => setChangePrice1(false)}>Cancel</button>
                                            <button onClick={() => patchPrice1(x._id)}>Save</button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <button onClick={() => setChangePrice1(true)} className='edit-btn'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                            </svg>
                                        </button>
                                        {`€ ${x.ad1Price}`}
                                    </>
                                )
                            }
                        </div>

                        <div className='ad-price-3'>
                            {
                                changePrice3 ? (
                                    <div className='edit-container'>
                                        <input onChange={(e) => setAdPrice3(e.target.value)} value={adPrice3} type="number" placeholder='Commision %' />
                                        <div className="buttons-container">
                                            <button onClick={() => setChangePrice3(false)}>Cancel</button>
                                            <button onClick={() => patchPrice3(x._id)}>Save</button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <button onClick={() => setChangePrice3(true)} className='edit-btn'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                            </svg>
                                        </button>
                                        {`€ ${x.ad3Price}`}
                                    </>
                                )
                            }
                        </div>

                        <div className='ad-price-5'>
                            {
                                changePrice5 ? (
                                    <div className='edit-container'>
                                        <input onChange={(e) => setAdPrice5(e.target.value)} value={adPrice5} type="number" placeholder='Commision %' />
                                        <div className="buttons-container">
                                            <button onClick={() => setChangePrice5(false)}>Cancel</button>
                                            <button onClick={() => patchPrice5(x._id)}>Save</button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <button onClick={() => setChangePrice5(true)} className='edit-btn'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                            </svg>
                                        </button>
                                        {`€ ${x.ad5Price}`}
                                    </>
                                )
                            }
                        </div>

                        <div className='vip-price-1'>
                            {
                                changeVipPrice1 ? (
                                    <div className='edit-container'>
                                        <input onChange={(e) => setVipPrice1(e.target.value)} value={vipPrice1} type="number" placeholder='Commision %' />
                                        <div className="buttons-container">
                                            <button onClick={() => setChangeVipPrice1(false)}>Cancel</button>
                                            <button onClick={() => patchVipPrice1(x._id)}>Save</button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <button onClick={() => setChangeVipPrice1(true)} className='edit-btn'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                            </svg>
                                        </button>
                                        {`€ ${x.vipAd1Price}`}
                                    </>
                                )
                            }
                        </div>

                        <div className='vip-price-3'>
                            {
                                changeVipPrice3 ? (
                                    <div className='edit-container'>
                                        <input onChange={(e) => setVipPrice3(e.target.value)} value={vipPrice3} type="number" placeholder='Commision %' />
                                        <div className="buttons-container">
                                            <button onClick={() => setChangeVipPrice3(false)}>Cancel</button>
                                            <button onClick={() => patchVipPrice3(x._id)}>Save</button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <button onClick={() => setChangeVipPrice3(true)} className='edit-btn'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                            </svg>
                                        </button>
                                        {`€ ${x.vipAd3Price}`}
                                    </>
                                )
                            }
                        </div>

                        <div className='vip-price-5'>
                            {
                                changeVipPrice5 ? (
                                    <div className='edit-container'>
                                        <input onChange={(e) => setVipPrice5(e.target.value)} value={vipPrice5} type="number" placeholder='Commision %' />
                                        <div className="buttons-container">
                                            <button onClick={() => setChangeVipPrice5(false)}>Cancel</button>
                                            <button onClick={() => patchVipPrice5(x._id)}>Save</button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <button onClick={() => setChangeVipPrice5(true)} className='edit-btn'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                            </svg>
                                        </button>
                                        {`€ ${x.vipAd5Price}`}
                                    </>
                                )
                            }
                        </div>
                    </>
                ))
            }
        </div>
    </div>
  )
};

export default ControlAdCommisionsPage;