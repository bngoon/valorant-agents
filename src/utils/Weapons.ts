export class Weapon {
    constructor(
      public uuid: string,
      public name: string,
      public category: string,
      public fireRate: number | null,
      public magazineSize: number | null,
      public cost: number | null,
      public displayIcon: string
    ) {}
  
    isSidearm(): boolean {
      return this.category.includes('Sidearm');
    }
  
    isRifle(): boolean {
      return this.category.includes('Rifle');
    }
  
    isHeavy(): boolean {
      return this.category.includes('Heavy');
    }
  
    getStatsSummary(): string {
      return `🔥 ${this.fireRate ?? 'N/A'} rounds/sec, 🧱 ${this.magazineSize ?? 'N/A'} rounds`;
    }
  
    isBudgetFriendly(): boolean {
      return this.cost !== null && this.cost <= 1000;
    }
  }
  