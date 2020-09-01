const express = require("express")
const api = require('./server/routes/api')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', api)


const port = 3000
app.listen(port, function(){
    console.log(`server is running at port: ${port}`);
})











// const express = require('express')
// const bodyParser = require('body-parser')

// const app = express()
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

// app.get('/sanity', function (req, res) {
//     res.send("Server up and running")
// })

// app.post('/test', function (req, res) {
//     console.log("Someone is posting!")
//     res.send("Thanks for the post, here's a potatoe.")
// })

// app.post('/testData', function (req, res) {
//     console.log(req.body)
//     res.end()
// })

// const port = 3000
// app.listen(port, function () {
//     console.log(`Server running on ${port}`)
// })