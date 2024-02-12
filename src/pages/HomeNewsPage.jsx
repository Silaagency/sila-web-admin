import '../styles/homeNewsPage.css';
import image from '../images&logos/1.png';
import video from '../images&logos/mbVid.mp4';
import { useEffect, useRef, useState } from 'react';

function HomeNewsPage() {

    const fileInput = useRef(null);

    const [uploadLoading, setUploadLoading] = useState(false);
    const [apiData, setApiData] = useState([]);

    const videoRegex = /\b(mp4|mov)\b/;
    const imageRegex = /\b(jpg|png|jpeg|gif)\b/;

    const upload = () => {
        setUploadLoading(true);

        if (fileInput.current) {
            const formData = new FormData();
            formData.append('media', fileInput.current.files[0]);

            const newsApi = async () => {
                try {
                    const response = await fetch('https://sila-b.onrender.com/adminMedia', {
                        method: 'POST',
                        body: formData
                    });
                    const data = await response.json();
                    setUploadLoading(false);
                    alert('Uploaded successfully!');
                    window.location.reload();
                } catch (err) {
                    console.error(err);
                }
            };

            newsApi();
        }
    };

    useEffect(() => {
        const newsApi = async () => {
            try {
                const response = await fetch('https://sila-b.onrender.com/adminMedia');
                const data = await response.json();
                setApiData(data.media)
            } catch (err) {
                console.error(err);
            }
        };

        newsApi();
    }, []);

    const remove = (_id) => {
        const target = apiData.find((x) => x._id === _id);

        const deleteNewsApi = async () => {
            try {
                const response = await fetch(`https://sila-b.onrender.com/adminMedia/${target._id}`, {
                    method: 'DELETE'
                });

                const data = await response.json();
                alert('Deleted successfully!');
                window.location.reload();
            } catch (err) {
                console.error(err);
            }
        };

        deleteNewsApi();
    };

  return (
    <div className='home-news-page'>
        <input ref={fileInput} id='upload' type="file" className='file-input' />
        
        <div className="upload-section">
            Press the button to upload content

            <label htmlFor="upload" className="upload-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                </svg>
            </label>

            <button onClick={upload}>
                {
                    uploadLoading ? (
                        <p>Uploading in progress... (please wait)</p>
                    ) : (
                        <p>Upload</p>
                    )
                }
            </button>
        </div>

        <div className="content">
            {
                apiData.map((x) => (
                    <>
                        {
                            imageRegex.test(x.media) && (
                                <div className="image-container">
                                    <img src={x.media} />
                                    <button onClick={() => remove(x._id)}>Delete</button>
                                </div>
                            )
                        }
                        
                        {
                            videoRegex.test(x.media) && (
                                <div className="video-container">
                                    <video src={x.media} controls />
                                    <button onClick={() => remove(x._id)}>Delete</button>
                                </div>
                            )
                        }
                    </>
                ))
            }
        </div>
    </div>
  )
}

export default HomeNewsPage