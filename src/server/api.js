const express = require('express')
const app = express()
const port = 3000
var db = require('./db')

app.get('/', async (req, res) => {
    var cocktails = await db.getCocktails()
    res.send(cocktails)
    // res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app