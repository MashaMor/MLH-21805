import sel from '../../data/selectors';
import {name, age, gender, story} from '../../data/testData';
import {inputValues4} from '../../helpers/methods';

describe('Testing extended Gender field ', function () {

    before('Open App', function (){
        browser.url('');
    });

    beforeEach('Refresh the page', function (){
        browser.refresh();
    });

    describe('Positive cases', function () {
        it('TC-047 Button HE is enabled', function () {
            $$(sel.radioButtons)[gender.he].click();
            let genderHeBtn = $$(sel.radioSelected)[gender.he].isSelected();
            expect(genderHeBtn).toEqual(true);
        });

        it('TC-048 Button SHE is enabled', function () {
            $$(sel.radioButtons)[gender.she].click();
            let genderSheBtn = $$(sel.radioSelected)[gender.she].isSelected();
            expect(genderSheBtn).toEqual(true);
        });

        it('TC-049 Button IT is enabled', function () {
            $$(sel.radioButtons)[gender.it].click();
            let genderItBtn = $$(sel.radioSelected)[gender.it].isSelected();
            expect(genderItBtn).toEqual(true);
        });

        it('TC-050.a User can use only one button at the time: HE (SHE is not selected)', function () {
            $$(sel.radioButtons)[gender.he].click();
            let genderSheBtn = $$(sel.radioSelected)[gender.she].isSelected();
            expect(genderSheBtn).toEqual(false);
        });

        it('TC-050.b User can use only one button at the time: HE (IT is not selected)', function () {
            $$(sel.radioButtons)[gender.he].click();
            let genderItBtn = $$(sel.radioSelected)[gender.it].isSelected();
            expect(genderItBtn).toEqual(false);
        });

        it('TC-051.a User can use only one button at the time: SHE (HE is not selected)', function () {
            $$(sel.radioButtons)[gender.she].click();
            let genderHeBtn = $$(sel.radioSelected)[gender.he].isSelected();
            expect(genderHeBtn).toEqual(false);
        });

        it('TC-051.b User can use only one button at the time: SHE (IT is not selected)', function () {
            $$(sel.radioButtons)[gender.she].click();
            let genderItBtn = $$(sel.radioSelected)[gender.it].isSelected();
            expect(genderItBtn).toEqual(false);
        });

        it('TC-052.a User can use only one button at the time: IT (HE is not selected)', function () {
            $$(sel.radioButtons)[gender.it].click();
            let genderHeBtn = $$(sel.radioSelected)[gender.he].isSelected();
            expect(genderHeBtn).toEqual(false);
        });

        it('TC-052.b User can use only one button at the time: IT (SHE is not not selected)', function () {
            $$(sel.radioButtons)[gender.it].click();
            let genderSheBtn = $$(sel.radioSelected)[gender.she].isSelected();
            expect(genderSheBtn).toEqual(false);
        });

        it('TC-053 User can switch the option: he -> she', function () {
            $$(sel.radioButtons)[gender.he].click();
            $$(sel.radioButtons)[gender.she].click();
            let genderSheBtn = $$(sel.radioSelected)[gender.she].isSelected();
            expect(genderSheBtn).toEqual(true);
        });

        it('TC-054 User can switch the option: he -> it', function () {
            $$(sel.radioButtons)[gender.he].click();
            $$(sel.radioButtons)[gender.it].click();
            let genderItBtn = $$(sel.radioSelected)[gender.it].isSelected();
            expect(genderItBtn).toEqual(true);
        });

        it('TC-055 User can switch the option: she -> he', function () {
            $$(sel.radioButtons)[gender.she].click();
            $$(sel.radioButtons)[gender.he].click();
            let genderHeBtn = $$(sel.radioSelected)[gender.he].isSelected();
            expect(genderHeBtn).toEqual(true);
        });

        it('TC-056 User can switch the option: she -> it', function () {
            $$(sel.radioButtons)[gender.she].click();
            $$(sel.radioButtons)[gender.it].click();
            let genderItBtn = $$(sel.radioSelected)[gender.it].isSelected();
            expect(genderItBtn).toEqual(true);
        });

        it('TC-057 User can switch the option: it -> he', function () {
            $$(sel.radioButtons)[gender.it].click();
            $$(sel.radioButtons)[gender.he].click();
            let genderHeBtn = $$(sel.radioSelected)[gender.he].isSelected();
            expect(genderHeBtn).toEqual(true);
        });

        it('TC-058 User can switch the option: it -> she', function () {
            $$(sel.radioButtons)[gender.it].click();
            $$(sel.radioButtons)[gender.she].click();
            let genderSheBtn = $$(sel.radioSelected)[gender.she].isSelected();
            expect(genderSheBtn).toEqual(true);
        });
    });

    describe('Negative cases', function () {
        it('TC-059  Not chosen button (Submit button is disabled)', function () {
            inputValues4(name.default, -1, age.default, story.comedy);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(false);
        });
    });
});
