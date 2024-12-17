import { qase } from "cypress-qase-reporter/mocha";

describe("Example: ignore.spec.js", () => {
  it("This test is executed by Cypress, however, it is NOT reported to Qase", () => {
    qase.ignore();
    expect(true).to.equal(true);
  });
});
