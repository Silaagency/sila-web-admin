import './styles/universal.css';
import WelcomePage from './pages/WelcomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import MetaPage from './pages/MetaPage';
import WalletPage from './pages/WalletPage';
import AdAccountsPage from './pages/AdAccountsPage';
import BMSharePage from './pages/BMSharePage';
import RefundPage from './pages/RefundPage';
import PassPage from './pages/PassPage';
import MediaBuyingPage from './pages/MediaBuyingPage';
import HomeNewsPage from './pages/HomeNewsPage';
import ShootingPage from './pages/ShootingPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/meta' element={<MetaPage />} />
          <Route path='/wallet' element={<WalletPage />} />
          <Route path='/ad-accounts' element={<AdAccountsPage />} />
          <Route path='/bm' element={<BMSharePage />} />
          <Route path='/refund' element={<RefundPage />} />
          <Route path='/pass' element={<PassPage />} />
          <Route path='/media' element={<MediaBuyingPage />} />
          <Route path='/homeNews' element={<HomeNewsPage />} />
          <Route path='/shooting' element={<ShootingPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;