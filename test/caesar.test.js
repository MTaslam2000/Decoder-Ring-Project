// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it("It returns false if the shift value is equal to 0, or not present", () => {
    const expected = false;
    const actual = caesar("thinkful", 0, (encode = true));
    expect(actual).to.equal(expected);
  });
});

describe("caesar", () => {
  it("It returns false if the shift value is greater than 25, or not present.", () => {
    const expected = false;
    const actual = caesar("thinkful", 26);
    expect(actual).to.equal(expected);
  });
});

describe("caesar", () => {
  it("It returns false if the shift value less than -25 or not present.", () => {
    const expected = false;
    const actual = caesar("thinkful", -26);
    expect(actual).to.be.false;
  });
});

describe("caesar", () => {
  it("It ignores capital letters. (For example, the results of A Message and a message should be the same.)", () => {
    const expected = "wklqnixo";
    const actual = caesar("THINKFUL", 3, (encode = true));
    expect(actual).to.equal(expected);
  });
});

describe("caesar", () => {
  it("When encoding, it handles shifts that go past the end of the alphabet. (For example, shifting z to the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.)", () => {
    const expected = "abccbaacacab";
    const actual = caesar("xyzzyxxzxzxy", 3, (encode = true));
    expect(actual).to.equal(expected);
  });
});

describe("caesar", () => {
  it("It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.", () => {
    const expected = "w k l q n i x o";
    const actual = caesar("t h i n k f u l", 3, (encode = true));
    expect(actual).to.equal(expected);
  });
});
