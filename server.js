var express = require('express');
var app = express();
// app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile('public/index.html', { root: __dirname });
 });

//  app.set('view engine', 'ejs');

app.listen(5000);