angular.module('todoApp', []).controller('TodoCtrl', function($scope) {
    // List of todos	
    $scope.todos = [
        { text: 'Add something to this list', done: false }
    ];

    $scope.getTotalTodos = function() {
        return $scope.todos.length;
    };

    // function to add item to todo list from the form input
    $scope.addTodo = function() {
        $scope.todos.push({ text: $scope.formTodoText, done: false });
        $scope.formTodoText = ''; // clear input field
    };

    // function to clear completed items from todo list
    $scope.clearCompleted = function() {
        $scope.todos = $scope.todos.filter( function (todo) {
        	return !todo.done;
        	});
    };
});
