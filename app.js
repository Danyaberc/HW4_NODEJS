// const express = require('express')
// const app = express()
// const fs = require('fs')

// const mainRouter = require('./routes/main')
// const imgRouter = require('./public/img/imgrouter')

// app.use((req, res) => {
//    if (req.url === '/') {
//       res.end('HOMEPAGE')
//    }
//    else if (req.url === '/img') {
//       res.end(imgRouter)
//    }
//    else if (req.url === '/main') {
//       res.end(mainRouter)
//    }
//    else {
//       res.send(404, 'Page not found!=(')
//    }
// })

// app.listen(3000, () => {
//    console.log('RUN!')
// })

const express = require('express')
const app = express()
const fs = require('fs')

app.listen(3000, () => {
   console.log('RUN')
})

app.use((req, res) => {
   if (req.url === '/') {
      res.end('Hello')
   }
   else if (req.url === '/01') {
      const imgOne = fs.readFileSync('./public/img/01.jpg')
      res.end(imgOne)
   }
   else if (req.url === '/02') {
      const imgTwo = fs.readFileSync('./public/img/02.jpg')
      res.end(imgTwo)
   }
   else if (req.url === '/03') {
      const imgThree = fs.readFileSync('./public/img/03.jpg')
      res.end(imgThree)
   }
   else {
      res.send(404, 'Page not found')
   }
})