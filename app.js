var express = require('express');

var app = express();

var routes = require('./routes/index');

app.use('/',routes);

app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function () {
	console.log("app started");
});
