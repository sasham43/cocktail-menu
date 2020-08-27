var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database(':cocktails:', err=>{
    console.log('database opened:', err)
})


function createTables(){
    db.serialize(()=>{
        db.run('CREATE TABLE IF NOT EXISTS cocktails (id INTEGER PRIMARY KEY, name TEXT);', tableCreate)
    
        db.run('CREATE TABLE IF NOT EXISTS ingredients (id INTEGER PRIMARY KEY, cocktail_id INTEGER, parts REAL, stock_id INTEGER);', tableCreate)
    
        db.run('CREATE TABLE IF NOT EXISTS stock (id INTEGER PRIMARY KEY, name TEXT, type TEXT, in_stock BOOLEAN);', tableCreate)
    
        db.run(`CREATE VIEW IF NOT EXISTS vw_cocktails AS 
        SELECT 
            c.id, 
            c.name,
            json_group_array(json_object('parts', i.parts, 'name', s.type)) as ingredients
        FROM cocktails c 
        JOIN ingredients i ON i.cocktail_id = c.id 
        JOIN stock s ON s.id = i.stock_id
        GROUP BY c.id, c.name
        ;`, tableCreate)
    })

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

    return response
}

async function getCocktails(){
    const response = await queryDatabase("SELECT * FROM vw_cocktails;")

    console.log('response:', response)

    return response.map(parseCocktails)
}

function queryDatabase(query, params={}){
    return new Promise((resolve, reject)=>{
        db.all(query, params, (err, data)=>{
            if(err)
                return reject(err)

            // console.log('data', data)
            resolve(data)
        })
    })
}




// setup
createTables()

module.exports = {
    getCocktails,
    getStock,
}
