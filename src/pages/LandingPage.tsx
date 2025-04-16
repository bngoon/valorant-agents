import { useNavigate } from 'react-router-dom';
import landingImage from '../assets/landing.jpg';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-black flex flex-col justify-center items-center text-center px-6 text-white"
      style={{
        backgroundImage: `url(${landingImage})`,
        backgroundSize: '110% auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        
      }}
    >
      <div className="bg-black/60 p-6 rounded-md shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Valorant Agent Viewer</h1>
        <p className="text-lg text-gray-300 mb-8">Browse agent cards, roles, and abilities</p>
        <button
          onClick={() => navigate('/agents')}
          className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full text-lg font-semibold transition"
        >
          View Agents
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
