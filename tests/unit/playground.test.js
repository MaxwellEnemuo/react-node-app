const { zeros, palindromeChainLength, fizzbuzz, hashing, isDivisible, list, counterX} = require("../../util/playground");

describe("qualified.io test", () => {
  it("length should equal 1", () => {
    const result = palindromeChainLength(11);
    expect(result).toBe(0);
  });

  it('match a "stop" in Christoph', () => {
    expect("Christoph").toMatch(/stop/);
  });
});

describe("Array", () => {
  it("should be an array", () => {
    expect(["kogi", "lagos", "jigawa", 99]).toEqual( expect.arrayContaining(["jigawa"]));
  });
});

describe("FizzBuzz", () => {
  it("should throw exception if input is not a number", () => {
    expect(() => {
      fizzbuzz("bold");
    }).toThrow();
  });

  it("should return Fizzbuzz if divisible by 3 & 5 only", () => {
    const result = fizzbuzz(15);
    expect(result).toBe("Fizzbuzz");
  });

  it("should return Fizz if divisible by 3 only", () => {
    const result = fizzbuzz(9);
    expect(result).toBe("Fizz");
  });

  it("should return Fizz if divisible by 5 only", () => {
    const result = fizzbuzz(25);
    expect(result).toBe("Buzz");
  });
});


describe("Password hashing", () => {
  it("should return encrypted password", () => {
    const password = 'page';
    const result = hashing(password);
    expect(result).not.toBe(password);
  });
});

describe("isDivisible", () => {
  it("should return true if n is divisible by the last two arguments", () => {
    const result = isDivisible(12,3,4);
    expect(result).toBeTruthy();
  });
});

describe("list", () => {
  it("should return a string formatted as a list of names separated by commas with the last two separated by an ampersand", () => {
    const result = list([ {name: 'Bart'} ]);
    expect(result).toBe('Bart');
  });
});

describe("checkX", () => {
  it("should return the number times a number occurs", () => {
    const result = list([ {name: 'Bart'} ]);
    expect(result).toBe('Bart');
  });
});