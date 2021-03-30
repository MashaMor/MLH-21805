import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';
import inputValues4 from '../../helpers/methods'

describe('Required fields & Story created', function () {

    before('Open App', function () {
        browser.url('');
    });

    it('TC-026 Submit button is enabled after fields 1-4 are filled in with valid values', function () {
        inputValues4(name.default, gender.she, age.default, story.comedy);
        let submitBtn = $(sel.submit).isEnabled();
        expect(submitBtn).toEqual(true);
    });

    it('TC-027 User is redirected to the story page', function () {
        browser.refresh();

        inputValues4(name.default, gender.she, age.default, story.comedy);
        $(sel.submit).click();
        let tryAgainBtn = $(sel.tryAgainBtn).isDisplayed();
        expect(tryAgainBtn).toEqual(true);
    });

});
