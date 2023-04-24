describe("Password Validator", function () {
  it("should test password ...", function () {
    const result = validatePassword("!a1b2c3y4#");
    chai.expect(result.valid).to.equal(true);
    chai.expect(result.reasons.length).to.equal(0);
  });

  // TODO: add your own tests here for all possible error messages (not combinations)

  // it("should test password ...", function () {
  // ...
  // });
});
