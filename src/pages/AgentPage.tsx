import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Agent } from '../types';
import AgentDetail from '../components/AgentDetail';
import { getAgentByIdURL } from '../utils/api';
import { LoadoutManager } from '../utils/LoadoutManager';

const AgentPage = () => {
    const navigate = useNavigate();
    const manager = new LoadoutManager();
    const [agent, setAgent] = useState<Agent | null>(null);
    const { uuid } = useParams<{ uuid: string }>();
    const [loading, setLoading] = useState(true);


    const handleSetMain = () => {
      if (!agent) return;
      manager.setAgent(agent.uuid);
      alert(`${agent.displayName} selected as your main!`);
      navigate('/weapons');
    };
  

    useEffect(() => {
        if (!uuid) return;
        axios
      .get(getAgentByIdURL(uuid))
      .then((res) => {
        setAgent(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch agent:', err);
        setLoading(false);
      });
    }, [uuid]);

      if (loading) {
        return <div className="text-white">Loading...</div>
      }

      if (!agent) {
        return <div className='text-white'>Agent not found.</div>
      }

    return (
        <div className="p-4 bg-black min-h-screen text-white pb-24">
            <button onClick={() => navigate(-1)} className="mb-4 text-sm underline text-gray-400 hover:text-white transition">
            ← Back
            </button>   
            <AgentDetail agent={agent} onSetMain={handleSetMain} />
             
      </div>
    );
}
export default AgentPage;