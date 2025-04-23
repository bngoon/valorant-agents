import { Weapon } from '../utils/Weapons';
import { LoadoutManager } from '../utils/LoadoutManager';
import { toast } from 'react-hot-toast';

interface WeaponCardProps {
  weapon: Weapon;
  manager: LoadoutManager;
  hideAddButton?: boolean;
  
}
// A clickable card representing a weapon. passing weapon and onClick props and manager
const WeaponCard = ({ weapon, manager, hideAddButton, }: WeaponCardProps) => {
  const handleAddToLoadout = () => {
    const added = manager.addWeapon(weapon.uuid);
    if (!added) {
      toast.success("Loadout full or already added!");
    } else {
      toast(`${weapon.name} added to your loadout!`);
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 text-white w-full hover:bg-gray-700">
      <img src={weapon.displayIcon} alt={weapon.name} className="w-full h-auto mb-2 rounded" />
      <h2 className="text-xl font-semibold">{weapon.name}</h2>
      <p className="text-sm text-pink-400 mb-2">{weapon.getCleanCategory()}</p>
      <p className="text-sm mt-1">🎯 First Shot Accuracy: {weapon.getFirstBulletAccuracy()}</p>
      <p>{weapon.getStatsSummary()}</p>
      <p className="mt-1">
        💰 Cost: {weapon.cost ?? 'N/A'} —{" "}
        {weapon.isBudgetFriendly() ? "Budget Friendly ✅" : "Expensive 💸"}
      </p>
      {!hideAddButton && (
        <button
            onClick={handleAddToLoadout}
            className='bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded text-white font-semibold w-full'
        >
            Add to Loadout
        </button>
      )}
    </div>
  );
};

export default WeaponCard;
