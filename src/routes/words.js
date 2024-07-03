const { Router } = require("express");
const router = Router()
const findHiddenWords = require('../helpers/findWords');

router.post('/find-word', (req, res) => {

    const { Letters, qtyLetter } = req.body
    const resultWords = findHiddenWords(Letters, qtyLetter)
    res.status(200).json({
        data: resultWords
    })
})

module.exports =  router