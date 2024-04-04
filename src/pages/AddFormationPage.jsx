import React, { useState } from 'react';
import '../styles/addFormationPage.css';

function AddFormationPage() {

    const [photo, setPhoto] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState('');

    const [linksNumber, setLinksNumber] = useState(1);
    const [linkNames, setLinkNames] = useState([]);
    const [links, setLinks] = useState([]);

    //Rendering link fields when the user press the add button
    const renderLinkFields = () => {
        const links = [];
        for (let i = 0; i < linksNumber; i++) {
            links.push(
                <div className='vid-link-container'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                    </svg>

                    <div className="link-linkName-container">
                        <input onChange={(e) => storeLinkNames(i, e.target.value)} type="text" placeholder='Video Name...' />
                        <input onChange={(e) => storeLinks(i, e.target.value)} type="text" placeholder='Video Link...' />
                    </div>
                </div>
            );
        };

        return links;
    };
    //


    const storeLinkNames = (i, value) => {
        setLinkNames((prevInputValues) => {
            const newInputValues = [...prevInputValues];
            newInputValues[i] = value;
            return newInputValues;
        });
    };

    const storeLinks = (i, value) => {
        setLinks((prevInputValues) => {
            const newInputValues = [...prevInputValues];
            newInputValues[i] = value;
            return newInputValues;
        });
    };

  return (
    <div className='add-formation-page'>
        <div className="left-section-f">
            <div className="left-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16">
                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                    <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
                </svg>

                Formation details
            </div>

            <div className="add-photo-container">
                <p>Add a photo for the course:</p>
                <input onChange={(e) => setPhoto(e.target.files[0])} type="file" id='add-photo' style={{display: 'none'}} />

                <label htmlFor='add-photo' className="photo-frame">
                    {
                        photo !== '' ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-check-fill" viewBox="0 0 16 16">
                                <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 4.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                            </svg>
                        )
                    }
                </label>
            </div>

            <div className="add-formation-name">
                <p>Add formation name:</p>
                <input onChange={(e) => {setName(e.target.value)}} value={name} type="text" placeholder='Formation Name...' />
            </div>

            <div className="add-formation-price">
                <p>Add formation price:</p>
                <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" placeholder='Formation Price...' />
            </div>

            <div className="add-formation-status">
                <p>Add formation status:</p>
                <input onChange={(e) => setStatus(e.target.value)} value={status} type="text" placeholder='Formation Status...' />
            </div>
        </div>
        <div className="right-section-f">
            <div className="right-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                </svg>

                Formation videos
            </div>

            <button onClick={() => setLinksNumber(linksNumber + 1)} className='add-vid-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                </svg>
            </button>

            { renderLinkFields() }
        </div>

        <button className='submit-btn'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z"/>
            </svg>

            Upload Formation
        </button>
    </div>
  )
};

export default AddFormationPage;