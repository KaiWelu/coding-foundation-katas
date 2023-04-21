function zipStrings(strA, strB) {
  let outputArray = [];
  let strArrayA = strA.split("");
  let strArrayB = strB.split("");
  let finalIndex = strArrayA.length + strArrayB.length;

  for (let i = 0; i < finalIndex; i++) {
    if (i % 2 === 0 && strArrayA.length !== 0) {
      outputArray.push(strArrayA.shift());
    } else if (i % 2 !== 0 && strArrayB.length !== 0) {
      outputArray.push(strArrayB.shift());
    } else if (strArrayA.length === 0) {
      outputArray.push(strArrayB.shift());
    } else {
      outputArray.push(strArrayA.shift());
    }
  }
  return outputArray.join("");
}
console.log(zipStrings("abc", "123"));
