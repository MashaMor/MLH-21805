import exp from "../../data/expected.js";
import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';
import {inputValues4, storySelect} from '../../helpers/methods';

describe('Story Type part 1', function () {

    before('Open App', function () {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    describe('Placeholder', function () {

        it('TC-087 Story type placeholder = "Type of the story"', function () {
            let placeholder = $(sel.storyPH).getText();
            expect(placeholder).toEqual(exp.storyPH);
        });

    });

    describe('Positive cases', function () {

        it('TC-089 The first type of the story = "Overcoming the Monster"', function () {
            storySelect(story.overcomingTheMonster);
            let story1 = $$(sel.storyList)[story.overcomingTheMonster].getAttribute("title");
            expect(story1).toEqual(exp.storyOne);
        });

        it('TC-090 The second type of the story = "Rebirth"', function () {
            storySelect(story.rebirth);
            let story2 = $$(sel.storyList)[story.rebirth].getAttribute("title");
            expect(story2).toEqual(exp.storyTwo);
        });

        it('TC-091 The third type of the story = "Quest"', function () {
            storySelect(story.quest);
            let story3 = $$(sel.storyList)[story.quest].getAttribute("title");
            expect(story3).toEqual(exp.storyThree);
        });

        it('TC-092 The fourth type of the story = "Journey and Return"', function () {
            storySelect(story.journeyAndReturn);
            let story4 = $$(sel.storyList)[story.journeyAndReturn].getAttribute("title");
            expect(story4).toEqual(exp.storyFour);
        });

        it('TC-093 The fifth type of the story = "Rags and Riches"', function () {
            storySelect(story.ragsAndRiches);
            let story5 = $$(sel.storyList)[story.ragsAndRiches].getAttribute("title");
            expect(story5).toEqual(exp.storyFive);
        });

        it('TC-094 The sixth type of the story = "Tragedy"', function () {
            storySelect(story.tragedy);
            let story6 = $$(sel.storyList)[story.tragedy].getAttribute("title");
            expect(story6).toEqual(exp.storySix);
        });

        it('TC-095 The seventh type of the story = "Comedy"', function () {
            storySelect(story.comedy);
            let story7 = $$(sel.storyList)[story.comedy].getAttribute("title");
            expect(story7).toEqual(exp.storySeven);
        });

        it('TC-096 The chosen story "Comedy" is displayed in the placeholder', function () {
            storySelect(story.comedy);
            let chosenStory = $$(sel.storyList)[story.comedy].getAttribute("title");
            expect(chosenStory).toEqual(exp.storySeven);
        });

    });

    describe('Negative cases', function () {

        it('TC-143 Submit button is disabled after a story type field skipped', function () {
            inputValues4(name.default, gender.she, age.default, -1);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(false);
        });

    });

});
