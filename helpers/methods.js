import sel from "../data/selectors"

function inputValues4(name, gender, age, story){
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
}

function inputValue4Submit(name, gender, age, story) {
    $(sel.name).setValue(name);
    $$(sel.radioButtons)[gender].click();
    $(sel.age).setValue(age);
    $(sel.storyType).click();
    $$(sel.storyList)[story].click();
    $(sel.submit).click();
}

module.exports = {
    inputValues4,
    inputValue4Submit,
};

