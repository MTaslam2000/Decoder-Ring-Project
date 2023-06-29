// Write your tests here!
const { substitution } = require("../src/substitution.js");
const expect = require("chai").expect;

describe("subsitution", () => {
  it("It returns false if the given alphabet isn't exactly 26 characters long.", () => {
    const expected = false;
    const actual = substitution("thinkful", "short");
    expect(actual).to.equal(expected);
  });
});

describe("subsitution", () => {
  it("It maintains spaces in the message, before and after encoding", () => {
    const expected = "elp xhm xf mbymwwmfj dne";
    const actual = substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    expect(actual).to.equal(expected);
  });
});

describe("subsitution", () => {
  it("It maintains spaces in the message, before and after decoding.", () => {
    const expected = "i want a snack";
    const actual = substitution(
      "U ixfj x dfxys",
      "xoyqmcgrukswaflnthdjpzibev",
      false
    );
    expect(actual).to.equal(expected);
  });
});

describe("subsitution", () => {
  it("It ignores capital letters. (For example, the results of A Message and a message should be the same.)", () => {
    const expected = "u ixfj x dfxys";
    const actual = substitution("I WANT A SNACK", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);
  });
});

describe("subsitution", () => {
  it("The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.", () => {
    const expected = "y&ii$r&";
    const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    expect(actual).to.equal(expected);
  });
});

describe("subsitution", () => {
  it("All the characters in the alphabet parameter must be unique. Otherwise, it should return false.", () => {
    const expected = false;
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    expect(actual).to.equal(expected);
  });
});

describe("subsitution", () => {
  it("The input could include spaces and letters as well as special characters such as #, $, *, etc.", () => {
    const expected = "y&ii$r&";
    const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    expect(actual).to.equal(expected);
  });
});

describe("subsitution", () => {
  it("It correctly translates the given phrase, based on the alphabet given to the function.", () => {
    const expected = "amddxgm";
    const actual = substitution("message", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);
  });
});
