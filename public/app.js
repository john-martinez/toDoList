/* global $ */
$(document).ready(function(){
    $.getJSON('/api/todos')
    .then(listTodos)
});
function addTodo(todo){
    var newTodo = $("<li class='task'>" + todo.name + " <span> X </span> </li>"); 
    newTodo.data('id', todo._id);
    newTodo.data('completed', todo.completed);
      $('.list').append(newTodo);
      if (todo.completed){
          $('this').addClass('done');
      }
}


function listTodos(todos){
    todos.forEach(function(todo){
      addTodo(todo);
    });

}



// ADD
$('#todoInput').keypress(function(key){
    if (key.which == 13){
        var newData = {name: $('#todoInput').val() };
        $.post('api/todos', newData)
        .then(function(data){
            console.log(data);
            addTodo(data);
        })
        .catch(function(err){
            console.log(err);
        });
        $('#todoInput').val('');
    }
});

// UPDATE
$('.list').on('click', 'li', function(event){
   updateTodo($(this));
 
})

function updateTodo(todo){
    var isDone = todo.data('completed');
    todo.data('completed', !isDone);
    $.ajax({
        method: "PUT",
        url: '/api/todos/' + todo.data('id'),
        data: {completed: !isDone}
    })
    .then(function(data){
        console.log(data);
         todo.toggleClass('done');
    })
    .catch(function(err){
        console.log(err);
    })
    
}

// DELETE
$('.list').on('click', 'span', function(event){
    deleteTodo($(this).parent());
})

function deleteTodo(todo){
    $.ajax({
        method: 'DELETE',
        url: '/api/todos/' + todo.data('id')
    })
    .then(function(data){
        todo.remove();
       
    })
}