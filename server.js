var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var TRAIN_API_KEY = "b5af096f27494b66acff8ce897c3d7c1";
var BUS_API_KEY = "EDBN8TzSKyRbiJJb4T3s4u6XE";

app.get('/', function(req, res) {
	res.send('CTA Bot Webhook root');
});

app.listen(PORT, function() {
	console.log("Express listening on port " + PORT);
});