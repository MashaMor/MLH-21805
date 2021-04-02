import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';
import inputValues4 from '../../helpers/methods'

describe('Submit button', function () {

    describe('Positive tests', function () {

        before('Open App', function () {
            browser.url('');
        });

        beforeEach('refresh browser', function() {
            browser.refresh();
        });

        it('TC-176 User opens the application, "Submit" button is disabled', function () {
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(false);
        });

    });

});
