import sel from '../../data/selectors';
import exp from '../../data/expected';
import {name, gender, age, story, submit, reset} from '../../data/testData';
import {inputValues4} from '../../helpers/methods'

describe('Reset button', function () {

    before('Open App', function () {
        browser.url('');
    });

    afterEach('Refresh App', function () {
        browser.refresh();
    });

    describe('Positive tests', function () {

        it('TC-192 "Reset" button is present on the second page', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy, submit.yes);
            let reset = $(sel.tryAgainBtn).isDisplayed();
            expect(reset).toEqual(true);
        });

        it('TC-193 Reset button label is "Try Again!"', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy, submit.yes);
            let reset = $(sel.tryAgainBtn).getText();
            expect(reset).toEqual(exp.resetBtnLabel);
        });

        it('TC-194 Reset button is enabled on the second page"', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy, submit.yes);
            let reset = $(sel.tryAgainBtn).isEnabled();
            expect(reset).toEqual(true);
        });

        it('TC-195 User can reset the story', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy, submit.yes, reset.yes);
            let res = $(sel.submit).isDisplayed();
            expect(res).toEqual(true);
        });

        it('TC-196-(name) All fields are blank when reset button is clicked', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy, submit.yes, reset.yes);
            let nameField = $(sel.name).getText();
            expect(nameField).toEqual(exp.emptyField);
        });

        it('TC-196-(gender he) All fields are blank when reset button is clicked', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy, submit.yes, reset.yes);
            let genderHeBtn = $$(sel.radioSelected)[gender.he].isSelected();
            expect(genderHeBtn).toEqual(false);
        });

        it('TC-196-(gender she) All fields are blank when reset button is clicked', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy, submit.yes, reset.yes);
            let genderSheBtn = $$(sel.radioSelected)[gender.she].isSelected();
            expect(genderSheBtn).toEqual(false);
        });

        it('TC-196-(gender it) All fields are blank when reset button is clicked', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy, submit.yes, reset.yes);
            let genderItBtn = $$(sel.radioSelected)[gender.it].isSelected();
            expect(genderItBtn).toEqual(false);
        });

        it('TC-196-(age) All fields are blank when reset button is clicked', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy, submit.yes, reset.yes);
            let ageField = $(sel.age).getText();
            expect(ageField).toEqual(exp.emptyField);
        });

        it('TC-196-(story) All fields are blank when reset button is clicked', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy, submit.yes, reset.yes);
            let storyPlaceHolder = $(sel.storyType).getText();
            expect(storyPlaceHolder).toEqual(exp.storyPH);
        });

        it('TC-196-(image) All fields are blank when reset button is clicked', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy, submit.yes, reset.yes);
            let imagePlaceHolder = $(sel.imageUpload).isEnabled();
            expect(imagePlaceHolder).toEqual(true);
        });

        it('TC-197 Back button should redirects to the first page', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy, submit.yes);
            browser.refresh();
            let page = $(sel.instruction).isDisplayed();
            expect(page).toEqual(true);
        });

    });

});
