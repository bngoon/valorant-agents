import { useEffect, useState } from "react";
import axios from "axios";
import { WeaponData } from "../types";
import { LoadoutManager } from "../utils/LoadoutManager";
import WeaponCard from "../components/WeaponCard";
import { Weapon } from "../utils/Weapons";
import { useNavigate } from "react-router-dom";
import { getAllWeaponsURL } from "../utils/api";
import { Agent } from "../types";
import { getAgentByIdURL } from "../utils/api";

const Loadout = () => {
  const [weapons, setWeapons] = useState<Weapon[]>([]);
  const manager = new LoadoutManager(2);
  const [agent, setAgent] = useState<Agent | null>(null);
  const navigate = useNavigate();

  const handleClear = () => {
    manager.clearLoadout(); 
    navigate("/agents");
  };

  useEffect(() => {
    const agentId = manager.getAgent();
    if (!agentId) return;

    axios
      .get(getAgentByIdURL(agentId))
      .then((res) => setAgent(res.data.data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    const loadoutIds = manager.getLoadout();

    if (loadoutIds.length === 0) return;

    axios
      .get(getAllWeaponsURL())
      .then((res) => {
        const allWeapons: WeaponData[] = res.data.data;
        const matched = allWeapons.filter((w) => loadoutIds.includes(w.uuid));

        const loadedWeapons = matched.map(
          (w) =>
            new Weapon(
              w.uuid,
              w.displayName,
              w.category,
              w.weaponStats?.fireRate ?? null,
              w.weaponStats?.magazineSize ?? null,
              w.shopData?.cost ?? null,
              w.displayIcon,
              w.weaponStats?.firstBulletAccuracy ?? null
            )
        );

        setWeapons(loadedWeapons);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white px-4 py-6">
      {agent && (
        <div className="text-center mb-6">
          <img
            src={agent.displayIcon}
            alt={agent.displayName}
            className="mx-auto w-24 h-24 object-contain"
          />
          <h2 className="text-lg font-bold mt-2">{agent.displayName}</h2>
          <p className="text-pink-400 text-sm">{agent.role?.displayName}</p>
        </div>
      )}

      <h1 className="text-3xl font-bold mb-6">My Loadout</h1>
      {weapons.length === 0 ? (
        <p className="text-gray-400">No weapons in loadout.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {weapons.map((weapon) => (
            <WeaponCard
              key={weapon.uuid}
              weapon={weapon}
              manager={manager}
              hideAddButton
            />
          ))}
        </div>
      )}
      {weapons.length > 0 && (
        <button
          onClick={handleClear}
          className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded pb-10 mb-5"
        >
          Clear Loadout & Return to Agents
        </button>
      )}
    </div>
  );
};

export default Loadout;
