const Words = require('../models/Words');
const Dictionary = require("../models/Dictionary");

const findHiddenWords = (Letters, qtyLetter) => {
    const dictionary = new Dictionary()
    const words = new Words(Letters, qtyLetter, dictionary)
    return processingWords = words.processingWords()
}

module.exports = findHiddenWords