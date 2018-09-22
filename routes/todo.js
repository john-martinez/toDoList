var express = require('express');
var router = express.Router();
var db = require('../models');
var helpers = require('../helpers/todo');


// showall
router.route('/')
.get(helpers.showTodos)
.post(helpers.createTodo)


// show 
router.route('/:todoId')
.get(helpers.showTodo)
.put(helpers.updateTodo)
.delete(helpers.deleteTodo)



module.exports = router;