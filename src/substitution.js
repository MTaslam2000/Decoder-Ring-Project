// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function removeDuplicates(array) {
    let uniqueArray = [];

    for (let i = 0; i < array.length; i++) {
      if (uniqueArray.indexOf(array[i]) === -1) {
        uniqueArray.push(array[i]);
      }
    }

    return uniqueArray;
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    let lookup = "abcdefghijklmnopqrstuvwxyz";
    // the alphabet input is the random alphabet we're gonna subsitute the lookup variable for
    if (!alphabet || removeDuplicates(alphabet).length < 26) {
      return false;
    }

    // if (!alphabet || [...new Set(alphabet)].length > 26) {
    //   return false;
    // }   --> This also works for setting unique characters but I dont understand how it works

    input = input.toLowerCase();

    let encodedMessage = "";
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        let char = input[i];
        // console.log(char);
        if (char === " ") {
          encodedMessage += " "; // Preserve spaces
          continue;
        }
        let oldIndex = lookup.indexOf(char);
        // console.log(oldIndex);
        let newLetter = alphabet[oldIndex];
        // console.log(newLetter);
        encodedMessage += newLetter;
        // console.log(alphabet[i], i, alphabet);
        // console.log(input[i], i, input);
      }
    }

    if (!encode) {
      for (let i = 0; i < input.length; i++) {
        // get my index values and set em to a var to make for easier reading of code
        let char = input[i];
        // console.log(char);
        // this handles spaces. IDK what continue does
        if (char === " ") {
          encodedMessage += " "; // Preserve spaces
          continue;
        }
        // getting the index values of my inputs and setting them to their matching index number in the alphabet string
        let oldIndex = alphabet.indexOf(char);
        // console.log(oldIndex);
        // Now that i have the inputs index number in the alphabet string I can now dyanmically look those numbers up in my normal alphabet string(lookup string*) and set it to a var
        let newLetter = lookup[oldIndex];
        // console.log(newLetter);
        // setting my newLetter variable to += the empty encodedMessage string I made earlier and this is going to one by one add each of the index values from the lookup string by finding the one it needs with the indexes from the oldIndex var
        encodedMessage += newLetter;
      }
    }

    return encodedMessage.toLowerCase();
  }

  substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
