describe("Password Validator", function () {
  it("is a valid password: !a1b2c3y4#", function () {
    const result = validatePassword("!a1b2c3y4#");
    chai.expect(result.valid).to.equal(true);
    chai.expect(result.reasons.length).to.equal(0);
  });
  it("has duplicate chars: !a1b2c3c4#", function () {
    const result = validatePassword("!a1b2c3c4#");
    chai.expect(result.valid).to.equal(false);
    chai.expect(result.reasons.length).to.equal(1);
  });
  it("has duplicate chars and numbers: !a2b2c3c4#", function () {
    const result = validatePassword("!a2b2c3c4#");
    chai.expect(result.valid).to.equal(false);
    chai.expect(result.reasons.length).to.equal(2);
  });
  it("has duplicate and consecutive numbers: 1234567890#", function () {
    const result = validatePassword("1234567890#");
    chai.expect(result.valid).to.equal(false);
    chai.expect(result.reasons.length).to.equal(2);
  });
  it("has duplicate and consecutive chars: 1924abcdefga!", function () {
    const result = validatePassword("1924abcdefga!");
    chai.expect(result.valid).to.equal(false);
    chai.expect(result.reasons.length).to.equal(2);
  });
  it("is empty", function () {
    const result = validatePassword("");
    chai.expect(result.valid).to.equal(false);
    chai.expect(result.reasons.length).to.equal(4);
  });
  it("no number, no character, duplicate special characters: !!!!!!!!!!!!!!!!", function () {
    const result = validatePassword("!!!!!!!!!!!!!!!!");
    chai.expect(result.valid).to.equal(false);
    chai.expect(result.reasons.length).to.equal(3);
  });
  it("no number, no character, duplicate special characters, too short: ####", function () {
    const result = validatePassword("####");
    chai.expect(result.valid).to.equal(false);
    chai.expect(result.reasons.length).to.equal(4);
  });
  it("is a valid password: Großkatzenimpfbuch98!", function () {
    const result = validatePassword("Großkatzenimpfbuch98!");
    chai.expect(result.valid).to.equal(true);
    chai.expect(result.reasons.length).to.equal(0);
  });
  it("is not a valid password: Großkatzenimpfbuch99!!!", function () {
    const result = validatePassword("Großkatzenimpfbuch99!!");
    chai.expect(result.valid).to.equal(false);
    chai.expect(result.reasons.length).to.equal(2);
  });
  it("is a valid password: Cwm fjord bank glyphs vext quiz!2", function () {
    const result = validatePassword("Cwm fjord bank glyphs vext quiz!2");
    chai.expect(result.valid).to.equal(true);
    chai.expect(result.reasons.length).to.equal(0);
  });

  // TODO: add your own tests here for all possible error messages (not combinations)

  // it("should test password ...", function () {
  // ...
  // });
});
