var express = require('express')
var app = express()

app.get('/', function(req, res) {
    res.send('taxApi')
})

const PORT = 8088;
app.listen(PORT, () => {
    console.log(`API running in port ${PORT}`)
})