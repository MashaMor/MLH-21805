import sel from '../../data/selectors';
import exp from '../../data/expected';
import {gender} from '../../data/testData';

describe('My Little Hero', function () { //define suite title by passing a string

    describe('Getting to the page', function () { //define sub-suite title by passing a string

        before('Open App', function () {
            browser.url(''); //open baseUrl
        });

        it('TC-001 Page Title is MLH trial', function () { //define test title by passing a string
            let title = browser.getTitle(); //get page title and assign it to the "title" variable
            expect(title).toEqual(exp.title); //compare {title} (actual) and "MLH trial" (expected.json)
        });

    });

    describe('Elements exist', function () { //define sub-suite title by passing a string

        it('TC-002 Header is present', function () {
            let header = $(sel.header).isDisplayed();
            expect(header).toEqual(true);
        });

        it('TC-003 Instruction is present', function () {
            let instruction = $(sel.instruction).isDisplayed();
            expect(instruction).toEqual(true);
        });

        it('TC-004 Name label is present', function () {
            let label = $(sel.nameLabel).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-005 Name field is present', function () {
            let field = $(sel.name).isDisplayed();
            expect(field).toEqual(true);
        });

        it('TC-006 Gender label is present', function () {
            let label = $(sel.genderLabel).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-007a Gender radio button "he" is present', function () {
            let buttonHe = $$(sel.radioButtons)[gender.he].isDisplayed();
            expect(buttonHe).toEqual(true);
        });

        it('TC-007b Gender radio button "she" is present', function () {
            let buttonShe = $$(sel.radioButtons)[gender.she].isDisplayed();
            expect(buttonShe).toEqual(true);
        });

        it('TC-007c Gender radio button "it" is present', function () {
            let buttonIt = $$(sel.radioButtons)[gender.it].isDisplayed();
            expect(buttonIt).toEqual(true);
        });

        it('TC-007d Gender radio button label "he" is present', function () {
            let labelHe = $$(sel.radioButtonsLabels)[0].isDisplayed();
            expect(labelHe).toEqual(true);
        });

        it('TC-007e Gender radio button label "she" is present', function () {
            let labelShe = $$(sel.radioButtonsLabels)[1].isDisplayed();
            expect(labelShe).toEqual(true);
        });

        it('TC-007f Gender radio button label "it" is present', function () {
            let labelIt = $$(sel.radioButtonsLabels)[2].isDisplayed();
            expect(labelIt).toEqual(true);
        });

        it('TC-008 Age label is present', function () {
            let label = $(sel.ageLabel).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-009 Age field is present', function () {
            let field = $(sel.age).isDisplayed();
            expect(field).toEqual(true);
        });

        it('TC-010 Story type label is present', function () {
            let label = $(sel.storyLabel).isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-011 Story type dropdown is present', function () {
            let dropdown = $(sel.storyType).isDisplayed();
            expect(dropdown).toEqual(true);
        });

        it('TC-012 Image label is present', function () {
            let label = $$(sel.imageLabel)[4].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-013 Image field is present', function () {
            let field = $(sel.image).isDisplayed();
            expect(field).toEqual(true);
        });

        it('TC-014 Submit button is present', function () {
            let button = $(sel.submit).isDisplayed();
            expect(button).toEqual(true);
        });

    });

});
