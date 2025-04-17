export class LoadoutManager {
  private loadout: string[] = [];
  private storageKey = "valorantLoadout";

  constructor(private maxSlots: number = 2) {
    this.loadFromStorage();
  }

  addWeapon(uuid: string): boolean {
    if (this.loadout.length >= this.maxSlots) return false;
    if (!this.loadout.includes(uuid)) {
      this.loadout.push(uuid);
      this.saveToStorage();
    }
    return true;
  }

  removeWeapon(uuid: string): void {
    this.loadout = this.loadout.filter((id) => id !== uuid);
    this.saveToStorage();
  }

  getLoadout(): string[] {
    return [...this.loadout];
  }

  isFull(): boolean {
    return this.loadout.length >= this.maxSlots;
  }

  clearLoadout(): void {
    this.loadout = [];
    this.saveToStorage();
  }

  saveToStorage(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.loadout));
  }

  loadFromStorage(): void {
    const stored = localStorage.getItem(this.storageKey);
    if (stored) {
      this.loadout = JSON.parse(stored);
    }
  }
  private selectedAgent: string | null = null;

  setAgent(uuid: string) {
    this.selectedAgent = uuid;
    localStorage.setItem("valorantSelectedAgent", uuid);
  }
  getAgent(): string | null {
    return this.selectedAgent ?? localStorage.getItem("valorantSelectedAgent");
  }
  clearAgent() {
    this.selectedAgent = null;
    localStorage.removeItem("valorantSelectedAgent");
  }
}
