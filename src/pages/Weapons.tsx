import { useEffect, useState } from 'react';
import axios from 'axios';
import { Weapon } from '../utils/Weapons'; // 📦 for typing the API data
import { WeaponData } from '../types'; // 🔧 for creating class instances
import {WeaponCard} from '../components/WeaponCard';

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
              w.shopData?.cost ?? null,
              w.displayIcon
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
          <WeaponCard key={weapon.uuid} weapon={weapon} />
          ))}
        </div>

      </div>
    );
  };
  
  export default Weapons;
  


