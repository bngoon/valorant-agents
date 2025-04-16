import { Agent } from '../types';

const AgentDetail = ({ agent }: { agent: Agent }) => {
  return (
    <div className="text-white">
      <img
        src={agent.fullPortrait}
        alt={agent.displayName}
        className="w-full max-w-md mx-auto mb-6"
      />

      <h1 className="text-3xl font-bold mb-1 text-center">{agent.displayName}</h1>
      <p className="text-center italic text-pink-400">{agent.role?.displayName}</p>

      <p className="text-sm text-gray-300 mt-4">{agent.description}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Abilities</h2>
      <div className="grid grid-cols-1 gap-4">
        {agent.abilities.map((ability, index) => (
          <div key={index} className="p-3 bg-gray-800 rounded-lg">
            <p className="text-pink-300 text-sm font-bold">{ability.slot}</p>
            <p className="text-lg">{ability.displayName}</p>
            <p className="text-sm text-gray-300 mt-1">{ability.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentDetail;
