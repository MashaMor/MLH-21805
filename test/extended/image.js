import sel from '../../data/selectors';
import exp from '../../data/expected';
import {imageUpload} from '../../helpers/methods';
import path from "path";

describe('Image', function () {

    before('Open App', function () {
        browser.url('');
    });

    afterEach('Refresh App', function () {
        browser.refresh();
    });

    describe('Placeholder', function () {

        it('TC-147 Image field placeholder = "Click or drag and drop"', function () {
            let placeholder = $(sel.image).getText();
            expect(placeholder).toEqual(exp.imagePH);
        });

    })

    describe('Positive cases', function () {

        it('TC-148 Click works for .jpeg files', function () {
            let filePath = path.join(__dirname, '../../data/photo/Ameliia.jpg');
            imageUpload(filePath);
            let thumbnail = $(sel.imageThumbnail);
            expect(thumbnail).toBeExisting();
        });

    });

});
