import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';
import {inputNameGenderStory} from '../../helpers/methods';
import exp from "../../data/expected.js";

describe('Age field suit', function () {

    before('Open App', function () {
        browser.url('');
    });
    beforeEach('Refresh App', function () {
        browser.refresh();
    });

    describe('Placeholder', function () {

        it('TC-060 Age field placeholder = "Hero\'s age"', function () {
            let placeholder = $(sel.age).getAttribute('placeholder');
            expect(placeholder).toEqual(exp.agePH);
        });
    });

    describe('Positive cases', function () {

        it('TC-061 Age field accepts at least one digit (not below digit "1")', function () {
            $(sel.age).setValue(age.digit1);
            let error = $(sel.error).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-062 Age field accepts up to 12 digits', function () {
            $(sel.age).setValue(age.digits12);
            let error = $(sel.error).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-063 Age field accepts any digits', function () {
            $(sel.age).setValue(age.digitsAny);
            let error = $(sel.error).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-064 Age field accepts "0" on the left side', function () {
            $(sel.age).setValue(age.digitsWith0);
            $(sel.outside).click();
            let value = $(sel.age).getValue();
            expect(value).toEqual(exp.one);
        });

        it('TC-065 Age field accepts digits with spaces', function () {
            $(sel.age).setValue(age.digitsWithSpaces);
            let value = $(sel.age).getValue();
            expect(value).toEqual(exp.trimSpaces);
        });

        it('TC-066 Spin up & down functionality available', function () {
            $(sel.age).click();
            let spin = $(sel.ageSpin).isEnabled();
            expect(spin).toEqual(true);
        });

        it('TC-067 Age field\'s spin turns up (0 -> 1)', function () {
            $(sel.age).click();
            $(sel.ageSpinUp).click();
            let value = $(sel.age).getValue();
            expect(value).toEqual(exp.one);
        });

        it('TC-068 Age field\'s spin turns up (1 -> 2)', function () {
            $(sel.age).setValue(age.digit1);
            $(sel.ageSpinUp).click();
            let value = $(sel.age).getValue();
            expect(value).toEqual(exp.two);
        });

        it('TC-069 Age field\'s spin turns down (2 -> 1)', function () {
            $(sel.age).setValue(age.digit2);
            $(sel.ageSpinDown).click();
            let value = $(sel.age).getValue();
            expect(value).toEqual(exp.one);
        });

    });

    describe('Negative cases', function () {

        it('TC-075 Empty Age field', function () {
            $(sel.age).setValue(age.digit1);
            $(sel.age).keys(['Backspace']);
            let error = $(sel.error).waitForDisplayed(2000);
            expect(error).toEqual(true);
        });

        it('TC-076 Age field contains one digit: "0"', function () {
            $(sel.age).setValue(age.zero);
            let error = $(sel.error).waitForDisplayed(2000);
            expect(error).toEqual(true);
        });

        it('TC-077 age field contains more than 12 digits', function () {
            $(sel.age).setValue(age.digits13);
            let error = $(sel.error).waitForDisplayed(2000);
            expect(error).toEqual(true);
        });

        it('TC-078 Age field contains letters', function () {
            $(sel.age).setValue(age.letters);
            let error = $(sel.error).waitForDisplayed(2000);
            expect(error).toEqual(true);
        });

        it('TC-079 Age field contains symbols', function () {
            $(sel.age).setValue(age.symbols);
            let error = $(sel.error).waitForDisplayed(2000);
            expect(error).toEqual(true);
        });

        it('TC-080 Age field contains negative digits', function () {
            $(sel.age).setValue(age.digitsNegative);
            let error = $(sel.error).waitForDisplayed(2000);
            expect(error).toEqual(true);
        });

        it('TC-081 Age field contains float numbers', function () {
            $(sel.age).setValue(age.floatNumbers);
            let error = $(sel.error).waitForDisplayed(2000);
            expect(error).toEqual(true);
        });

        it('TC-082 Age field contains russian letters', function () {
            $(sel.age).setValue(age.lettersRus);
            let error = $(sel.error).waitForDisplayed(2000)
            expect(error).toEqual(true);
        });

        it('TC-085 Age field\'s spin down from one digit: "1"', function () {
            $(sel.age).setValue(age.digit1);
            $(sel.ageSpinDown).click();
            let error = $(sel.error).waitForDisplayed(2000);
            expect(error).toEqual(true);
        });

        it('TC-086 Age field\'s spin up after 12 digit\'s number', function () {
            $(sel.age).setValue(age.digits12);
            $(sel.ageSpinUp).click();
            let error = $(sel.error).waitForDisplayed(2000);
            expect(error).toEqual(true);
        });

        it('TC-198 Empty Age field (Submit button is disabled)', function () {
            inputNameGenderStory(name.default, gender.she, story.comedy);
            let submBtn = $(sel.submit).isEnabled();
            expect(submBtn).toEqual(false);
        });
    });

});