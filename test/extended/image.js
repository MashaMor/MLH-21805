import sel from '../../data/selectors';
import exp from '../../data/expected';
import {imageUpload} from '../../helpers/methods';
import path from "path";
import {image} from '../../data/testData';

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

    });

    describe('Positive cases', function () {

        it('TC-148 Click works for .jpeg files', function () {
            let filePath = path.join(__dirname, image.jpg2);
            imageUpload(filePath);
            let thumbnail = $(sel.imageThumbnail);
            expect(thumbnail).toBeExisting();
        });

        it('TC-150 Click works for .png files', function () {
            let filePath = path.join(__dirname, image.png2);
            imageUpload(filePath);
            let thumbnail = $(sel.imageThumbnail);
            expect(thumbnail).toBeExisting();
        });

        it('TC-152 Max size .jpeg file is 3.9 Mb', function () {
            let filePath = path.join(__dirname, image.jpg39);
            imageUpload(filePath);
            let thumbnail = $(sel.imageThumbnail);
            expect(thumbnail).toBeExisting();
        });

        it('TC-154 Max size .png file is 3.9 Mb', function () {
            let filePath = path.join(__dirname, image.png39);
            imageUpload(filePath);
            let thumbnail = $(sel.imageThumbnail);
            expect(thumbnail).toBeExisting();
        });

        it('TC-156 Bin icon appears', function () {
            let filePath = path.join(__dirname, image.jpg2);
            imageUpload(filePath);
            let binIcon = $(sel.binIcon);
            expect(binIcon).toBeExisting();
        });

        it('TC-157 User can delete the image', function () {
            let filePath = path.join(__dirname, image.jpg2);
            imageUpload(filePath);
            $(sel.binIcon).click();
            let thumbnail = $(sel.imageThumbnail).isDisplayed();
            expect(thumbnail).toEqual(false);
        });

    });

    describe('Negative tests', function () {

        it('TC-161 User cannot Upload 4Mb .jpeg', function () {
            let filePath = path.join(__dirname, image.jpg43);
            imageUpload(filePath);
            let thumbnail = $(sel.imageThumbnail).isDisplayed();
            expect(thumbnail).toEqual(false);
        });

        it('TC-163 User cannot Upload 4Mb .png', function () {
            let filePath = path.join(__dirname, image.png43);
            imageUpload(filePath);
            let thumbnail = $(sel.imageThumbnail).isDisplayed();
            expect(thumbnail).toEqual(false);
        });

        it('TC-165 User cannot Upload 2Mb .gif', function () {
            let filePath = path.join(__dirname, image.gif2);
            imageUpload(filePath);
            let thumbnail = $(sel.imageThumbnail).isDisplayed();
            expect(thumbnail).toEqual(false);
        });

        it('TC-166 User cannot Upload 2Mb .pdf', function () {
            let filePath = path.join(__dirname, image.pdf2);
            imageUpload(filePath);
            let thumbnail = $(sel.imageThumbnail).isDisplayed();
            expect(thumbnail).toEqual(false);
        });

        it('TC-167 User cannot Upload 2Mb .mp4', function () {
            let filePath = path.join(__dirname, image.mp4);
            imageUpload(filePath);
            let thumbnail = $(sel.imageThumbnail).isDisplayed();
            expect(thumbnail).toEqual(false);
        });

        it('TC-168 User cannot Upload 2Mb .bmp', function () {
            let filePath = path.join(__dirname, image.bmp2);
            imageUpload(filePath);
            let thumbnail = $(sel.imageThumbnail).isDisplayed();
            expect(thumbnail).toEqual(false);
        });

        it('TC-169 User cannot Upload 2Mb .ppt', function () {
            let filePath = path.join(__dirname, image.ppt);
            imageUpload(filePath);
            let thumbnail = $(sel.imageThumbnail).isDisplayed();
            expect(thumbnail).toEqual(false);
        });

        it('TC-170 User cannot Upload 2Mb .psd', function () {
            let filePath = path.join(__dirname, image.psd2);
            imageUpload(filePath);
            let thumbnail = $(sel.imageThumbnail).isDisplayed();
            expect(thumbnail).toEqual(false);
        });

        it('TC-171 User cannot Upload 2Mb .tif', function () {
            let filePath = path.join(__dirname, image.tif2);
            imageUpload(filePath);
            let thumbnail = $(sel.imageThumbnail).isDisplayed();
            expect(thumbnail).toEqual(false);
        });

        it('TC-172 User cannot Upload 2Mb .raw', function () {
            let filePath = path.join(__dirname, image.raw2);
            imageUpload(filePath);
            let thumbnail = $(sel.imageThumbnail).isDisplayed();
            expect(thumbnail).toEqual(false);
        });

    });

});
