const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/test', function(req, res, next) {
    console.log("test successful");
    next();
});

app.post('/add', function (req, res){
    console.log(req.body);
    res.send(req.body.desiredConsultant);
});

app.listen(8080);