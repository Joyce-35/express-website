//jshint esversion:6


const express = require("express")


const app = express()
app.use(express.static('public'))

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.get("/about", function (req, res) {
    res.sendFile(__dirname + "/about.html")
})
app.put('/contact', function (req, res) {
    res.sendFile(__dirname + "/contact.html")
})
app.get("/service", function (req, res) {
    res.sendFile(__dirname + "/services.html")
})



app.listen(3000, function () {
    console.log("server started on poer 3000")
})