import {storySwitch} from "../../helpers/methods";
import {story} from "../../data/testData";
import sel from "../../data/selectors";
import exp from "../../data/expected";

describe('Story Type part 3', function () {

    before('Open App', function () {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    describe('Positive cases', function () {

        it('TC-119 Change the Story Type = "Journey and Return" to "Overcoming the Monster"', function () {
            storySwitch(story.journeyAndReturn, story.overcomingTheMonster);
            let read = $$(sel.storyList)[story.overcomingTheMonster].getAttribute("title");
            expect(read).toEqual(exp.storyOne);
        });

        it('TC-120 Change the Story Type = "Journey and Return" to "Rebirth"', function () {
            storySwitch(story.journeyAndReturn, story.rebirth);
            let read = $$(sel.storyList)[story.rebirth].getAttribute("title");
            expect(read).toEqual(exp.storyTwo);
        });

        it('TC-121 Change the Story Type = "Journey and Return" to "Quest"', function () {
            storySwitch(story.journeyAndReturn, story.quest);
            let read = $$(sel.storyList)[story.quest].getAttribute("title");
            expect(read).toEqual(exp.storyThree);
        });

        it('TC-122 Change the Story Type = "Journey and Return" to "Rags and Riches"', function () {
            storySwitch(story.journeyAndReturn, story.ragsAndRiches);
            let read = $$(sel.storyList)[story.ragsAndRiches].getAttribute("title");
            expect(read).toEqual(exp.storyFive);
        });

        it('TC-123 Change the Story Type = "Journey and Return" to "Tragedy"', function () {
            storySwitch(story.journeyAndReturn, story.tragedy);
            let read = $$(sel.storyList)[story.tragedy].getAttribute("title");
            expect(read).toEqual(exp.storySix);
        });

        it('TC-124 Change the Story Type = "Journey and Return" to "Comedy"', function () {
            storySwitch(story.journeyAndReturn, story.comedy);
            let read = $$(sel.storyList)[story.comedy].getAttribute("title");
            expect(read).toEqual(exp.storySeven);
        });

        it('TC-125 Change the Story Type = "Rags and Riches" to "Overcoming the Monster"', function () {
            storySwitch(story.ragsAndRiches, story.overcomingTheMonster);
            let read = $$(sel.storyList)[story.overcomingTheMonster].getAttribute("title");
            expect(read).toEqual(exp.storyOne);
        });

        it('TC-126 Change the Story Type = "Rags and Riches" to "Rebirth"', function () {
            storySwitch(story.ragsAndRiches, story.rebirth);
            let read = $$(sel.storyList)[story.rebirth].getAttribute("title");
            expect(read).toEqual(exp.storyTwo);
        });

        it('TC-127 Change the Story Type = "Rags and Riches" to "Quest"', function () {
            storySwitch(story.ragsAndRiches, story.quest);
            let read = $$(sel.storyList)[story.quest].getAttribute("title");
            expect(read).toEqual(exp.storyThree);
        });

        it('TC-128 Change the Story Type = "Rags and Riches" to "Journey and Return"', function () {
            storySwitch(story.ragsAndRiches, story.journeyAndReturn);
            let read = $$(sel.storyList)[story.journeyAndReturn].getAttribute("title");
            expect(read).toEqual(exp.storyFour);
        });

        it('TC-129 Change the Story Type = "Rags and Riches" to "Tragedy"', function () {
            storySwitch(story.ragsAndRiches, story.tragedy);
            let read = $$(sel.storyList)[story.tragedy].getAttribute("title");
            expect(read).toEqual(exp.storySix);
        });

        it('TC-130 Change the Story Type = "Rags and Riches" to "Comedy"', function () {
            storySwitch(story.ragsAndRiches, story.comedy);
            let read = $$(sel.storyList)[story.comedy].getAttribute("title");
            expect(read).toEqual(exp.storySeven);
        });

        it('TC-131 Change the Story Type = "Tragedy" to "Overcoming the Monster"', function () {
            storySwitch(story.tragedy, story.overcomingTheMonster);
            let read = $$(sel.storyList)[story.overcomingTheMonster].getAttribute("title");
            expect(read).toEqual(exp.storyOne);
        });

        it('TC-132 Change the Story Type = "Tragedy" to "Rebirth"', function () {
            storySwitch(story.tragedy, story.rebirth);
            let read = $$(sel.storyList)[story.rebirth].getAttribute("title");
            expect(read).toEqual(exp.storyTwo);
        });

        it('TC-133 Change the Story Type = "Tragedy" to "Quest"', function () {
            storySwitch(story.tragedy, story.quest);
            let read = $$(sel.storyList)[story.quest].getAttribute("title");
            expect(read).toEqual(exp.storyThree);
        });

        it('TC-134 Change the Story Type = "Tragedy" to "Journey and Return"', function () {
            storySwitch(story.tragedy, story.journeyAndReturn);
            let read = $$(sel.storyList)[story.journeyAndReturn].getAttribute("title");
            expect(read).toEqual(exp.storyFour);
        });

        it('TC-135 Change the Story Type = "Tragedy" to "Rags and Riches"', function () {
            storySwitch(story.tragedy, story.ragsAndRiches);
            let read = $$(sel.storyList)[story.ragsAndRiches].getAttribute("title");
            expect(read).toEqual(exp.storyFive);
        });

        it('TC-136 Change the Story Type = "Tragedy" to "Comedy"', function () {
            storySwitch(story.tragedy, story.comedy);
            let read = $$(sel.storyList)[story.comedy].getAttribute("title");
            expect(read).toEqual(exp.storySeven);
        });

        it('TC-137 Change the Story Type = "Comedy" to "Overcoming the Monster"', function () {
            storySwitch(story.comedy, story.overcomingTheMonster);
            let read = $$(sel.storyList)[story.overcomingTheMonster].getAttribute("title");
            expect(read).toEqual(exp.storyOne);
        });

        it('TC-138 Change the Story Type = "Comedy" to "Rebirth"', function () {
            storySwitch(story.comedy, story.rebirth);
            let read = $$(sel.storyList)[story.rebirth].getAttribute("title");
            expect(read).toEqual(exp.storyTwo);
        });

        it('TC-139 Change the Story Type = "Comedy" to "Quest"', function () {
            storySwitch(story.comedy, story.quest);
            let read = $$(sel.storyList)[story.quest].getAttribute("title");
            expect(read).toEqual(exp.storyThree);
        });

        it('TC-140 Change the Story Type = "Comedy" to "Journey and Return"', function () {
            storySwitch(story.comedy, story.journeyAndReturn);
            let read = $$(sel.storyList)[story.journeyAndReturn].getAttribute("title");
            expect(read).toEqual(exp.storyFour);
        });

        it('TC-141 Change the Story Type = "Comedy" to "Rags and Riches"', function () {
            storySwitch(story.comedy, story.ragsAndRiches);
            let read = $$(sel.storyList)[story.ragsAndRiches].getAttribute("title");
            expect(read).toEqual(exp.storyFive);
        });

        it('TC-142 Change the Story Type = "Comedy" to "Tragedy"', function () {
            storySwitch(story.comedy, story.tragedy);
            let read = $$(sel.storyList)[story.tragedy].getAttribute("title");
            expect(read).toEqual(exp.storySix);
        });

    });

});
