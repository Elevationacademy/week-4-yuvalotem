// const http = require('http')

// const server = http.createServer(function (request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/plain' })
//     response.write("Hello, I'm yuval")
//     response.end();
// })

// const port = 3000
// server.listen(port, function () {
//     console.log(`Node server created at port ${port}`)
// })

const express = require('express')
const app = express()
// const users = {
//     tilda: "You've done a wonderful job",
//     riva: "You need to improve your form, but good perseverance",
//     jeremy: "You're incredible"
// }

// app.get('/', function (request, response) {
//     console.log("Someone has come into the server. Brace yourselves.")
//     response.send("Ending the cycle, thanks for visiting")
// })

// app.get('/maps', function (request, response) {
//     response.send("Here's some stuff related to maps")
// })

// app.get('/shoobi', function (request, response) {
//     response.send("This here is the shoobi *route*")
// })

// app.get('/life', function (request, response) {
//     response.send("42")
// })

// app.get('/landing/:username', function (request, response) {
//     response.send(`Hi there, ${request.params.username}`)
// })

// app.get('/users/:userId', function (request, response) {
//     response.send(users[request.params.userId])
// })

// app.get('/routeWithOptionalParameters', (request, response) => {
//     let params = request.query
//     response.send(params)
// })

// app.get('/details', (request, response) => {
//     let params = request.query
//     console.log(params.city);
//     response.send(params)
// })

const path = require('path')
app.use(express.static(path.join(__dirname, 'dist')))

const port = 3000
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})