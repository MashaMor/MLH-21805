import {storySwitch} from "../../helpers/methods";
import {story} from "../../data/testData";
import sel from "../../data/selectors";
import exp from "../../data/expected";

describe('Story Type part 2', function () {

    before('Open App', function () {
        browser.url('');
    });

    beforeEach(() => {
        browser.refresh();
    });

    describe('Positive cases', function () {

        it('TC-101 Change the Story Type = "Overcoming the Monster" to "Rebirth"',  function () {
            storySwitch(story.overcomingTheMonster, story.rebirth);
            let read = $$(sel.storyList)[story.rebirth].getAttribute("title");
            expect(read).toEqual(exp.storyTwo);
        });

        it('TC-102 Change the Story Type = "Overcoming the Monster" to "Quest"', function () {
            storySwitch(story.overcomingTheMonster, story.quest);
            let read = $$(sel.storyList)[story.quest].getAttribute("title");
            expect(read).toEqual(exp.storyThree);
        });

        it('TC-103 Change the Story Type = "Overcoming the Monster" to "Journey and Return"', function () {
            storySwitch(story.overcomingTheMonster, story.journeyAndReturn);
            let read = $$(sel.storyList)[story.journeyAndReturn].getAttribute("title");
            expect(read).toEqual(exp.storyFour);
        });

        it('TC-104 Change the Story Type = "Overcoming the Monster" to "Rags and Riches"', function () {
            storySwitch(story.overcomingTheMonster, story.ragsAndRiches);
            let read = $$(sel.storyList)[story.ragsAndRiches].getAttribute("title");
            expect(read).toEqual(exp.storyFive);
        });

        it('TC-105 Change the Story Type = "Overcoming the Monster" to "Tragedy"', function () {
            storySwitch(story.overcomingTheMonster, story.tragedy);
            let read = $$(sel.storyList)[story.tragedy].getAttribute("title");
            expect(read).toEqual(exp.storySix);
        });

        it('TC-106 Change the Story Type = "Overcoming the Monster" to "Comedy"', function () {
            storySwitch(story.overcomingTheMonster, story.comedy);
            let read = $$(sel.storyList)[story.comedy].getAttribute("title");
            expect(read).toEqual(exp.storySeven);
        });

        it('TC-107 Change the Story Type = "Rebirth" to "Overcoming the Monster"', function () {
            storySwitch(story.rebirth, story.overcomingTheMonster);
            let read = $$(sel.storyList)[story.overcomingTheMonster].getAttribute("title");
            expect(read).toEqual(exp.storyOne);
        });

        it('TC-108 Change the Story Type = "Rebirth" to "Quest"', function () {
            storySwitch(story.rebirth, story.quest);
            let read = $$(sel.storyList)[story.quest].getAttribute("title");
            expect(read).toEqual(exp.storyThree);
        });

        it('TC-109 Change the Story Type = "Rebirth" to "Journey and Return"', function () {
            storySwitch(story.rebirth, story.journeyAndReturn);
            let read = $$(sel.storyList)[story.journeyAndReturn].getAttribute("title");
            expect(read).toEqual(exp.storyFour);
        });

        it('TC-110 Change the Story Type = "Rebirth" to "Rags and Riches"', function () {
            storySwitch(story.rebirth, story.ragsAndRiches);
            let read = $$(sel.storyList)[story.ragsAndRiches].getAttribute("title");
            expect(read).toEqual(exp.storyFive);
        });

        it('TC-111 Change the Story Type = "Rebirth" to "Tragedy"', function () {
            storySwitch(story.rebirth, story.tragedy);
            let read = $$(sel.storyList)[story.tragedy].getAttribute("title");
            expect(read).toEqual(exp.storySix);
        });

        it('TC-112 Change the Story Type = "Rebirth" to "Comedy"', function () {
            storySwitch(story.rebirth, story.comedy);
            let read = $$(sel.storyList)[story.comedy].getAttribute("title");
            expect(read).toEqual(exp.storySeven);
        });

        it('TC-113 Change the Story Type = "Quest" to "Overcoming the Monster"', function () {
            storySwitch(story.quest, story.overcomingTheMonster);
            let read = $$(sel.storyList)[story.overcomingTheMonster].getAttribute("title");
            expect(read).toEqual(exp.storyOne);
        });

        it('TC-114 Change the Story Type = "Quest" to "Rebirth"', function () {
            storySwitch(story.quest, story.rebirth);
            let read = $$(sel.storyList)[story.rebirth].getAttribute("title");
            expect(read).toEqual(exp.storyTwo);
        });

        it('TC-115 Change the Story Type = "Quest" to "Journey and Return"', function () {
            storySwitch(story.quest, story.journeyAndReturn);
            let read = $$(sel.storyList)[story.journeyAndReturn].getAttribute("title");
            expect(read).toEqual(exp.storyFour);
        });

        it('TC-116 Change the Story Type = "Quest" to "Rags and Riches"', function () {
            storySwitch(story.quest, story.ragsAndRiches);
            let read = $$(sel.storyList)[story.ragsAndRiches].getAttribute("title");
            expect(read).toEqual(exp.storyFive);
        });

        it('TC-117 Change the Story Type = "Quest" to "Tragedy"', function () {
            storySwitch(story.quest, story.tragedy);
            let read = $$(sel.storyList)[story.tragedy].getAttribute("title");
            expect(read).toEqual(exp.storySix);
        });

        it('TC-118 Change the Story Type = "Quest" to "Comedy"', function () {
            storySwitch(story.quest, story.comedy);
            let read = $$(sel.storyList)[story.comedy].getAttribute("title");
            expect(read).toEqual(exp.storySeven);
        });

    });

});



