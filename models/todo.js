var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    created:{
        type: Date,
        default: Date.now
    },
    completed: {
        type: Boolean,
        default: false
    }
});

var Todo = mongoose.model('Todo',todoSchema);

module.exports = Todo;