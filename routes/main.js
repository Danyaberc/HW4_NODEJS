const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
   res.end('this main page')
})

module.exports = router