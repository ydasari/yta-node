var express = require('express');
var ejs = require('ejs');
var app = express();

app.use(express.static(__dirname + '/client/js'));
app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/client/views'));
app.use(express.static(__dirname + '/client/images'));

app.set("view engine", 'ejs');
app.engine('html', require('ejs').renderFile);


app.get('/', function(req, res){
	res.render('index.html');
});




app.listen(3000, function(err){
	if(err){
		console.log(err);
	}
	else{
		console.log("app is listening on port 3000");
	}
});