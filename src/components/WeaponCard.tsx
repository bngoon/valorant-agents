import { Weapon } from '../utils/Weapons';
import { LoadoutManager } from '../utils/LoadoutManager';

interface WeaponCardProps {
  weapon: Weapon;
  manager: LoadoutManager;
  hideAddButton?: boolean;
  
}

const WeaponCard = ({ weapon, manager, hideAddButton }: WeaponCardProps) => {
  const handleAddToLoadout = () => {
    const added = manager.addWeapon(weapon.uuid);
    if (!added) {
      alert("Loadout full or already added!");
    } else {
      alert(`${weapon.name} added to your loadout!`);
    }
  };

  return (
    <div className="bg-gray-800 rounded p-4">
      <img src={weapon.displayIcon} alt={weapon.name} className="w-full h-auto mb-2 rounded" />
      <h2 className="text-xl font-semibold">{weapon.name}</h2>
      <p className="text-sm text-pink-400 mb-2">{weapon.getCleanCategory()}</p>
      <p>{weapon.getStatsSummary()}</p>
      <p className="mt-1">
        💰 Cost: {weapon.cost ?? 'N/A'} —{" "}
        {weapon.isBudgetFriendly() ? "Budget Friendly ✅" : "Expensive 💸"}
      </p>
      {!hideAddButton && (
        <button
            onClick={handleAddToLoadout}
            className='mt-2 bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded text-white font-semibold'
        >
            Add to Loadout
        </button>
      )}
    </div>
  );
};

export default WeaponCard;
