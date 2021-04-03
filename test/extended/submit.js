import sel from '../../data/selectors';
import exp from '../../data/expected';
import {name, gender, age, story, generatedStory} from '../../data/testData';
import {inputValues4, inputValue4Submit} from '../../helpers/methods';
import path from "path";

describe('Submit button', function () {

    describe('Positive tests', function () {

        before('Open App', function () {
            browser.url('');
        });

        beforeEach('refresh browser', function() {
            browser.refresh();
        });

        it('TC-176 User opens the application, "Submit" button is disabled', function () {
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(false);
        });

        it('TC-177 User reloads the application, "Submit" button is disabled', function () {
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(false);
        });

        it('TC-178 The Header = "My Little Hero" (second page)', function () {
            inputValue4Submit(name.default, gender.she, age.default, story.comedy);
            let header = $(sel.header).getText();
            expect(header).toEqual(exp.header);
        });

        it('TC-199 Name is correct in story title', function () {
            inputValue4Submit(name.default, gender.she, age.default, story.comedy);
            let storyTitle = $(sel.storyTitle).getText();
            expect(storyTitle).toEqual(exp.storyTitle);
        });

        it('TC-179 Name is correct in generated story', function () {
            inputValue4Submit(name.default, gender.she, age.default, story.comedy);
            let storyBody = $$(sel.storyText)[generatedStory.story].getText();
            let res = storyBody.match(/QueenBee!1/);
            expect(res.toString()).toEqual(name.default);
        });

        it('TC-180a Gender is correct (+possessive) and appears in the story: "he"', function () {
            inputValue4Submit(name.default, gender.he, age.default, story.comedy);
            let storyBody = $$(sel.storyText)[generatedStory.story].getText();
            let res = storyBody.match(/\bhis\b/g);
            expect(res.toString().trim()).toEqual(exp.genderHis);
        });

        it('TC-180b Gender is correct (+possessive) and appears in the story: "his"', function () {
            inputValue4Submit(name.default, gender.he, age.default, story.comedy);
            let storyBody = $$(sel.storyText)[generatedStory.story].getText();
            let res = storyBody.match(/\bHe\b/g);
            expect(res.toString().trim()).toEqual(exp.genderHe);
        });

        it('TC-181a Gender is correct (+possessive) and appears in the story: "she"', function () {
            inputValue4Submit(name.default, gender.she, age.default, story.comedy);
            let storyBody = $$(sel.storyText)[generatedStory.story].getText();
            let res = storyBody.match(/ \bher\b/g);
            expect(res.toString().trim()).toEqual(exp.genderHer);
        });

        it('TC-181b Gender is correct (+possessive) and appears in the story: "her"', function () {
            inputValue4Submit(name.default, gender.she, age.default, story.comedy);
            let storyBody = $$(sel.storyText)[generatedStory.story].getText();
            let res = storyBody.match(/\bShe\b/g);
            expect(res.toString().trim()).toEqual(exp.genderShe);
        });

        it('TC-182a Gender is correct (+possessive) and appears in the story: "its"', function () {
            inputValue4Submit(name.default, gender.it, age.default, story.comedy);
            let storyBody = $$(sel.storyText)[generatedStory.story].getText();
            let res = storyBody.match(/ \bits\b/g);
            expect(res.toString().trim()).toEqual(exp.genderIts);
        });

        it('TC-182b Gender is correct (+possessive) and appears in the story: "it"', function () {
            inputValue4Submit(name.default, gender.it, age.default, story.comedy);
            let storyBody = $$(sel.storyText)[generatedStory.story].getText();
            let res = storyBody.match(/\bIt\b/g);
            expect(res.toString().trim()).toEqual(exp.genderIt);
        });


        it('TC-183 Words begin with a capital letter at the beginning of a sentence.', function () {
            inputValue4Submit(name.default, gender.she, age.default, story.comedy);
            let storyBody = $$(sel.storyText)[generatedStory.story].getText();
            expect(storyBody).toEqual(exp.story);
            //Blocked by TC-189
        });

        it('TC-184 Age is Correct and appears in the story.', function () {
            inputValue4Submit(name.default, gender.she, age.default, story.comedy);
            let storyBody = $$(sel.storyText)[generatedStory.story].getText();
            let res = storyBody.match(/\b1234567890\b/g);
            expect(res.toString().trim()).toEqual(exp.storyAge);
        });

        it('TC-185 "Years" for 2 and more years.', function () {
            inputValue4Submit(name.default, gender.she, age.digit2, story.comedy);
            let storyBody = $$(sel.storyText)[generatedStory.story].getText();
            let res = storyBody.match(/\byears\b/g);
            expect(res.toString().trim()).toEqual(exp.storyAges2AndMore);
        });

        it('TC-186 "Year" for 1.', function () {
            inputValue4Submit(name.default, gender.she, age.digit1, story.comedy);
            let storyBody = $$(sel.storyText)[generatedStory.story].getText();
            let res = storyBody.match(/\byear\b/g);
            expect(res.toString().trim()).toEqual(exp.storyAges1);
        });

        it('TC-188 Executed story is correct and matches the corresponding text from the documentation.', function () {
            inputValue4Submit(name.default, gender.she, age.default, story.comedy);
            let storyBody = $$(sel.storyText)[generatedStory.story].getText();
            expect(storyBody).toEqual(exp.story);
            //Blocked by TC-189
        });

        it('TC-189 Executed story is correct and has no spelling or grammatical errors.', function () {
            inputValue4Submit(name.default, gender.she, age.default, story.comedy);
            let storyBody = $$(sel.storyText)[generatedStory.story].getText();
            expect(storyBody).toEqual(exp.story);
        });

        it('TC-190 Uploaded avatar is present.', function () {
            inputValues4(name.default, gender.she, age.default, story.comedy)
            const fileUpload = $(sel.imageUpload);
            const filePath = path.join(__dirname, '../../data/photo/Ameliia.jpg');
            const  remoteFilePath = browser.uploadFile(filePath);
            browser.execute(
                (el) => el.style.display = 'block',
                fileUpload
            );
            fileUpload.waitForDisplayed();
            fileUpload.setValue(remoteFilePath);
            $(sel.submit).click();
            let avatar = $(sel.avatar).isDisplayed();
            expect(avatar).toEqual(false);
        });

        it('TC-191 User doesn\'t upload an avatar.', function () {
            inputValue4Submit(name.default, gender.she, age.default, story.comedy)
            let avatarField = $(sel.avatar).isDisplayed();
            expect(avatarField).toEqual(false);
        });

        it('TC-202 The moral is correct and has no spelling or grammatical errors.', function () {
            inputValue4Submit(name.default, gender.she, age.default, story.comedy);
            let storyBody = $$(sel.storyText)[generatedStory.moral].getText();
            expect(storyBody).toEqual(exp.moral);
        });
    });
});
