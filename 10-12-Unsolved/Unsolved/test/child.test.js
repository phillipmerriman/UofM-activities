const Child = require("../child");

describe("Child", () => {
    describe("Initialization", () => {
        it("should create a new child object with a name and age if provided valid arguments", () => {
            //arrange
            const child = new Child('deb', 4);
            //act

            //assert
            expect(child.age).toEqual(4);
            expect(child.name).toEqual('deb');
        });

        it("should throw an error if provided no arguments", () => {
            const cb = () => new Child();

            expect(cb).toThrow();
        });

        it("should throw an error if not provided an age", () => {
            const cb = () => new Child("name");
            const err = new Error("Expected parameter 'age' to be a non-negative number");

            expect(cb).toThrowError(err);
        });
        
        it("should throw an error if 'name' is an empty string", () => {
          //arrange
          const err = new Error("Expected parameter 'name' to be a non-empty string");
          //act
          const child = () => new Child('', 4);
          
          //assert
          expect(child).toThrowError(err);
        });

        it("should throw an error if 'age' is not a number", () => {
            const err = new Error("Expected parameter 'age' to be a non-negative number");
            const cb = () => new Child('izzy', '1');

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'age' is a negative number", () => {
            const err = new Error("Expected parameter 'age' to be a non-negative number");
            const cb = () => new Child('izzy', -1);

            expect(cb).toThrowError(err);
        });
    })
});
