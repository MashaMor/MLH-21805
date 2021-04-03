import sel from '../../data/selectors';
import exp from '../../data/expected';
import {gender} from '../../data/testData';

describe('Labels are correct', function () {

    before('Open App', function () {
        browser.url('');
    });

    it('TC-015 Header = My Little Hero', function () {
        let header = $(sel.header).getText();
        expect(header).toEqual(exp.header);
    });

    it('TC-016 Instruction = Let\'s create your own HERO! It\'s super easy with our application! ', function () {
        let instruction = $(sel.instruction).getText();
        expect(instruction).toEqual(exp.instruction);
    });

    it('TC-017 Name label = 1. What is your Hero\'s name?', function () {
        let label = $(sel.nameLabel).getText();
        expect(label).toEqual(exp.nameLabel);
    });

    it('TC-018 Gender label = 2. Please choose a gender.', function () {
        let label = $(sel.genderLabel).getText();
        expect(label).toEqual(exp.genderLabel);
    });

    it('TC-019 Gender radio button 1 label = he', function () {
        let label = $$(sel.radioButtonsLabels)[gender.he].getText();
        expect(label).toEqual(exp.heLabel);
    });

    it('TC-020 Gender radio button 2 label = she', function () {
        let label = $$(sel.radioButtonsLabels)[gender.she].getText();
        expect(label).toEqual(exp.sheLabel);
    });

    it('TC-021 Gender radio button 3 label = it', function () {
        let label = $$(sel.radioButtonsLabels)[gender.it].getText();
        expect(label).toEqual(exp.itLabel);
    });

    it('TC-022 Age label = 3. How old is your hero?', function () {
        let label = $(sel.ageLabel).getText();
        expect(label).toEqual(exp.ageLabel);
    });

    it('TC-023 Story Type label = 4. Type of the story', function () {
        let field = $(sel.storyLabel).getText();
        expect(field).toEqual(exp.storyLabel);
    })

    it('TC-024 Image label = 5. Upload an image (optional)', function () {
        let field = $$(sel.imageLabel)[4].getText();
        expect(field).toEqual(exp.imageLabel);
    });

    it('TC-024 Submit button label = Create!', function () {
        let button = $(sel.submit).getText();
        expect(button).toEqual(exp.submitLabel);
    });

});
