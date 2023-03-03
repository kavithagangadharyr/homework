const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send("hello world")
});

app.get("/area/:r", (req, res) => {
    var area = 3.14 * req.query.r * req.query.r
    res.send(area)
});



app.get("/areaValue", (req, res) => {
    var area = 3.14 * req.query.r * req.query.r
    
     res.send(String(area))
});


app.get("/primeNumber", (req, res) => {
    const primeOrNot = checkPrime(req.query.r)
    res.send(primeOrNot)
})


const checkPrime = (numbers) => {
    
    for(let n=2; n< numbers; n++) {
        if(numbers %2 == 0) return false;
    }

    
    return numbers > 1
}

app.listen(3000);