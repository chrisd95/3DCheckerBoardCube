const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/p5.min.js',(req, res) =>res.sendfile('node_modules/p5/lib/p5.min.js'))
  .get('/checkerBoard.js',(req, res) => res.sendfile('views/pages/checkerBoard.js'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
