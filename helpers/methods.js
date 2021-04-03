import sel from "../data/selectors"

function inputValues4 (name, gender, age, story){
    $(sel.name).setValue(name);
    $$(sel.radioButtons)[gender].click();
    $(sel.age).setValue(age);
    $(sel.storyType).click();
    $$(sel.storyList)[story].click();
}

function inputNameGenderStory (name, gender, story){
    $(sel.name).setValue(name);
    $$(sel.radioButtons)[gender].click();
    $(sel.storyType).click();
    $$(sel.storyList)[story].click();
}

module.exports = {inputValues4, inputNameGenderStory};
