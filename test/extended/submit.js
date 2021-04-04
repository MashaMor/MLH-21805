import sel from '../../data/selectors';
import exp from '../../data/expected';
import {name, gender, age, story, generatedStory} from '../../data/testData';
import {inputValues4} from '../../helpers/methods';
import path from "path";

describe('Submit button', function () {

    before('Open App', function () {
        browser.url('');
    });

    beforeEach('refresh browser', function() {
        browser.refresh();
    });

    describe('Positive tests', function () {

        it('TC-176 User opens the application, "Submit" button is disabled', function () {
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(false);
        });

        it('TC-177 User reloads the application, "Submit" button is disabled', function () {
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(false);
        });

        it('TC-178 The Header = "My Little Hero" (second page)', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy, 1);
            let header = $(sel.header).getText();
            expect(header).toEqual(exp.header);
        });

        it('TC-199 Name is correct in story title', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy, 1);
            let storyTitle = $(sel.storyTitle).getText();
            expect(storyTitle).toEqual(exp.storyTitle);
        });

        it('TC-179 Name is correct in generated story', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy, 1);
            let storyBody = $$(sel.storyText)[generatedStory.story].getText();
            let res = storyBody.match(/QueenBee!1/);
            expect(res.toString()).toEqual(name.default);
        });

        it('TC-180a Gender is correct (+possessive) and appears in the story: "he"', function () {
            inputValues4(name.default, gender.he, age.default, story.comedy, 1);
            let storyBody = $$(sel.storyText)[generatedStory.story].getText();
            let res = storyBody.match(/\bhis\b/g);
            expect(res.toString().trim()).toEqual(exp.genderHis);
        });

        it('TC-180b Gender is correct (+possessive) and appears in the story: "his"', function () {
            inputValues4(name.default, gender.he, age.default, story.comedy, 1);
            let storyBody = $$(sel.storyText)[generatedStory.story].getText();
            let res = storyBody.match(/\bHe\b/g);
            expect(res.toString().trim()).toEqual(exp.genderHe);
        });

        it('TC-181a Gender is correct (+possessive) and appears in the story: "she"', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy, 1);
            let storyBody = $$(sel.storyText)[generatedStory.story].getText();
            let res = storyBody.match(/ \bher\b/g);
            expect(res.toString().trim()).toEqual(exp.genderHer);
        });

        it('TC-181b Gender is correct (+possessive) and appears in the story: "her"', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy, 1);
            let storyBody = $$(sel.storyText)[generatedStory.story].getText();
            let res = storyBody.match(/\bShe\b/g);
            expect(res.toString().trim()).toEqual(exp.genderShe);
        });

        it('TC-182a Gender is correct (+possessive) and appears in the story: "its"', function () {
            inputValues4(name.default, gender.it, age.default, story.comedy, 1);
            let storyBody = $$(sel.storyText)[generatedStory.story].getText();
            let res = storyBody.match(/ \bits\b/g);
            expect(res.toString().trim()).toEqual(exp.genderIts);
        });

        it('TC-182b Gender is correct (+possessive) and appears in the story: "it"', function () {
            inputValues4(name.default, gender.it, age.default, story.comedy, 1);
            let storyBody = $$(sel.storyText)[generatedStory.story].getText();
            let res = storyBody.match(/\bIt\b/g);
            expect(res.toString().trim()).toEqual(exp.genderIt);
        });

        it('TC-183 Words begin with a capital letter at the beginning of a sentence.', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy, 1);
            let storyBody = $$(sel.storyText)[generatedStory.story].getText();
            expect(storyBody).toEqual(exp.story);
            //Blocked by TC-189
        });

        it('TC-184 Age is Correct and appears in the story.', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy, 1);
            let storyBody = $$(sel.storyText)[generatedStory.story].getText();
            let res = storyBody.match(/\b1234567890\b/g);
            expect(res.toString().trim()).toEqual(exp.storyAge);
        });

        it('TC-185 "Years" for 2 and more years.', function () {
            inputValues4(name.default, gender.she, age.digit2, story.comedy, 1);
            let storyBody = $$(sel.storyText)[generatedStory.story].getText();
            let res = storyBody.match(/\byears\b/g);
            expect(res.toString().trim()).toEqual(exp.storyAges2AndMore);
        });

        it('TC-186 "Year" for 1.', function () {
            inputValues4(name.default, gender.she, age.digit1, story.comedy, 1);
            let storyBody = $$(sel.storyText)[generatedStory.story].getText();
            let res = storyBody.match(/\byear\b/g);
            expect(res.toString().trim()).toEqual(exp.storyAges1);
        });

        it('TC-188 Executed story is correct and matches the corresponding text from the documentation.', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy, 1);
            let storyBody = $$(sel.storyText)[generatedStory.story].getText();
            expect(storyBody).toEqual(exp.story);
            //Blocked by TC-189
        });

        it('TC-189 Executed story is correct and has no spelling or grammatical errors.', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy, 1);
            let storyBody = $$(sel.storyText)[generatedStory.story].getText();
            expect(storyBody).toEqual(exp.story);
        });

        it('TC-190 Uploaded avatar is present.', function () {
            let fileUpload = $(sel.imageUpload);
            let filePath = path.join(__dirname, '../../data/photo/Ameliia.jpg');
            let remoteFilePath = browser.uploadFile(filePath);
            let avatar = $(sel.avatar).isDisplayed();
            browser.execute((el) => el.style.display = 'block', fileUpload);
            fileUpload.waitForDisplayed();
            fileUpload.setValue(remoteFilePath);
            inputValues4(name.default, gender.she, age.default, story.comedy,1);
            expect(avatar).toEqual(false);
        });

        it('TC-191 User doesn\'t upload an avatar.', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy, 1);
            let avatarField = $(sel.avatar).isDisplayed();
            expect(avatarField).toEqual(false);
        });

        it('TC-202 The moral is correct and has no spelling or grammatical errors.', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy, 1);
            let storyBody = $$(sel.storyText)[generatedStory.moral].getText();
            expect(storyBody).toEqual(exp.moral);
        });

    });

});
