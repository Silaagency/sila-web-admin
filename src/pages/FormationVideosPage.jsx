import { useState } from 'react';
import '../styles/formationVideosPage.css';

function FormationVideosPage() {

    const [addVideo, setAddVideo] = useState(false);

    const [changeVidName, setChangeVidName] = useState(false);
    const [changeVidLink, setChangeVidLink] = useState(false);

    const [videoName, setVideoName] = useState('');
    const [videoLink, setVideoLink] = useState('');

    const [addVideoName, setAddVideoName] = useState('');
    const [addVideoLink, setAddVideoLink] = useState('');

  return (
    <div className='formation-videos-page'>
        <div className="add-video-container">
            {
                addVideo ? (
                    <div className='add-vid-field'>
                        <div>
                            <input onChange={(e) => setAddVideoName(e.target.value)} value={addVideoName} type="text" placeholder='Video Name...' />
                            <input onChange={(e) => setAddVideoLink(e.target.value)} value={addVideoLink} type="text" placeholder='Video Link...' />
                        </div>

                        <div>
                            <button onClick={() => setAddVideo(false)} className='add-cancel-btn'>Cancel</button>
                            <button className='add-save-btn'>Save</button>
                        </div>
                    </div>
                ) : (
                    <button onClick={() => setAddVideo(true)} className='add-video-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                        </svg>

                        Add Video
                    </button>
                )
            }
        </div>

        <div className="formation-vids-grid">
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
                </svg>
                Video Name
            </p>

            <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                </svg>
                Video Link
            </p>

            <p>Delete Video</p>

            <div className='video-name-container'>
                {
                    changeVidName ? (
                        <div className='input-btns-container'>
                            <input onChange={(e) => setVideoName(e.target.value)} value={videoName} type="text" placeholder='Video Name...' />
                            <div className="cancel-save-btns-container">
                                <button onClick={() => setChangeVidName(false)}>Cancel</button>
                                <button>Save</button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <button onClick={() => setChangeVidName(true)} className='edit-btn'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                </svg>
                            </button>
                            This is a video
                        </>
                    )
                }
            </div>

            <div className='video-link-container'>
                {
                    changeVidLink ? (
                        <div className='input-btns-container'>
                            <input onChange={(e) => setVideoLink(e.target.value)} value={videoLink} type="text" placeholder='Video Link...' />
                            <div className="cancel-save-btns-container">
                                <button onClick={() => setChangeVidLink(false)}>Cancel</button>
                                <button>Save</button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <button onClick={() => setChangeVidLink(true)} className='edit-btn'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                </svg>
                            </button>
                            https://drive.google.com/file/d/1g4m8ToRJfjQL8Wvw8hxEf6homvTVYpnl/view?usp=sharing
                        </>
                    )
                }
            </div>

            <div className="delete-video-container">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
  )
};

export default FormationVideosPage;