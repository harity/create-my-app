var express = require('express');
const mongoose = require('mongoose')
// 链接mongo 并且使用imooc这个集合
const DB_URL = 'mongodb://localhost:27017/data'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
	console.log('mongo connect success')
})

const User = mongoose.model('user', new mongoose.Schema({
	user:{type:String,require:true},
	age:{type:Number,require:true}
}))

//新增数据 mongod --dbpath "D:\MongoDB\data\db"   mongo  启动
User.create({
	user:'xiaohua',
	age:12
},function(err, doc){
	if (!err) {
		console.log(doc)
	}else{
		console.log(err)
	}
})
/*新建app
User.remove({age:18},function(err,doc){
	console.log(doc)
})
User.update({'user':'xiaoming'},{'$set':{age:26}},function(err,doc){
	console.log(doc)
})*/



var app = express();

app.get('/',function(rep,res){
	res.send('<h1>hello world</h1>')
})
app.get('/data',function(req,res){
	User.findOne({user:'xiaohua'},function(err,doc){
		res.json(doc)
	})
})//npm install -g nodemon  可以实时刷新接口

app.listen(9093,function(){
	console.log('node app is runninng on port:9093')
})