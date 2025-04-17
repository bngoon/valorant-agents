export class Weapon {
    constructor(
      public uuid: string,
      public name: string,
      public category: string,
      public fireRate: number | null,
      public magazineSize: number | null,
      public cost: number | null,
      public displayIcon: string,
      public firstBulletAccuracy: number | null,
    ) {}
  
    isSidearm(): boolean {
      return this.category.includes('Sidearm');
    }
  
    isRifle(): boolean {
      return this.category.includes('Rifle');
    }

    getCleanCategory(): string {
      return this.category.split('::')[1] || this.category;
    }

    getFirstBulletAccuracy(): string {
      return this.firstBulletAccuracy !== null ? `${this.firstBulletAccuracy}` : 'N/A';
    }
  
    isHeavy(): boolean {
      return this.category.includes('Heavy');
    }
    
  
    getStatsSummary(): string {
      return `🔥 ${this.fireRate ?? 'N/A'} rounds/sec, 🧱 ${this.magazineSize ?? 'N/A'} rounds `;
    }
  
    isBudgetFriendly(): boolean {
      return this.cost !== null && this.cost <= 1000;
    }
  }
  