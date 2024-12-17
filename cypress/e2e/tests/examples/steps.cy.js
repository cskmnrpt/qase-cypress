import { qase } from 'cypress-qase-reporter/mocha';

it('A Test case with steps, updated from code', () => {
    
    // Step 1
    qase.step('Step 1: Open the site: qase.io', () => {
        expect(true).to.equal(true);
    });

    // Step 2
    qase.step("Step 2: Click the 'Login' button", () => {
        expect(true).to.equal(true);
    });

    // Step 3
    qase.step('Step 3: Check if the page loads successfully', () => {
        expect(true).to.equal(true);
    });

});
