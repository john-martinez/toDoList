var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var Todo = require("./routes/todo");
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', function(req,res){
    res.send("ROOT ROUTE");
});


// TODO routes
app.use('/api/todos', Todo);



app.listen(port, process.env.IP, function(){
    console.log("Listening to port: " + port);
});