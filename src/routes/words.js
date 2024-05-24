const { Router } = require("express");
const router = Router()
const processingWords = require('../helpers/hiddenWords')

router.post('/word', (req, res) => {

    const { Letters, qtyLetter } = req.body

    const words = processingWords(Letters, qtyLetter)

    res.status(200).json({
        data: words
    })
})

module.exports =  router