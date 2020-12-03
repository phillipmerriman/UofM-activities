const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    it("should return 'olleh' when given 'hello'", () => {
      //arrange
      const forward = "hello";
      const reversed = "olleh";
      //act
      const ans = new Algo().reverse(forward)
      //assert
      expect(ans).toEqual(reversed);
    });

  });

  describe("isPalindrome", () => {
    it("should return true if argument is a palindrome", () => {
      //arrange
      const pal = "12321";
      //act
      const testMe = new Algo().isPalindrome(pal);
      //assert
      expect(testMe).toEqual(true);
    });

    it("should return false if argument is not a palindrome", () => {
      //arrange
      const notPal = "1234";
      //act
      const testMe = new Algo().isPalindrome(notPal);
      //assert
      expect(testMe).toEqual(false);
    });
  });

  describe("capitalize", () => {
    it("should return a new string with the first letter of each word capitalized", () => {
      //arrange
      const noCap = "hello world";
      const cap = "Hello World";
      //act
      const testMe = new Algo().capitalize(noCap);
      //assert
      expect(testMe).toEqual(cap);
    });
  });
});
