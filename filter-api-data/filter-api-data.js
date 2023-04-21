function filterApiData(apiData, mandatoryKeys) {
  const outputArray = apiData.filter((elem) => {
    let passedTest = true;
    for (let i = 0; i < mandatoryKeys.length; i++) {
      if (elem.hasOwnProperty(mandatoryKeys[i]) === false) {
        passedTest = false;
        break;
      }
    }
    if (passedTest === true) {
      return elem;
    }
  });
  return outputArray;
}
