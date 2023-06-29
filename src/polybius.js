// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function isOdd(number) {
    if (number % 2 === 1) {
      return true;
    } else {
      return false;
    }
  }

  function polybius(input, encode = true) {
    // your solution code here

    // input = "hi g" --> "3242 22!"

    const lookup = {
      a: 11,
      b: 21,
      c: 31,
      d: 41,
      e: 51,
      f: 12,
      g: 22,
      h: 32, // lookup.h or lookup["h"] or lookup[char] when char === "h"
      "(i/j)": 42,
      k: 52,
      l: 13,
      m: 23,
      n: 33,
      o: 43,
      p: 53,
      q: 14,
      r: 24,
      s: 34,
      t: 44,
      u: 54,
      v: 15,
      w: 25,
      x: 35,
      y: 45,
      z: 55,
    };

    input = input.toLowerCase(); // Convert the message to lowercase

    let encodedMessage = "";

    if (encode) {
      // Encoding
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (char === " ") {
          // Handle space character
          encodedMessage = encodedMessage + " "; // can also use +=
        } else {
          let found = false;
          Object.entries(lookup).forEach(([key, value]) => {
            if (key.includes(char)) {
              encodedMessage += value.toString();
              found = true;
            }
          });

          // Handle characters not found in the lookup table
          if (!found) {
            encodedMessage += char;
          }
        }
      }
    } else {
      // Decoding
      // console.log("INPUT---", input, input.length);
      // iterate through my input to check if the inputs "value" propertys-length
      let count = 0;
      for (let i = 0; i < input.length; i++) {
        // console.log("INPUT[i]---", input[i]);
        let num = parseInt(input[i]);
        // console.log(num, !isNaN(num));
        // condition to find everything that didnt turn into a number
        if (!isNaN(num)) {
          // to count the number of numbers inside the string set it equal to acccumulator count
          count += input[i].length;
          // then were gonna need another if statment later to return false if it was a odd number (line 91)
        }
      }
      // console.log(count, isOdd(count));
      if (isOdd(count)) {
        return false;
      }
      const reverseLookup = {};
      Object.keys(lookup).forEach((key) => {
        reverseLookup[lookup[key]] = key;
      });

      let currentNum = "";
      for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (char === " ") {
          // Handle space character
          encodedMessage += " ";
        } else {
          currentNum += char;
          if (currentNum.length === 2) {
            const decodedChar = reverseLookup[Number(currentNum)];
            if (decodedChar) {
              encodedMessage += decodedChar;
            }
            currentNum = "";
          }
        }
      }
    }

    return encodedMessage;
  }

  polybius("thinkful"); //> "4432423352125413"

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

// let reverseLook = {
//   11: "a",
//   21: "b",
//   31: "c",
//   41: "d",
//   51: "e",
//   12: "f",
//   22: "g",
//   32: "h",
//   42: "(i/j)",
//   52: "k",
//   13: "l",
//   23: "m",
//   33: "n",
//   43: "o",
//   53: "p",
//   14: "q",
//   24: "r",
//   34: "s",
//   44: "t",
//   54: "u",
//   15: "v",
//   25: "w",
//   35: "x",
//   45: "y",
//   55: "z",
// };
