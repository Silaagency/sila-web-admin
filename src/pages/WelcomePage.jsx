import '../styles/welcomePage.css';
import DashboardImage from '../images&logos/4655384_2456054.jpg';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function WelcomePage() {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/dashboard');
    }, 5000);
  }, []);

  return (
    <div className='welcome-page'>
      <img className='dashboard-image' src={DashboardImage} />
      <img className='welcome-loading' src="https://cdn.dribbble.com/users/55440/screenshots/3065294/bubbles.gif" />
    </div>
  )
}

export default WelcomePage