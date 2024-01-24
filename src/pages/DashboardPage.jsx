import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/dashboardPage.css';
import dashboardImage from '../images&logos/7140739_3515462.jpg';

function DashboardPage() {
  return (
    <div className='dashboard-page'>
      <Sidebar />
      <img className='dashboard-img' src={dashboardImage} alt="" />
    </div>
  )
};

export default DashboardPage;