import './styles/universal.css';
import WelcomePage from './pages/WelcomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import MetaPage from './pages/MetaPage';
import WalletPage from './pages/WalletPage';
import AdAccountsPage from './pages/AdAccountsPage';
import BMSharePage from './pages/BMSharePage';
import AdsDepositPage from './pages/AdsDepositPage';
import RefundPage from './pages/RefundPage';

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
          <Route path='/ad-deposit' element={<AdsDepositPage />} />
          <Route path='/refund' element={<RefundPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;