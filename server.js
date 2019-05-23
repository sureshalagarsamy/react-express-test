var express = require('express');
var app = express();
var PORT = process.env.PORT || 5000;
// app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile('build/index.html', { root: __dirname });
 });

app.listen(PORT, function(req, res) {
    console.log('am listening...');
});