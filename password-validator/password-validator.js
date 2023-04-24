function validatePassword(password) {
  const input = password.split("");
  //creating the output object
  const outputObject = {
    valid: false,
    reasons: [],
  };

  // minimum length of 10
  if (password.length <= 10) {
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
  }
  if (duplicateChar.length !== duplicateCharSet.size) {
    outputObject.reasons.push("duplicate character");
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

  //consecutive char
  if (duplicateChar !== null) {
    //convert everything to lower case
    duplicateChar = duplicateChar.map((element) => element.toLowerCase());

    for (let i = 0; i < duplicateChar.length - 1; i++) {
      if (
        duplicateChar[i].charCodeAt() + 1 ===
        duplicateChar[i + 1].charCodeAt()
      ) {
        outputObject.reasons.push("consecutive character");
        break;
      }
    }
  }

  //consecutive number
  if (duplicateNumber !== null) {
    for (let i = 0; i < duplicateNumber.length - 1; i++) {
      if (
        duplicateNumber[i].charCodeAt() + 1 ===
        duplicateNumber[i + 1].charCodeAt()
      ) {
        outputObject.reasons.push("consecutive number");
        break;
      }
    }
  }

  //return the correct object
  if (outputObject.reasons.length === 0) {
    outputObject.valid = true;
  }
  return outputObject;
}

//console.log(validatePassword("ab23"));
//console.log(validatePassword("!!!!!!23"));
//console.log(validatePassword("ab"));
//console.log(validatePassword("1234568asdasdasdas"));
console.log(validatePassword("afjlowp#157"));
console.log(validatePassword("AbC13"));
