var express = require('express');
var _ = require('lodash');
var app = express();

app.get("/", function(req, res) {
    var data = _(0).range(100).map(function() {
        return String.fromCharCode(parseInt(Math.random() * 36 + 64));
    }).value();
    res.send(data);
})

app.listen(3000, function() {
    console.log("start listen at http://192.168.33.19:3000");
})
