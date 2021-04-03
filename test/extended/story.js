import exp from "../../data/expected.js";
import sel from '../../data/selectors';
import  {name, gender, age, story} from '../../data/testData';
import inputValues4 from '../../helpers/methods';

describe('Story field test', function () {

    before('Open App', function () {
        browser.url('');
    });
    beforeEach(() => {
        browser.refresh();
    });

    it('TC-087 Story Type label is present', function () {
        let label = $$(sel.requiredLabel)[3].isDisplayed();
        expect(label).toEqual(true);
    });

    it('TC-089 The first type of the story = "Overcoming the Monster"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.overcomingTheMonster].click();
        let story1 = $$(sel.storyList)[story.overcomingTheMonster].getAttribute("title");
        expect(story1).toEqual(exp.storyOne);
    });

    it('TC-090 The second type of the story = "Rebirth"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.rebirth].click();
        let story2 = $$(sel.storyList)[story.rebirth].getAttribute("title");
        expect(story2).toEqual(exp.storyTwo);
    });

    it('TC-091 The third type of the story = "Quest"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.quest].click();
        let story3 = $$(sel.storyList)[story.quest].getAttribute("title");
        expect(story3).toEqual(exp.storyThree);
    });

    it('TC-092 The fourth type of the story = "Journey and Return"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.journeyAndReturn].click();
        let story4 = $$(sel.storyList)[story.journeyAndReturn].getAttribute("title");
        expect(story4).toEqual(exp.storyFour);
    });

    it('TC-093 The fifth type of the story = "Rags and Riches"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.ragsAndRiches].click();
        let story5 = $$(sel.storyList)[story.ragsAndRiches].getAttribute("title");
        expect(story5).toEqual(exp.storyFive);
    });

    it('TC-094 The sixth type of the story = "Tragedy"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.tragedy].click();
        let story6 = $$(sel.storyList)[story.tragedy].getAttribute("title");
        expect(story6).toEqual(exp.storySix);
    });

    it('TC-095 The seventh type of the story = "Comedy"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.comedy].click();
        let story7 = $$(sel.storyList)[story.comedy].getAttribute("title");
        expect(story7).toEqual(exp.storySeven);
    });

    it('TC-096 The chosen story "Comedy" is displayed in the placeholder', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.comedy].click();
        let chosenStory = $$(sel.storyList)[story.comedy].getAttribute("title");
        expect(chosenStory).toEqual(exp.storySeven);
    });

    it('TC-101 Change the Story Type = "Overcoming the Monster" to "Rebirth"',  function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.overcomingTheMonster].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.rebirth].click();
        let read = $$(sel.storyList)[story.rebirth].getAttribute("title");
        expect(read).toEqual(exp.storyTwo);
    });

    it('TC-102 Change the Story Type = "Overcoming the Monster" to "Quest"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.overcomingTheMonster].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.quest].click();
        let read = $$(sel.storyList)[story.quest].getAttribute("title");
        expect(read).toEqual(exp.storyThree);
    });

    it('TC-103 Change the Story Type = "Overcoming the Monster" to "Journey and Return"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.overcomingTheMonster].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.journeyAndReturn].click();
        let read = $$(sel.storyList)[story.journeyAndReturn].getAttribute("title");
        expect(read).toEqual(exp.storyFour);
    });

    it('TC-104 Change the Story Type = "Overcoming the Monster" to "Rags and Riches"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.overcomingTheMonster].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.ragsAndRiches].click();
        let read = $$(sel.storyList)[story.ragsAndRiches].getAttribute("title");
        expect(read).toEqual(exp.storyFive);
    });

    it('TC-105 Change the Story Type = "Overcoming the Monster" to "Tragedy"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.overcomingTheMonster].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.tragedy].click();
        let read = $$(sel.storyList)[story.tragedy].getAttribute("title");
        expect(read).toEqual(exp.storySix);
    });

    it('TC-106 Change the Story Type = "Overcoming the Monster" to "Comedy"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.overcomingTheMonster].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.comedy].click();
        let read = $$(sel.storyList)[story.comedy].getAttribute("title");
        expect(read).toEqual(exp.storySeven);
    });

    it('TC-107 Change the Story Type = "Rebirth" to "Overcoming the Monster"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.rebirth].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.overcomingTheMonster].click();
        let read = $$(sel.storyList)[story.overcomingTheMonster].getAttribute("title");
        expect(read).toEqual(exp.storyOne);
    });

    it('TC-108 Change the Story Type = "Rebirth" to "Quest"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.rebirth].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.quest].click();
        let read = $$(sel.storyList)[story.quest].getAttribute("title");
        expect(read).toEqual(exp.storyThree);
    });

    it('TC-109 Change the Story Type = "Rebirth" to "Journey and Return"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.rebirth].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.journeyAndReturn].click();
        let read = $$(sel.storyList)[story.journeyAndReturn].getAttribute("title");
        expect(read).toEqual(exp.storyFour);
    });

    it('TC-110 Change the Story Type = "Rebirth" to "Rags and Riches"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.rebirth].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.ragsAndRiches].click();
        let read = $$(sel.storyList)[story.ragsAndRiches].getAttribute("title");
        expect(read).toEqual(exp.storyFive);
    });

    it('TC-111 Change the Story Type = "Rebirth" to "Tragedy"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.rebirth].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.tragedy].click();
        let read = $$(sel.storyList)[story.tragedy].getAttribute("title");
        expect(read).toEqual(exp.storySix);
    });

    it('TC-112 Change the Story Type = "Rebirth" to "Comedy"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.rebirth].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.comedy].click();
        let read = $$(sel.storyList)[story.comedy].getAttribute("title");
        expect(read).toEqual(exp.storySeven);
    });

    it('TC-113 Change the Story Type = "Quest" to "Overcoming the Monster"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.quest].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.overcomingTheMonster].click();
        let read = $$(sel.storyList)[story.overcomingTheMonster].getAttribute("title");
        expect(read).toEqual(exp.storyOne);
    });

    it('TC-114 Change the Story Type = "Quest" to "Rebirth"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.quest].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.rebirth].click();
        let read = $$(sel.storyList)[story.rebirth].getAttribute("title");
        expect(read).toEqual(exp.storyTwo);
    });

    it('TC-115 Change the Story Type = "Quest" to "Journey and Return"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.quest].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.journeyAndReturn].click();
        let read = $$(sel.storyList)[story.journeyAndReturn].getAttribute("title");
        expect(read).toEqual(exp.storyFour);
    });

    it('TC-116 Change the Story Type = "Quest" to "Rags and Riches"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.quest].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.ragsAndRiches].click();
        let read = $$(sel.storyList)[story.ragsAndRiches].getAttribute("title");
        expect(read).toEqual(exp.storyFive);
    });

    it('TC-117 Change the Story Type = "Quest" to "Tragedy"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.quest].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.tragedy].click();
        let read = $$(sel.storyList)[story.tragedy].getAttribute("title");
        expect(read).toEqual(exp.storySix);
    });

    it('TC-118 Change the Story Type = "Quest" to "Comedy"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.quest].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.comedy].click();
        let read = $$(sel.storyList)[story.comedy].getAttribute("title");
        expect(read).toEqual(exp.storySeven);
    });

    it('TC-119 Change the Story Type = "Journey and Return" to "Overcoming the Monster"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.journeyAndReturn].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.overcomingTheMonster].click();
        let read = $$(sel.storyList)[story.overcomingTheMonster].getAttribute("title");
        expect(read).toEqual(exp.storyOne);
    });

    it('TC-120 Change the Story Type = "Journey and Return" to "Rebirth"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.journeyAndReturn].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.rebirth].click();
        let read = $$(sel.storyList)[story.rebirth].getAttribute("title");
        expect(read).toEqual(exp.storyTwo);
    });

    it('TC-121 Change the Story Type = "Journey and Return" to "Quest"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.journeyAndReturn].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.quest].click();
        let read = $$(sel.storyList)[story.quest].getAttribute("title");
        expect(read).toEqual(exp.storyThree);
    });

    it('TC-122 Change the Story Type = "Journey and Return" to "Rags and Riches"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.journeyAndReturn].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.ragsAndRiches].click();
        let read = $$(sel.storyList)[story.ragsAndRiches].getAttribute("title");
        expect(read).toEqual(exp.storyFive);
    });

    it('TC-123 Change the Story Type = "Journey and Return" to "Tragedy"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.journeyAndReturn].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.tragedy].click();
        let read = $$(sel.storyList)[story.tragedy].getAttribute("title");
        expect(read).toEqual(exp.storySix);
    });

    it('TC-124 Change the Story Type = "Journey and Return" to "Comedy"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.journeyAndReturn].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.comedy].click();
        let read = $$(sel.storyList)[story.comedy].getAttribute("title");
        expect(read).toEqual(exp.storySeven);
    });

    it('TC-125 Change the Story Type = "Rags and Riches" to "Overcoming the Monster"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.ragsAndRiches].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.overcomingTheMonster].click();
        let read = $$(sel.storyList)[story.overcomingTheMonster].getAttribute("title");
        expect(read).toEqual(exp.storyOne);
    });

    it('TC-126 Change the Story Type = "Rags and Riches" to "Rebirth"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.ragsAndRiches].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.rebirth].click();
        let read = $$(sel.storyList)[story.rebirth].getAttribute("title");
        expect(read).toEqual(exp.storyTwo);
    });

    it('TC-127 Change the Story Type = "Rags and Riches" to "Quest"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.ragsAndRiches].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.quest].click();
        let read = $$(sel.storyList)[story.quest].getAttribute("title");
        expect(read).toEqual(exp.storyThree);
    });

    it('TC-128 Change the Story Type = "Rags and Riches" to "Journey and Return"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.ragsAndRiches].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.journeyAndReturn].click();
        let read = $$(sel.storyList)[story.journeyAndReturn].getAttribute("title");
        expect(read).toEqual(exp.storyFour);
    });

    it('TC-129 Change the Story Type = "Rags and Riches" to "Tragedy"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.ragsAndRiches].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.tragedy].click();
        let read = $$(sel.storyList)[story.tragedy].getAttribute("title");
        expect(read).toEqual(exp.storySix);
    });

    it('TC-130 Change the Story Type = "Rags and Riches" to "Comedy"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.ragsAndRiches].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.comedy].click();
        let read = $$(sel.storyList)[story.comedy].getAttribute("title");
        expect(read).toEqual(exp.storySeven);
    });

    it('TC-131 Change the Story Type = "Tragedy" to "Overcoming the Monster"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.tragedy].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.overcomingTheMonster].click();
        let read = $$(sel.storyList)[story.overcomingTheMonster].getAttribute("title");
        expect(read).toEqual(exp.storyOne);
    });

    it('TC-132 Change the Story Type = "Tragedy" to "Rebirth"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.tragedy].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.rebirth].click();
        let read = $$(sel.storyList)[story.rebirth].getAttribute("title");
        expect(read).toEqual(exp.storyTwo);
    });

    it('TC-133 Change the Story Type = "Tragedy" to "Quest"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.tragedy].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.quest].click();
        let read = $$(sel.storyList)[story.quest].getAttribute("title");
        expect(read).toEqual(exp.storyThree);
    });

    it('TC-134 Change the Story Type = "Tragedy" to "Journey and Return"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.tragedy].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.journeyAndReturn].click();
        let read = $$(sel.storyList)[story.journeyAndReturn].getAttribute("title");
        expect(read).toEqual(exp.storyFour);
    });

    it('TC-135 Change the Story Type = "Tragedy" to "Rags and Riches"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.tragedy].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.ragsAndRiches].click();
        let read = $$(sel.storyList)[story.ragsAndRiches].getAttribute("title");
        expect(read).toEqual(exp.storyFive);
    });

    it('TC-136 Change the Story Type = "Tragedy" to "Comedy"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.tragedy].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.comedy].click();
        let read = $$(sel.storyList)[story.comedy].getAttribute("title");
        expect(read).toEqual(exp.storySeven);
    });

    it('TC-137 Change the Story Type = "Comedy" to "Overcoming the Monster"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.comedy].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.overcomingTheMonster].click();
        let read = $$(sel.storyList)[story.overcomingTheMonster].getAttribute("title");
        expect(read).toEqual(exp.storyOne);
    });

    it('TC-138 Change the Story Type = "Comedy" to "Rebirth"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.comedy].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.rebirth].click();
        let read = $$(sel.storyList)[story.rebirth].getAttribute("title");
        expect(read).toEqual(exp.storyTwo);
    });

    it('TC-139 Change the Story Type = "Comedy" to "Quest"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.comedy].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.quest].click();
        let read = $$(sel.storyList)[story.quest].getAttribute("title");
        expect(read).toEqual(exp.storyThree);
    });

    it('TC-140 Change the Story Type = "Comedy" to "Journey and Return"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.comedy].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.journeyAndReturn].click();
        let read = $$(sel.storyList)[story.journeyAndReturn].getAttribute("title");
        expect(read).toEqual(exp.storyFour);
    });

    it('TC-141 Change the Story Type = "Comedy" to "Rags and Riches"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.comedy].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.ragsAndRiches].click();
        let read = $$(sel.storyList)[story.ragsAndRiches].getAttribute("title");
        expect(read).toEqual(exp.storyFive);
    });

    it('TC-142 Change the Story Type = "Comedy" to "Tragedy"', function () {
        $(sel.storyType).click();
        $$(sel.storyList)[story.comedy].click();
        $(sel.storyType).click();
        $$(sel.storyList)[story.tragedy].click();
        let read = $$(sel.storyList)[story.tragedy].getAttribute("title");
        expect(read).toEqual(exp.storySix);
    });

    it('TC-143 Submit button is disabled after a story type field skipped', function () {
        $(sel.name).setValue(name.default);
        $$(sel.radioButtons)[gender.she].click();
        $(sel.age).setValue(age.default);
        let submitBtn = $(sel.submit).isEnabled();
        expect(submitBtn).toEqual(false);
    });



});

