const money = 200
$('body').append(`<div>${money}</div>`)

$('#btn').on('click', function () {
    const input = $('#inp').val()
    $.get(`/priceCheck/${input}`, function (data) {
        if (data.price <= money) {
            $.get(`/buy/${input}`, function (data) {
                $('body').append(`<div>Congratulations, you've just bought ${data.name} for ${data.price}. There are ${data.inventory} left now in the store.</div>`)
            })
        } else {
            $('body').append('Go to work')
        }
    })
})

// $('#buy').on('click', function(){
//     const input = $('#buy-input').val()
//     $.get(`/buy/${input}`, function(data){
//         $('body').append(`<div>Congratulations, you've just bought ${data.name} for ${data.price}. There are ${data.inventory} left now in the store.</div>`)
//     })
// })

let  price 
$.get(`/priceCheck/chair`, function (data) {
    price = data.price
})
const timer = setInterval(function () {
    $.get(`/priceCheck/chair`, function (data) {
        if (data.price < price) {
            $.get(`/buy/chair`, function (data) {
                console.log("bought chair for less")
                clearInterval(timer)
            })
        } else {
            console.log("still waiting for a price drop...")
        }
    })
}, 3000)