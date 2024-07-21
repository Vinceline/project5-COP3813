// TODO: Define SuperHuman, SuperHero, and SuperVillain classes here
// SuperHuman class
class SuperHuman {
   constructor(name, powerLevel) {
      this.name = name;
      this.powerLevel = powerLevel;
   }
}

// SuperHero class extends SuperHuman
class SuperHero extends SuperHuman {
   constructor(name, alias, powerLevel) {
      super(name, powerLevel);
      this.alias = alias;
   }

   battle(villain) {
      return this.powerLevel >= villain.powerLevel;
   }
}

// SuperVillain class extends SuperHuman
class SuperVillain extends SuperHuman {
   constructor(name, alias, powerLevel) {
      super(name, powerLevel);
      this.alias = alias;
   }

   getEvilChuckle() {
      return "Ha ha ha!";
   }
}
