import '../styles/controlFormationsPage.css';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { OrbitProgress } from 'react-loading-indicators';
import data from '../Context';

function ControlFormationsPage() {

    const {clickedFormation, setClickedFormation} = useContext(data);

    const navigate = useNavigate();

    const [changeName, setChangeName] = useState(false);
    const [changePrice, setChangePrice] = useState(false);
    const [changeStatus, setChangeStatus] = useState(false);

    const [photo, setPhoto] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState('');

    const [apiData, setApiData] = useState([]);

    const [photoLoading, setPhotoLoading] = useState(false);

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

    const deleteFormation = (_id) => {
        const remove = async () => {
            try {
                const response = await fetch(`https://sila-b.onrender.com/formation/deleteFormation/${_id}`, {
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

        remove();
    };

    const updatePhoto = (_id) => {
        setPhotoLoading(true);

        const formData = new FormData();
        formData.append('formationPhoto', photo);

        const changePhoto = async () => {
            try {
                const response = await fetch(`https://sila-b.onrender.com/formation/changePhoto/${_id}`, {
                    method: 'PATCH',
                    body: formData
                });

                const data = await response.json();

                if (response.ok) {
                    window.location.reload();
                };
            } catch (err) {
                console.error(err);
            }
        };

        changePhoto();
    };

    const changeFormationName = (_id) => {
        const patch = async () => {
            try {
                const response = await fetch(`https://sila-b.onrender.com/formation/changeName/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name
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

    const changeFormationPrice = (_id) => {
        const patch = async () => {
            try {
                const response = await fetch(`https://sila-b.onrender.com/formation/changePrice/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        price: parseInt(price)
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

    const changeFormationStatus = (_id) => {
        const patch = async () => {
            try {
                const response = await fetch(`https://sila-b.onrender.com/formation/changeStatus/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        status: status
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

    const goToVideos = (_id) => {
        const target = apiData.find((x) => x._id === _id);
        setClickedFormation(target);
        navigate('/FormationVideos');
    };

  return (
    <div className='control-formations-page'>
        <div className="header">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sliders" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z"/>
            </svg>
            Formations

            <button onClick={() => navigate('/AddFormation')} className='add-formation-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                </svg>
                Add Formation
            </button>
        </div>

        <div className="formations-grid">
            <p>Formation Photo</p>
            <p>Formation Name</p>
            <p>Formation Price</p>
            <p>Formation Status</p>
            <p>Formation Videos</p>
            <p>Delete Formation</p>

            {
                apiData.map((x) => (
                    <>
                        <div className='photo-container'>
                            {
                                photo !== '' ? (
                                    <div className='selected-photo-container'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-check-fill" viewBox="0 0 16 16">
                                            <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 4.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
                                        </svg>
                                        <div className="photo-cancel-save-container">
                                            <button onClick={() => setPhoto('')}>Cancel</button>
                                            <button onClick={() => updatePhoto(x._id)}>
                                                {
                                                    photoLoading ? (
                                                        <OrbitProgress variant="track-disc" speedPlus="3" easing="linear" size='small' color='black' />
                                                    ) : (
                                                        <>
                                                            Save
                                                        </>
                                                    )
                                                }
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <img src={x.photo} alt="" />
                                        <input onChange={(e) => setPhoto(e.target.files[0])} type="file" id='formation-photo' style={{display: 'none'}} />

                                        <label htmlFor="formation-photo" className='edit-btn'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                            </svg>
                                        </label>
                                    </>
                                )
                            }
                        </div>
                        <div className='name-container'>
                            {
                                changeName ? (
                                    <div className='input-btns-container'>
                                        <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Formation Name...' />
                                        <div className="cancel-save-btns-container">
                                            <button onClick={() => setChangeName(false)}>Cancel</button>
                                            <button onClick={() => changeFormationName(x._id)}>Save</button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        {x.name}
                                        <button onClick={() => setChangeName(true)} className='edit-btn'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                            </svg>
                                        </button>
                                    </>
                                )
                            }
                        </div>
                        <div className='price-container'>
                            {
                                changePrice ? (
                                    <div className='input-btns-container'>
                                        <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" placeholder='Formation Price...' />
                                        <div className="cancel-save-btns-container">
                                            <button onClick={() => setChangePrice(false)}>Cancel</button>
                                            <button onClick={() => changeFormationPrice(x._id)}>Save</button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        {`€ ${x.price}`}
                                        <button onClick={() => setChangePrice(true)} className='edit-btn'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                            </svg>
                                        </button>
                                    </>
                                )
                            }
                        </div>
                        <div className='status-container'>
                            {
                                changeStatus ? (
                                    <div className='input-btns-container'>
                                        <input onChange={(e) => setStatus(e.target.value)} value={status} type="text" placeholder='Formation Status...' />
                                        <div className="cancel-save-btns-container">
                                            <button onClick={() => setChangeStatus(false)}>Cancel</button>
                                            <button onClick={() => changeFormationStatus(x._id)}>Save</button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        {x.status}
                                        <button onClick={() => setChangeStatus(true)} className='edit-btn'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                            </svg>
                                        </button>
                                    </>
                                )
                            }
                        </div>
                        <div className='arrow-container'>
                            <button onClick={() => goToVideos(x._id)} className='arrow-btn'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                </svg>
                            </button>
                        </div>
                        <div className='delete-formation-container'>
                            <button onClick={() => deleteFormation(x._id)}>
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
}

export default ControlFormationsPage