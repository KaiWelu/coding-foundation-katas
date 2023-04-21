function extractClassName(sessionTitle) {
  const months = [
    "Januar",
    "Februar",
    "Maerz",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];
  //find the relevant part of the string
  let regex = /Class [0-9]{4} [a-zA-Zä]+/g;
  let matched = sessionTitle.match(regex);
  //check if the string passes the first format test
  if (matched === null) {
    return null;
  }
  matched = matched[0].split(" ");
  //nobody has to be an umlaut
  if (matched[2] === "März") {
    matched[2] = "Maerz";
  }
  //Assemble correct output format
  let monthNumeric = matched[2];
  const year = matched[1];
  months.forEach((element, index) => {
    if (element === monthNumeric) {
      if (index + 1 < 10) {
        monthNumeric = "0" + (index + 1).toString();
      } else {
        monthNumeric = (index + 1).toString();
      }
    } else {
      return null;
    }
  });
  return year + "-" + monthNumeric;
}

console.log(extractClassName("Live-Session Class 2022 April"));
