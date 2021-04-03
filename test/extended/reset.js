import sel from '../../data/selectors';
import exp from '../../data/expected';
import {name, gender, age, story} from '../../data/testData';
import {inputValue4Submit} from '../../helpers/methods'

describe('Reset button', function () {

    describe('Positive tests', function () {

        before('Open App', function () {
            browser.url('');
        });

        it('TC-192 "Reset" button is present on the second page', function () {
            inputValue4Submit(name.default, gender.she, age.default, story.comedy);
            let reset = $(sel.tryAgainBtn).isDisplayed();
            expect(reset).toEqual(true);
        });

        it('TC-193 Reset button label is "Try Again!"', function () {
            let reset = $(sel.tryAgainBtn).getText();
            expect(reset).toEqual(exp.resetBtnLabel);
        });

        it('TC-194 Reset button is enabled  on the second page"', function () {
            let reset = $(sel.tryAgainBtn).isEnabled();
            expect(reset).toEqual(true);
        });

        it('TC-195 User can reset the story', function () {
            $(sel.tryAgainBtn).click();
            let res = $(sel.submit).isDisplayed();
            expect(res).toEqual(true);
        });

        it('TC-196-(name) All fields are blank when reset button is clicked', function () {
            browser.refresh();
            inputValue4Submit(name.default, gender.she, age.default, story.comedy);
            $(sel.tryAgainBtn).click();
            let nameField = $(sel.name).getText();
            expect(nameField).toEqual(exp.emptyField);
        });

        it('TC-196-(gender he) All fields are blank when reset button is clicked', function () {
            let genderHeBtn = $$(sel.radioSelected)[gender.he].isSelected();
            expect(genderHeBtn).toEqual(false);
        });

        it('TC-196-(gender she) All fields are blank when reset button is clicked', function () {
            let genderSheBtn = $$(sel.radioSelected)[gender.she].isSelected();
            expect(genderSheBtn).toEqual(false);
        });

        it('TC-196-(gender it) All fields are blank when reset button is clicked', function () {
            let genderItBtn = $$(sel.radioSelected)[gender.it].isSelected();
            expect(genderItBtn).toEqual(false);
        });

        it('TC-196-(age) All fields are blank when reset button is clicked', function () {
            let ageField = $(sel.name).getText();
            expect(ageField).toEqual(exp.emptyField);
        });

        it('TC-196-(story) All fields are blank when reset button is clicked', function () {
           let storyPlaceHolder = $(sel.storyType).getText();
            expect(storyPlaceHolder).toEqual(exp.storyPH);
        });

        it('TC-196-(image) All fields are blank when reset button is clicked', function () {
            let imagePlaceHolder = $(sel.imageUpload).isEnabled();
            expect(imagePlaceHolder).toEqual(true);
        });

        it.only('TC-197 Back button should redirects to the first page', function () {
            inputValue4Submit(name.default, gender.she, age.default, story.comedy);
            browser.back();
            let page = $(sel.instruction).isDisplayed();
            expect(page).toEqual(true);
        });
    });
});
