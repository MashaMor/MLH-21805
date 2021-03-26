import sel from '../../data/selectors';
import testData from '../../data/testData'

describe('Required fields & Story created', function () {

    before('Open App', function () {
        browser.url('');
    });

    it('TC-026 Submit button is enabled after fields 1-4 are filled in with valid values', function () {
        $(sel.name).setValue(testData.name);
        $$(sel.radioButtons)[1].click();
        $(sel.age).setValue(testData.age);
        $(sel.storyType).click();
        $$(sel.storyList)[6].click();
        let submitBtn = $(sel.submit).isEnabled();
        expect(submitBtn).toEqual(true);
    });

    it('TC-027 User is redirected to the story page', function () {
        browser.refresh();
        $(sel.name).setValue(testData.name);
        $$(sel.radioButtons)[1].click();
        $(sel.age).setValue(testData.age);
        $(sel.storyType).click();
        $$(sel.storyList)[6].click();
        $(sel.submit).click();
        let tryAgainBtn = $(sel.tryAgainBtn).isDisplayed();
        expect(tryAgainBtn).toEqual(true);
    });

});