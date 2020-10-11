const express = require('express')
const app = express()
// const port = process.env.PORT || 8000
var db = require('./db')

console.log('configuring api')

app.get('/cocktails', async (req, res) => {
    var cocktails = await db.getCocktails()
    res.send(cocktails)
})

app.post('/cocktails', async (req, res)=>{
    try {
        console.log('req body', req.body)
        try{
            await db.saveCocktail(req.body)
        } catch(e){
            console.log(`didn't save cocktails `, e)
            return res.status(500).send(e)
        }
        return res.sendStatus(200)
    } catch(e){
        return res.status(500).send({
            error: e
        })
    }
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




// app.listen(port, () => {
//     console.log(process.env)
//     console.log(`Example app listening at http://localhost:${port}`)
// })

module.exports = app