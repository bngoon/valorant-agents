import { Weapon } from '../utils/Weapons';

interface WeaponCardProps {
  weapon: Weapon;
}

const WeaponCard = ({ weapon }: WeaponCardProps) => {
  return (
    <div className="bg-gray-800 rounded p-4">
      <img
        src={weapon.displayIcon}
        alt={weapon.name}
        className="w-full h-auto mb-2 rounded"
      />
      <h2 className="text-xl font-semibold">{weapon.name}</h2>
      <p className="text-sm text-pink-400 mb-2">{weapon.category}</p>
      <p>{weapon.getStatsSummary()}</p>
      <p className="mt-1">
        💰 Cost: {weapon.cost ?? 'N/A'} —{' '}
        {weapon.isBudgetFriendly() ? 'Budget Friendly ✅' : 'Expensive 💸'}
      </p>
    </div>
  );
};

export default WeaponCard;
