const DayCare = require("../dayCare");
const Child = require("../child");

describe("DayCare", () => {
  describe("Initialization", () => {
    it("should create a new dayCare object with children array, capactiy number and age limit number", () => {
        const dayCare = new DayCare();

        expect(dayCare).toEqual({children: [], capacity: 3, ageLimit: 6});
    });

    it("should add a child to the children array", () => {
        //arrange
        const child = new Child('izzy', 1);
        const dayCare = new DayCare();
        //act
        dayCare.addChild(child);
        //assert
        expect(dayCare).toEqual({children: [{name: 'izzy', age: 1}], capacity: 3, ageLimit: 6});
    });

    it("should not add a child over the 'ageLimit'", () => {
        //arrange
        const bill = new Child("Bill", 12);
        const dayCare = new DayCare();
        //act
        dayCare.addChild(bill);
        //assert
        expect(dayCare.children.length).toEqual(0);
    });
  });
});
