import { qase } from 'cypress-qase-reporter/mocha';

it("This test is executed by Cypress, however, it is NOT reported to Qase", () => {
  qase.ignore();
  expect(true).to.equal(true);
});
