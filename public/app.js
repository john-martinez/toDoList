/* global $ */
$(document).ready(function(){
    $.getJSON('/api/todos')
    .then(addTodo)
});

function addTodo(todos){
    todos.forEach(function(todo){
      var newTodo = $("<li class='task'>" + todo.name + "</li>");  
      $('.list').append(newTodo);
    });

}