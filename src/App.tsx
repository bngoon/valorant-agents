import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import AgentPage from './pages/AgentPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/agents" element={<Home />} />
        <Route path="/agent/:uuid" element={<AgentPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;