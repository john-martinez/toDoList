var db = require('../models');


exports.showTodos = function(req,res){
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.createTodo = function(req,res){
    db.Todo.create(req.body)
    .then(function(todo){
        res.json(todo);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.showTodo = function(req,res){
    db.Todo.findById(req.params.todoId)
    .then(function(todo){
        res.json(todo);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.updateTodo =  function(req,res){
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then(function(todo){
        res.status(201).json(todo)
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.deleteTodo = function(req,res){
    db.Todo.findOneAndDelete({_id: req.params.todoId})
    .then(function(){
        res.json({message: "The message have been deleted"});
    })
    .catch(function(err){
        res.send(err);
    })
}

module.exports = exports;
