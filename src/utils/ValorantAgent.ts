export class ValorantAgent {
    constructor(
        public uuid: string,
        public displayName: string,
        public description: string,
        public role: string,
        public abilities: string[]
    ){}

    isDuelist(){
        return this.role.toLowerCase() === 'duelist';
    }

    isSentinel(){
        return this.role.toLowerCase() === 'sentinel';
    }
    hasAbility(abilityName: string){
        return this.abilities.some(a => a.toLowerCase() === abilityName.toLowerCase());
    }

    shortName(){
        return this.displayName.split(' ')[0];
    }

    toTagString(){
        return `${this.role} - ${this.displayName}`
    }


}