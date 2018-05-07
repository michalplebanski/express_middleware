var express = require('express');

var app = express();

app.use('/store', function(req, res, next) {
	console.log('Jestem pośrednikiem przy żądaniu /store');
	next();
});

app.get('/store', function(req, res) {
	res.send('To jest sklep');
});

app.get('/', function(req, res) {
	res.send('hello');
});

app.listen(3000);

app.use(function(req, res, next) {
	res.status(404).send('Nie mogliśmy odnaleść tego, czego szukasz');
});
