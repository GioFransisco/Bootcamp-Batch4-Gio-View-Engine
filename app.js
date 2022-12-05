const express = require('express')
const app = express()
const port = 3000

//information using EJS
app.set('view engine', 'ejs')

// routing untuk path pada browser
app.get('/', (req,res) => {
  res.render('index', {
    nama : "Giovanni Fransisco Toti"
  })
})

//routing untuk path pada browser
app.get('/about', (req, res) => {
  res.render('about')
})

//routing untuk path pada browser
app.get('/contact', (req, res) => {
  res.render('contact')
})



//routing untuk path pada browser
// app.get('/product', (req, res) => {
//   //req.query() disini harus dipanggil dengan mengetikkan parameter seperti input di url
//   //contoh parameter dengan kasus dibawah : http://localhost:3000/product?id=1&barang=shoes
//   res.send(`product id : ${req.query.id} <br> category id : ${req.query.barang}`)
// })

app.use('/', (req, res) => {
  res.status(404)
  res.send('page not found')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  