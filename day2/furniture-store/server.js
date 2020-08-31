const express = require("express")
const app = express()
const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

// app.get('/', function(req, res){
//     console.log('someone just entered our server');
//     res.send("Server is up and running smoothly")
// })

app.get('/priceCheck/:name', function(req, res){
    const name = req.params.name
    const item = store.find(i => i.name === name)
    const price = {price: (item.price)}
    res.send(price)
})

app.get('/buy/:name', function(req, res){
    const name = req.params.name
    const item = store.find(i => i.name === name)
    item.inventory--
    res.send(item)
})

app.get('/sale', function(req, res){
    const params = req.query
    if(params.admin === 'true'){
        store.forEach(i => {
            if(i.inventory > 10){
                i.price = i.price/2
            }
        })
    }
    res.send(store)
})

const path = require('path')
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const port = 3000
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})