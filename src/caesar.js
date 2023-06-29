// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (shift === 0 || shift > 25 || shift < -25) return false;
    let lookup = "abcdefghijklmnopqrstuvwxyz";

    input = input.toLowerCase();

    if (!encode) {
      const decoded = Array.from(input)
        .map((char) => {
          if (lookup.includes(char)) {
            let index = lookup.indexOf(char);

            // Adjust the shift to handle negative values
            let adjustedShift = shift % 26;
            if (adjustedShift < 0) {
              adjustedShift += 26;
            }

            let newIndex = (index - adjustedShift + 26) % 26;
            return lookup[newIndex];
          } else {
            return char;
          }
        })
        .join("");
      return decoded;
    }

    const encoded = Array.from(input)
      .map((char) => {
        if (lookup.includes(char)) {
          let index = lookup.indexOf(char);

          // Adjust the shift to handle negative values
          let adjustedShift = shift % 26;
          if (adjustedShift < 0) {
            adjustedShift += 26;
          }

          let newIndex = (index + adjustedShift) % 26;
          return lookup[newIndex];
        } else {
          return char;
        }
      })
      .join("");
    return encoded;
  }

  caesar("thinkful", 3); //> 'wklqnixo'
  caesar("wklqnixo", 3);

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
