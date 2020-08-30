const express = require('express')
const app = express()
const port = 3000
var db = require('./db')

app.get('/cocktails', async (req, res) => {
    var cocktails = await db.getCocktails()
    res.send(cocktails)
})

app.get('/stock', async (req, res)=>{
    var stock = await db.getStock()
    res.send(stock)
})

app.post('/stock', async (req, res)=>{
    var response = await db.addStock(req.body)
    res.send(response)
})

app.put('/stock', async (req, res)=>{
    var response = await db.editStock(req.body)
    res.send(response)
})




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app