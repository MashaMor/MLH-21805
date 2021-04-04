const name = {
    "default": "QueenBee!1",
    "symbol1": "i",
    "symbol70": "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
    "symbol71": "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz1234567890123456789",
    "symbolSpecial": ",.;`~!@#$%'/=^&*()_+{}:?><[]",
    "symbolSpace": "ABC abc",
    "space": "   ",
    "letters": "Abc",
    "lettersRus": "абвгде",
    "upperCase": "ABC",
    "lowerCase": "abc",
    "digits": "1234567890",
}

const gender = {
    "he": 0,
    "she": 1,
    "it": 2,
}

const age = {
    "default": "1234567890",
    "digit1": "1",
    "digit2": "2",
    "digits12": "999999999999",
    "digits13": "9999999999999",
    "digitsAny": "1234567890",
    "digitsWithSpaces": "123 78 9",
    "digitsWith0": "00001",
    "letters": "abcdef",
    "zero": "0",
    "symbols": ".,/!@#{}[]",
    "digitsNegative": "-1",
    "floatNumbers": "1.5",
    "lettersRus": "абвгдежзик"
}

const story = {
    "overcomingTheMonster": 0,
    "rebirth": 1,
    "quest": 2,
    "journeyAndReturn": 3,
    "ragsAndRiches": 4,
    "tragedy": 5,
    "comedy": 6
}

const generatedStory = {
    "story": 0,
    "moral": 1
}

module.exports = {name, gender, age, story, generatedStory}
