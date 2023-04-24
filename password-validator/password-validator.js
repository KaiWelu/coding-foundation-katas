function validatePassword(password) {
  //creating the output object
  const outputObject = {
    valid: false,
    reasons: [],
  };

  // minimum length of 10
  if (password.length < 10) {
    outputObject.reasons.push("min length");
  }

  //contains a number
  if (password.match(/[0-9]/) === null) {
    outputObject.reasons.push("no number");
  }

  //contains a letter
  if (password.match(/[a-zA-Z]/) === null) {
    outputObject.reasons.push("no character");
  }

  //contains a special character
  if (password.match(/\!|\?|\#/) === null) {
    outputObject.reasons.push("no special character");
  }

  //duplicate character
  let duplicateChar = password.match(/[a-zA-Z]/g);
  const duplicateCharSet = new Set();
  if (duplicateChar !== null) {
    duplicateChar.forEach((element) => {
      duplicateCharSet.add(element);
    });
    if (duplicateChar.length !== duplicateCharSet.size) {
      outputObject.reasons.push("duplicate character");
    }
  }

  //duplicate number
  const duplicateNumber = password.match(/[0-9]/g);
  const duplicateNumberSet = new Set();
  if (duplicateNumber !== null) {
    duplicateNumber.forEach((element) => {
      duplicateNumberSet.add(element);
    });
    if (duplicateNumber.length !== duplicateNumberSet.size) {
      outputObject.reasons.push("duplicate number");
    }
  }

  //duplicate special character
  const duplicateSpecial = password.match(/\!|\?|\#/g);
  const duplicateSpecialSet = new Set();
  if (duplicateSpecial !== null) {
    duplicateSpecial.forEach((element) => {
      duplicateSpecialSet.add(element);
    });
    if (duplicateSpecial.length !== duplicateSpecialSet.size) {
      outputObject.reasons.push("duplicate special character");
    }
  }

  //this is based on UTF-16 https://en.wikipedia.org/wiki/UTF-16

  const input = password.toLowerCase().split("");

  //consecutive chars
  for (let i = 0; i < input.length - 1; i++) {
    if (input[i].charCodeAt() + 1 === input[i + 1].charCodeAt()) {
      if (input[i].match(/[0-9]/) !== null) {
        outputObject.reasons.push("consecutive number");
        break;
      }
    }
  }

  //consecutive numbers
  for (let i = 0; i < input.length - 1; i++) {
    if (input[i].charCodeAt() + 1 === input[i + 1].charCodeAt()) {
      if (input[i].match(/[a-zA-Z]/) !== null) {
        outputObject.reasons.push("consecutive character");
        break;
      }
    }
  }

  //return the correct object if there are no problems
  if (outputObject.reasons.length === 0) {
    outputObject.valid = true;
  }
  return outputObject;
}

//console.log(validatePassword("ab23"));
//console.log(validatePassword("!!!!!!23"));
//console.log(validatePassword("ab"));
//console.log(validatePassword("1234568asdasdasdas"));
console.log(validatePassword("abcdef123"));
console.log(validatePassword("AbC13"));
console.log(validatePassword("$SZ@!Qz%fNzP7um"));
