var express = require('express');

var app = express();

app.get('/',function(rep,res){
	res.send('<h1>hello world</h1>')
})

app.listen(9093,function(){
	console.log('node app is runninng on port:9093')
})