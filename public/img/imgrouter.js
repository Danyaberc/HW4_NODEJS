const express = require('express')
const fs = require('fs')
const router = express.Router()

const imgOne = fs.readFileSync('./public/img/01.jpg')

router.get('/', (req, res) => {
   res.end(imgOne)
})

module.exports = router;
