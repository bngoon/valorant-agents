export interface Agent {
    displayIcon: string | undefined;
    uuid: string;
    displayName: string;
    fullPortrait: string;
    description?: string;
    role?: {
      displayName: string;
    };
    abilities: {
      slot: string;
      displayName: string;
      description: string;
      displayIcon?: string;
    }[];
  }
  

  export interface WeaponData {
    uuid: string;
    displayName: string;
    category: string;
    displayIcon: string;         // ✅ Add this
    weaponStats: {
      fireRate: number;
      magazineSize: number;
    } | null;
    shopData: {
      cost: number;
    } | null;
  }