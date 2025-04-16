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
  