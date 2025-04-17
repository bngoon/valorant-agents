import { Agent } from "../types";

interface AgentCardProps {
  agent: Agent;
  onClick: () => void;
  selectable?: boolean;
  manager?: any;
  isMainAgent?: boolean;
}


const AgentCard = ({ agent, onClick }: AgentCardProps) => {
  return (
    <div
      className="bg-gray-900 rounded-lg p-3 text-white hover:bg-purple-700 transition cursor-pointer"
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
