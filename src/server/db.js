// var sqlite3 = require('sqlite3').verbose()
// var db = new sqlite3.Database(':cocktails:', err=>{
//     console.log('database opened:', err)
// })

const { Client } = require('pg')
const db = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
})
    ; (async () => {
        await db.connect()
        const res = await db.query('SELECT $1::text as message', ['Hello world!'])
        console.log(res.rows[0].message) // Hello world!
        // await db.end()
    })()


function createTables(){
    // db.serialize(()=>{
        db.query('CREATE TABLE IF NOT EXISTS cocktails (id SERIAL, name TEXT NOT NULL UNIQUE);', tableCreate)
    
        db.query('CREATE TABLE IF NOT EXISTS ingredients (id SERIAL, cocktail_id INTEGER NOT NULL, parts REAL, stock_id INTEGER);', tableCreate)
    
        db.query('CREATE TABLE IF NOT EXISTS stock (id SERIAL, name TEXT, type TEXT NOT NULL, in_stock BOOLEAN);', tableCreate)
    
        db.query(`CREATE VIEW vw_cocktails AS 
        SELECT 
            c.id, 
            c.name,
            json_agg(json_build_object('parts', i.parts, 'name', s.type)) as ingredients
        FROM cocktails c 
        JOIN ingredients i ON i.cocktail_id = c.id 
        JOIN stock s ON s.id = i.stock_id
        GROUP BY c.id, c.name
        ;`, tableCreate)
    // })

    // console.log('tables created')
}

function tableCreate(err, data){
    console.log('table create')
    console.log('err', err)
    console.log('data', data)
}

function parseCocktails(cocktail){
    if(cocktail.ingredients && typeof cocktail.ingredients == 'string'){
        cocktail.ingredients = JSON.parse(cocktail.ingredients)
    }
    return cocktail
}

async function getStock(){
    const response = await queryDatabase("SELECT * FROM stock;")

    console.log('stock', response.rows)

    return response.rows.map(changeBooleans)
}

async function getCocktails(){
    const response = await queryDatabase("SELECT * FROM vw_cocktails;")

    console.log('cocktails:', response.rows)

    return response.rows.map(parseCocktails)
}

async function saveCocktail(cocktail){
    try {
        var new_cocktail = await queryDatabase('INSERT INTO cocktails (name) VALUES ($1) RETURNING id;', [cocktail.name.trim()])

        // var new_cocktail = await queryDatabase('SELECT last_insert_rowid();') // needs to change
        // var new_cocktail = 
        console.log('new cocktail', new_cocktail)

        // if (new_cocktail && new_cocktail.length > 0 && new_cocktail[0]['last_insert_rowid()'] != undefined){
            var new_cocktail_id = new_cocktail.rows[0]['id']
            for (var i in cocktail.ingredients){
                var ingredient = cocktail.ingredients[i]
                // console.log('ing', ingredient)
                console.log('new cocktail id', new_cocktail_id)
                await addIngredient(new_cocktail_id, ingredient)
            }
        // }
    
    } catch(e){
        console.log('oh no', e)
        throw new Error(e)
    }

}

async function addIngredient(cocktail_id, ingredient){
    var stock = await queryDatabase('SELECT id FROM stock WHERE type = $1;', [ingredient.name])
    console.log('stock', stock.rows, ingredient)

    if(stock.rows && stock.rows.length > 0 && stock.rows[0].id != undefined){
        console.log('got stock', stock.rows[0].id)
        await queryDatabase('INSERT INTO ingredients (cocktail_id, stock_id, parts) VALUES ($1, $2, $3);', [cocktail_id, stock.rows[0].id, ingredient.parts])
    } else {
        // insert stock
        var new_stock = await queryDatabase('INSERT INTO stock (type, in_stock) VALUES ($1, false) RETURNING id;', [ingredient.name])
        // var new_stock = await queryDatabase('SELECT last_insert_rowid();')
        console.log('inserted new stock', new_stock)
        // if (new_stock && new_stock.length > 0 && new_stock[0]['last_insert_rowid()'] != undefined) {
            var new_stock_id = new_stock.rows[0]['id']
            await queryDatabase('INSERT INTO ingredients (cocktail_id, stock_id, parts) VALUES ($1, $2, $3);', [cocktail_id, new_stock_id, ingredient.parts])
        // }
    }

}

async function addStock(bottle){
    const response = await queryDatabase("INSERT INTO stock (name, type, in_stock) VALUES ($1, $2, $3);", [bottle.name.trim(), bottle.type.trim(), bottle.in_stock])

    return response
}

async function editStock(bottle){
    const response = await queryDatabase("UPDATE stock SET in_stock = $1 WHERE type = $2;", [bottle.in_stock, bottle.type])

    return response
}

async function deleteCocktail(id){
    await queryDatabase("DELETE FROM ingredients WHERE cocktail_id = $1", [id])
    var response = await queryDatabase("DELETE FROM cocktails WHERE id = $1;", [id])

    return response
}

// function runDatabase(query, params={}){
//     return new Promise((resolve, reject)=>{
//         db.query(query, params, (err, data)=>{
//             if(err)
//                 return reject(err)

//             console.log('run data', data)
//             resolve(data)
//         })
//     })
// }

function queryDatabase(query, params=[]){
    return new Promise((resolve, reject)=>{
        db.query(query, params, (err, data)=>{
            if(err)
                return reject(err)

            // console.log('data', data)
            resolve(data)
        })
    })
}

function changeBooleans(a){
    if(Object.keys(a).includes('in_stock')){
        if(a.in_stock === 1){
            a.in_stock = true
        } 
        if(a.in_stock === 0){
            a.in_stock = false
        }
    }
    return a
}




// setup
createTables()

module.exports = {
    getCocktails,
    getStock,
    addStock,
    editStock,
    saveCocktail,
    deleteCocktail,
}
