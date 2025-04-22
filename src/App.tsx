import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Agents from './pages/Agents';
import AgentPage from './pages/AgentPage';
import Weapons from './pages/Weapons';
import Loadout from './pages/Loadout';
import NavBar from './components/NavBar';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/agent/:uuid" element={<AgentPage />} />
        <Route path="/weapons" element={<Weapons />} />
        <Route path="/loadout" element={<Loadout />} />
      </Routes>
      <NavBar />
      <Toaster position="top-right" reverseOrder={false} />
    </BrowserRouter>
  );
};

export default App;