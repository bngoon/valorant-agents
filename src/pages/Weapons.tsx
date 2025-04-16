import { useEffect, useState } from 'react';
import axios from 'axios';
import { Weapon } from '../utils/Weapons'; // 📦 for typing the API data
import { WeaponData } from '../types'; // 🔧 for creating class instances

const Weapons = () => {
    const [weapons, setWeapons] = useState<Weapon[]>([]);
  
    useEffect(() => {
      axios.get('https://valorant-api.com/v1/weapons')
        .then(res => {
          const weaponList = res.data.data.map((w: WeaponData) => {
            return new Weapon(
              w.uuid,
              w.displayName,
              w.category,
              w.weaponStats?.fireRate ?? null,
              w.weaponStats?.magazineSize ?? null,
              w.shopData?.cost ?? null
            );
          });
          setWeapons(weaponList);
        })
        .catch(console.error);
    }, []);
  
    return (
      <div className="bg-black min-h-screen text-white p-4">
        <h1 className="text-3xl font-bold mb-6">Weapons</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {weapons.map((weapon) => (
            <div key={weapon.uuid} className="bg-gray-800 rounded p-4">
              <h2 className="text-xl font-semibold">{weapon.name}</h2>
              <p className="text-sm text-pink-400 mb-2">{weapon.category}</p>
              <p>{weapon.getStatsSummary()}</p>
              <p className="mt-1">
                💰 Cost: {weapon.cost ?? 'N/A'} —{" "}
                {weapon.isBudgetFriendly() ? "Budget Friendly ✅" : "Expensive 💸"}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Weapons;
  


