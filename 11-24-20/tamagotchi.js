function DigitalPal () {
    this.isHungry = false;
    this.isSleepy = false;
    this.isBored = true;
    this.age = 0;
    this.isOutside = false;
    this.houseCondition = 100;
}

DigitalPal.prototype.feed = function () {
    if (this.isHungry) {
        console.log("That was YUMMY!!");
        this.isHungry = false;
        this.isSleepy = true;
    } else {
        console.log("No thanks! I'm full.");
    }
}

DigitalPal.prototype.sleep = function () {
    if (this.isSleepy) {
        console.log("Zzzzzzzzz...snore...zzzzzzzZ");
        this.isSleepy = false;
        this.isBored = true;
        this.increaseAge();
    } else {
        console.log("No way! I'm not tired!!");
    }
}

DigitalPal.prototype.play = function () {
    if (this.isBored) {
        console.log("Yay! Let's play!!!!");
        this.isBored = false;
        this.isHungry = true;
    } else {
        console.log("Not right now. Later?");
    }
}

DigitalPal.prototype.increaseAge = function () {
    this.age += 1;
    console.log("Happy Birthday to me! I am "+age+" old!");
}

DigitalPal.prototype.bark = function () {
    console.log("Woof!");
}

DigitalPal.prototype.goOutside = function () {
    if (this.isOutside === false) {
        console.log("Yay! I love the outdoors!");
        this.isOutside = true;
        this.bark();
    } else {
        console.log("We're already outside.");
    }
}

DigitalPal.prototype.goInside = function () {
    if (this.isOutside) {
        console.log("Do we have to? Okaaaay...");
        this.isOutside = false;
    } else {
        console.log("I'm already inside.");
    }
}

DigitalPal.prototype.meow = function () {
    console.log("Meow");
}

DigitalPal.prototype.destroyFurniture = function () {
    if (this.houseCondition === 0) {
        return;
    }
    this.houseCondition -= 10;
    console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
    console.log(this.houseCondition);
    this.isBored = false;
    this.isSleepy = true;
}

DigitalPal.prototype.buyNewFurniture = function () {
    this.houseCondition += 50;
    console.log("Are you sure about that?");
}

const dog = new DigitalPal();
const cat = new DigitalPal();

cat.destroyFurniture();
cat.destroyFurniture();
cat.destroyFurniture();
cat.destroyFurniture();
cat.destroyFurniture();
cat.destroyFurniture();
cat.destroyFurniture();
cat.destroyFurniture();
cat.destroyFurniture();
cat.destroyFurniture();
cat.buyNewFurniture();
cat.destroyFurniture();