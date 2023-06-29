// Write your tests here!
const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
  it("When encoding, it translates the letters i and j to 42.", () => {
    const expected = "42545342441124";
    const actual = polybius("jupitar", (encode = true));
    expect(actual).to.equal(expected);
  });
});

describe("polybius", () => {
  it("When decoding, it translates 42 to (i/j).", () => {
    const expected = "(i/j)up(i/j)tar";
    const actual = polybius("42545342441124", (encode = false));
    expect(actual).to.equal(expected);
  });
});

describe("polybius", () => {
  it("It ignores capital letters. (For example, the results of A Message and a message should be the same.)", () => {
    const expected = "11 23513434112251";
    const actual = polybius("A Message", (encode = true));
    expect(actual).to.equal(expected);
  });
});

describe("polybius", () => {
  it("It maintains spaces in the message, before and after encoding", () => {
    const expected = "11 23513434112251";
    const actual = polybius("A Message", (encode = true));
    expect(actual).to.equal(expected);
  });
});

describe("polybius", () => {
  it("It maintains spaces in the message, before and after decoding", () => {
    const expected = "a message";
    const actual = polybius("11 23513434112251", (encode = false));
    expect(actual).to.equal(expected);
  });
});
