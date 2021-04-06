import sel from '../../data/selectors';
import exp from '../../data/expected';
import {name, gender, age, story} from '../../data/testData';
import {inputValues4} from '../../helpers/methods';

describe('Name', function () {

    before('Open App', function () {
        browser.url('');
    });

    afterEach('Refresh App', function () {
        browser.refresh();
    });

    describe('Placeholder', function () {

        it('TC-028 Name Field placeholder = "Hero\'s name"', function () {
            let placeholder = $(sel.name).getAttribute('placeholder');
            expect(placeholder).toEqual(exp.namePH);
        });

    });

    describe('Positive cases', function () {

        it('TC-029 Name field accepts one symbol', function () {
            $(sel.name).setValue(name.symbol1);
            let error = $(sel.error).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-030 Name field accepts 70 symbols', function () {
            $(sel.name).setValue(name.symbol70);
            let error = $(sel.error).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-031 Name field accepts letters', function () {
            $(sel.name).setValue(name.letters);
            let error = $(sel.error).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-032 Name field accepts upper case letters', function () {
            $(sel.name).setValue(name.upperCase);
            let error = $(sel.error).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-033 Name field accepts lower case letters', function () {
            $(sel.name).setValue(name.lowerCase);
            let error = $(sel.error).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-034 Name field accepts digits', function () {
            $(sel.name).setValue(name.digits);
            let error = $(sel.error).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-035 Name field accepts special symbols', function () {
            $(sel.name).setValue(name.symbolSpecial);
            let error = $(sel.error).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-036 Name field accepts letters with space', function () {
            $(sel.name).setValue(name.symbolSpace);
            let error = $(sel.error).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-037 Name field accepts Russian letters', function () {
            $(sel.name).setValue(name.lettersRus);
            let error = $(sel.error).isDisplayed();
            expect(error).toEqual(false);
        });

    });

    describe('Negative cases', function () {

        it('TC-041 Name field does not accept empty field', function () {
            $(sel.name).setValue(name.symbol1);
            $(sel.name).keys(['Backspace']);
            let error = $(sel.error);
            expect(error).toBeDisplayed();
        });

        it('TC-042 Name field does not accept 71 symbols or more', function () {
            $(sel.name).setValue(name.symbol71);
            let error = $(sel.error);
            expect(error).toBeDisplayed();
        });

        it('TC-044 User cannot create story without name', function () {
            inputValues4('', gender.she, age.default, story.comedy);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(false);
        });

        it('TC-045 Name field does not accept spaces only', function () {
            $(sel.name).setValue(name.space);
            $(sel.outside).click();
            let error = $(sel.error);
            expect(error).toBeDisplayed();
        });

        it('TC-046 User cannot create story with "   " (space) name', function () {
            inputValues4(name.space, gender.she, age.default, story.comedy);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(false);
        });

    });

});
