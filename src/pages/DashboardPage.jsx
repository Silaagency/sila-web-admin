import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/dashboardPage.css';
import DashboardCards from '../components/DashboardCards';

function DashboardPage() {
  return (
    <div className='dashboard-page'>
      <Sidebar />
      <DashboardCards />
    </div>
  )
};

export default DashboardPage;