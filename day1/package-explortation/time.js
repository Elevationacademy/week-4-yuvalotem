// let timeNow = new Date()
// console.log(timeNow)
// const moment = require('moment')
// let formattedTimeNow = moment().format("MMMM Do, YYYY")
// console.log(formattedTimeNow) //January 3rd, 2017


const urllib = require('urllib')

urllib.request('http://www.omdbapi.com/?apikey=8b9daa76&t=the-lion-king', function(err, response){
    const year =   JSON.parse(response.toString()).Released
    console.log(year)
})
// http://www.omdbapi.com/?i=tt3896198&apikey=8b9daa76
// $.ajax({
//     method: 'GET',
//     URL: "http://data.nba.net/10s/prod/v1/2016/players.json",
//     success: function (data) {
//         console.log(data);
//     },
//     error: function (xhr, text, error) {
//         console.log(text);
//     }
// })
