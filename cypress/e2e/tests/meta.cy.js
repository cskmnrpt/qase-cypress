import { qase } from 'cypress-qase-reporter/mocha';

describe('My First Test', () => {
    it('test one', () => {
        qase.title("Easy to find, in logs")
        expect(true).to.equal(true);
    })
});
