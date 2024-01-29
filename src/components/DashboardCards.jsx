import React, { useEffect, useState } from 'react';
import '../styles/dashboardCards.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function DashboardCards() {

    const [usersCount, setUsersCount] = useState(null);
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        const usersApi = async () => {
            try {
                const response = await fetch('http://192.168.1.3:4000/users');
                const data = await response.json();
                setUsersCount(data.count);
                setUsersData(data.users);
            } catch (err) {
                console.error(err);
            }
        };

        usersApi();
    }, []);

  return (
    <div className='dashboard-cards'>
        <div className="users-card card">
            <div className='users-text'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                    </svg>
                    <p>Users:</p>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hdd-stack-fill" viewBox="0 0 16 16">
                    <path d="M2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"/>
                </svg>
            </div>

            {
                usersCount !== null && (
                    <CircularProgressbar value={30} text={usersCount} strokeWidth={10} styles={buildStyles({textColor: '#000', pathColor: 'purple'})} />
                )
            }

            <div className='info-container'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-app-indicator" viewBox="0 0 16 16">
                    <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z"/>
                    <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                </svg>

                <p>The users count in our Database</p>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart-fill" viewBox="0 0 16 16">
                    <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
                </svg>
            </div>
        </div>

        <div className="users-list-card card">
            <div className='available-users'>
                <p>Currently available users:</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart-fill" viewBox="0 0 16 16">
                    <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
                </svg>
            </div>

            <div className="users-list">
                {
                    usersData.map((x) => (
                        <div className="user">
                            <img src={x.profilePhoto} />
                            
                            <div>{x.userName}</div>

                            <div>{x.date}</div>

                            <div>{x._id}</div>
                        </div>
                    ))
                }
            </div>
        </div>

        <div className="users-card card"></div>

        <div className="users-card card"></div>

        <div className="users-card card"></div>
    </div>
  )
}

export default DashboardCards;