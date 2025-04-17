import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Agent } from "../types";
import { getAllAgentsURL } from "../utils/api";
import { LoadoutManager } from '../utils/LoadoutManager';
import AgentCard from '../components/AgentCard';
const Agents = () => {

  const navigate = useNavigate();
  const manager = new LoadoutManager();
  const [agent, setAgent] = useState<Agent[]>([]);
  

  useEffect(() => {
    axios
      .get(getAllAgentsURL)
      .then((res) => setAgent(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-black min-h-screen text-white px-4 py-6 sm:px-6 md:px-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Valorant Agents</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {agent.map((agent) => (
  <AgentCard
    key={agent.uuid}
    agent={agent}
    manager={manager}
    selectable
    onClick={() => navigate(`/agent/${agent.uuid}`)}
  />
))}
      </div>
    </div>
  );
};

export default Agents;
