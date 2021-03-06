
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var Todo = require("./routes/todo");
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
    res.send("index.html");
});


// TODO routes
app.use('/api/todos', Todo);



app.listen(port, process.env.IP, function(){
    console.log("Listening to port: " + port);
});