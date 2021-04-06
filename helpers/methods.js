import sel from "../data/selectors";

function inputValues4(name, gender, age, story, submit= 0, reset = 0){
    if (name !== "")
        $(sel.name).setValue(name);
    if (gender >= 0 && gender <=2)
        $$(sel.radioButtons)[gender].click();
    if (age !== "")
        $(sel.age).setValue(age);
    if (story >= 0 && story <=6){
        $(sel.storyType).click();
        $$(sel.storyList)[story].click();
    }
    if (submit > 0)
        $(sel.submit).click();
    if (reset > 0)
        $(sel.tryAgainBtn).click();
}

function storySwitch(story1, story2) {
    $(sel.storyType).click();
    $$(sel.storyList)[story1].click();
    $(sel.storyType).click();
    $$(sel.storyList)[story2].click();
}

function storySelect(story) {
    $(sel.storyType).click();
    $$(sel.storyList)[story].click();
}

function imageUpload (filePath) {
    let fileUpload = $(sel.imageUpload);
    let remoteFilePath = browser.uploadFile(filePath);
    browser.execute((el) => el.style.display = 'block', fileUpload);
    fileUpload.waitForDisplayed();
    fileUpload.setValue(remoteFilePath);
}

module.exports = {
    inputValues4,
    storySwitch,
    storySelect,
    imageUpload,
};
