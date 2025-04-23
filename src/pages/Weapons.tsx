import { useEffect, useState } from "react";
import axios from "axios";
import { Weapon } from "../utils/Weapons"; 
import { WeaponData } from "../types"; 
import WeaponCard from "../components/WeaponCard";
import { LoadoutManager } from "../utils/LoadoutManager";
import { getAllWeaponsURL } from "../utils/api";
import {toast} from "react-hot-toast";
const Weapons = () => {
  const [weapons, setWeapons] = useState<Weapon[]>([]);
  const manager = new LoadoutManager(2);


  /*  get all weapons from the API and create class instances from the data */ 
  useEffect(() => {
    axios
      .get(getAllWeaponsURL())
      .then((res) => {
        const weaponList = res.data.data.map((w: WeaponData) => {
          return new Weapon(
            w.uuid,
            w.displayName,
            w.category,
            w.weaponStats?.fireRate ?? null,
            w.weaponStats?.magazineSize ?? null,
            w.shopData?.cost ?? null,
            w.displayIcon,
            w.weaponStats?.firstBulletAccuracy ?? null
          );
        });
        setWeapons(weaponList);
      })
      .catch(toast.error);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white p-4 pb-48">
      <h1 className="text-3xl font-bold mb-6">Weapons</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {weapons.map((weapon) => (
          <WeaponCard key={weapon.uuid} weapon={weapon} manager={manager} />
        ))}
      </div>
    </div>
  );
};

export default Weapons;
