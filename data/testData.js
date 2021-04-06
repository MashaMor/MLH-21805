import path from "path";

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
    "lettersRus": "абвгдежзик",
}

const story = {
    "overcomingTheMonster": 0,
    "rebirth": 1,
    "quest": 2,
    "journeyAndReturn": 3,
    "ragsAndRiches": 4,
    "tragedy": 5,
    "comedy": 6,
}

const generatedStory = {
    "story": 0,
    "moral": 1,
}

const image = {
    "ppt2": '../../data/images/1mb.ppt',
    "jpg2": '../../data/images/2mb-2.jpg',
    "bmp2": '../../data/images/2mb-bmp.bmp',
    "gif2": '../../data/images/2mb-gif.gif',
    "pdf2": '../../data/images/2mb-pdf.pdf',
    "png2": '../../data/images/2mb-png.png',
    "psd2": '../../data/images/2mb-psd.psd',
    "psd22": '../../data/images/2mb-psd-2.psd',
    "raw2": '../../data/images/2mb-raw copy.raw',
    "tif2": '../../data/images/2mb-tif.tif',
    "mp4": '../../data/images/2mb-video.mp4',
    "ppt": '../../data/images/3DThrust.ppt',
    "jpg39": '../../data/images/39mb-jpeg.jpg',
    "png39": '../../data/images/39mb-png.png',
    "jpg40": '../../data/images/40mb-jpeg.jpg',
    "png40": '../../data/images/40mb-png.png',
    "jpg43": '../../data/images/43mb-jpeg.jpg',
    "png43": '../../data/images/43mb-png.png',
    "jpg45": '../../data/images/45mb-jpeg.jpg',
}

const submit = {
    "yes": 1,
}

const reset = {
    "yes": 1,
}

module.exports = {name, gender, age, story, generatedStory, image, submit, reset};
