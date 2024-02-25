import React, { useEffect, useState } from 'react';
import '../styles/bmGrid.css';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';

function BMGrid() {

    const [apiData, setApiData] = useState([]);

    const [acceptLoading, setAcceptLoading] = useState(false);
    const [rejectedLoading, setRejectedLoading] = useState(false);

    const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

    useEffect(() => {
        const bmShareApi = async () => {
            try {
                const response = await fetch('https://sila-b.onrender.com/bmShare');
                const data = await response.json();
                setApiData(data.bmShares);
            } catch (err) {
                console.error(err);
            }
        };

        bmShareApi();
    }, []);

    const accept = (_id) => {
        setAcceptLoading(true);

        const target = apiData.find((x) => x._id === _id);

        const bmStatusPatchApi = async () => {
            try {
                const response = await fetch(`https://sila-b.onrender.com/bmShare/${target._id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        status: 'Accepted'
                    })
                });

                const data = await response.json();
                setAcceptLoading(false);
                window.location.reload();
            } catch (err) {
                console.error(err);
            }
        };

        bmStatusPatchApi();
    };

    const reject = (_id) => {
        setRejectedLoading(true);

        const target = apiData.find((x) => x._id === _id);

        const bmStatusPatchApi = async () => {
            try {
                const response = await fetch(`https://sila-b.onrender.com/bmShare/${target._id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        status: 'Rejected'
                    })
                });

                const data = await response.json();
                setRejectedLoading(false);
                window.location.reload();
            } catch (err) {
                console.error(err);
            }
        };

        bmStatusPatchApi();
    };

    const deleteBM = (_id) => {
        const target = apiData.find((x) => x._id === _id);
    
        const bmShareApi = async () => {
          try {
            const response = await fetch(`https://sila-b.onrender.com/bmShare/${target._id}`, {
              method: 'DELETE'
            });
    
            const data = await response.json();
            alert('Deleted successfully!');
            window.location.reload();
          } catch (err) {
            console.error(err);
          }
        };
    
        bmShareApi();
    };

  return (
    <div className='bm-grid'>
        <div className="id">Application ID</div>
        <div className="ad-name">Ad name</div>
        <div className="bm-id">BM ID</div>
        <div className="date">Date</div>
        <div className="decision">Decision</div>
        <div className="delete">Delete</div>

        {
            apiData.map((x) => (
                <>
                    <div>{x._id}</div>
                    <div>{x.adName}</div>
                    <div>{x.bmID}</div>
                    <div>{`${x.date.slice(0, 4)} . ${x.date.slice(5, 7)} . ${x.date.slice(8, 10)}`}</div>
                    {
                        x.status === 'Pending' && (
                            <div className='decision-container'>
                                <button onClick={() => accept(x._id)}>
                                    {
                                        acceptLoading ? (
                                            <RingLoader color={'#123abc'} loading={true} css={override} size={20} />
                                        ) : (
                                            <p>Accept</p>
                                        )
                                    }
                                </button>
                                <button onClick={() => reject(x._id)}>
                                    {
                                        rejectedLoading ? (
                                            <RingLoader color={'#123abc'} loading={true} css={override} size={20} />
                                        ) : (
                                            <p>Reject</p>
                                        )
                                    }
                                </button>
                            </div>
                        )
                    }

                    {
                        x.status === 'Accepted' && (
                            <div>Accepted</div>
                        )
                    }

                    {
                        x.status === 'Rejected' && (
                            <div>Rejected</div>
                        )
                    }

                    <div>
                        <button onClick={() => deleteBM(x._id)} className='delete-btn'>
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

export default BMGrid;