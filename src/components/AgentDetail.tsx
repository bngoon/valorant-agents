import { Agent } from '../types';

interface AgentDetailProps {
  agent: Agent;
  onSetMain: () => void;
}

const AgentDetail = ({ agent, onSetMain }: AgentDetailProps) => {
  return (
    <div className="text-white">
      <img
        src={agent.fullPortrait}
        alt={agent.displayName}
        className="w-full max-w-md mx-auto mb-6 transition duration-300 ease-in-out hover:ring-4 hover:ring-purple-600 rounded"
      />

      <div className="flex justify-center items-center gap-4 mb-1">
        <h1 className="text-3xl font-bold">{agent.displayName}</h1>
        <button
          onClick={onSetMain}
          className="bg-indigo-600 hover:bg-indigo-700 px-3 py-1 rounded text-white text-xs"
        >
          Set as Main →
        </button>
      </div>

      <p className="text-center italic text-pink-400 ">{agent.role?.displayName}</p>

      <p className="text-sm text-gray-300 mt-4">{agent.description}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Abilities</h2>
      <div className="grid grid-cols-1 gap-4">
        {agent.abilities.map((ability, idx) => (
          <div key={idx} 
            className="p-3 bg-gray-800 rounded-lg transition duration-300 ease-in-out hover:ring-2 hover:ring-purple-500">
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
