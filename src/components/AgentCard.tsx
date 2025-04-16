import { Agent } from '../types';

interface AgentCardProps {
  agent: Agent;
  onClick: () => void;
}

const AgentCard = ({ agent, onClick }: AgentCardProps) => {
  return (
    <div
      className="bg-gray-900 rounded-lg p-3 text-white cursor-pointer hover:bg-gray-700 transition"
      onClick={onClick}
    >
      <img
        src={agent.displayIcon}
        alt={agent.displayName}
        className="rounded w-full h-auto"
      />
      <p className="text-center mt-2 font-semibold">{agent.displayName}</p>
    </div>
  );
};

export default AgentCard;
