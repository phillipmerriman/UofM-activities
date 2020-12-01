function Character (name, profession, age, strength, hitPoints) {
    this.name = name;
    this.profession = profession;
    this.age = age;
    this.strength = strength;
    this.hitPoints = hitPoints;
    this.printStats = function () {
        console.log(`${this.name}\n Profession: ${this.profession}\n age: ${this.age}\n Strength: ${this.strength}\n HitPoints: ${this.hitPoints}`);
        console.log("\n----------------\n");
    }
}

const sarkhan = new Character("Sarkhan", "Planeswalker", 200, 4, 75);
const nivMizzet = new Character("Niv-Mizzet", "Dragon", 4000, 5, 95);


Character.prototype.isAlive = function () {
    if (this.hitPoints > 0) {
        console.log(`${this.name} is still kicking!`);
        console.log("\n----------------\n");
        return true;
    }
    else {
        console.log(`${this.name} has perished.`);
        console.log("\n----------------\n");
        return false;
    }
}

Character.prototype.attack = function (attackedChar) {
        attackedChar.hitPoints -= this.strength;
    console.log(`${this.name} attacks ${attackedChar.name} for ${this.strength}! ${attackedChar.name}'s health is now ${attackedChar.hitPoints}.`);
    console.log("\n----------------\n");
}

Character.prototype.levelUp = function () {
    this.age += 1;
    this.strength += 5;
    this.hitPoints += 25;
    console.log(`${this.name} levels up! ${this.name}'s age is now ${this.age}.`);
    console.log("\n----------------\n");
}

sarkhan.printStats();
nivMizzet.printStats();

sarkhan.attack(nivMizzet);
nivMizzet.printStats();
nivMizzet.isAlive();

nivMizzet.attack(sarkhan);
sarkhan.printStats();
sarkhan.isAlive();

sarkhan.levelUp();
sarkhan.printStats();

nivMizzet.levelUp();
nivMizzet.printStats();