import { qase } from "cypress-qase-reporter/mocha";

describe("Example: suite.cy.js", () => {
  it("Test with a defined suite", () => {
    qase.suite("Suite defined with qase.suite()");
    expect(true).to.equal(true);
  });

  it("Test within multiple levels of suite", () => {
    qase.suite("Suite defined with qase.suite()\tAuthentication\tLogin");
    // A `\t` is used for dividing each suite name
    expect(true).to.equal(true);
  });
});
