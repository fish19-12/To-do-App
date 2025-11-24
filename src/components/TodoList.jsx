import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, editTodo }) {
  return (
    <div className="w-full max-w-md space-y-4">
      {todos.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks yet. Add one!</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
