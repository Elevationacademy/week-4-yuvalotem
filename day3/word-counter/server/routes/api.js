const express = require("express")
const router = express.Router()
const validator = require('validator');

const wordCounter = {
    hello: 6,
    hi: 1,
    yuval: 2,
    king: 3,
    dannnn: 7,
    yooo: 10,
    yyy: 5,
    no: 8,
    goodJob: 200
}

router.get('/sanity', function (req, res) {
    res.send(wordCounter)
})

router.get('/word/:word', function (req, res) {
    const word = req.params.word
    if (wordCounter[word]) {
        res.send({ count: wordCounter[word] })
    } else {
        res.send({ count: 0 })
    }
})

router.post('/word', function (req, res) {
    let word = req.body.word
    word = validator.blacklist(word, '\!@#$%^&*()./,"').toLowerCase()
    if (wordCounter[word]) {
        wordCounter[word]++
    } else {
        wordCounter[word] = 1
    }
    res.send({ text: word, currentCount: wordCounter[word] })
})


router.post('/word/:sentence', function (req, res) {
    let words = req.params.sentence.split(" ")
    let numNewWords = 0
    let numOldWords = 0
    words = words.map(w => w = validator.blacklist(w, '\!@#$%^&*()./,"').toLowerCase())
    words.forEach(w => {
        if (wordCounter[w]) {
            wordCounter[w]++
            numOldWords++
        } else {
            wordCounter[w] = 1
            numNewWords++
        }
    });

    res.send({ text: `Added ${numNewWords} words, ${numOldWords} already existed`, currentCount: -1 })
})

router.get('/total', function (req, res) {
    let sum = 0
    for (let i in wordCounter) {
        sum += wordCounter[i]
    }
    res.send({ text: "Total count", count: { sum } })
})

router.get('/popular', function (req, res) {
    let word
    let count
    for (let i in wordCounter) {
        if (count == undefined) {
            count = wordCounter[i]
            word = i
        } else {
            if (wordCounter[i] > count) {
                count = wordCounter[i]
                word = i
            }
        }
    }
    res.send({ text: { word }, count: { count } })
})

router.get('/ranking', function (req, res) {
    const top = []
    for (let i in wordCounter) {
        if (top[4] == undefined) {
            top.push({[i] : wordCounter[i], count: wordCounter[i]})
            top.sort((a, b) => a.count - b.count);
        }else {
            for(let j = 0; j < 5; j++){
                if(top[j].count < wordCounter[i]){
                    top[j] = {[i] : wordCounter[i], count: wordCounter[i]}
                    top.sort((a, b) => a.count - b.count);
                    j = 6
                }
            }
        }
    }
    top.forEach(w => delete w.count)
    res.send(top)
})

module.exports = router