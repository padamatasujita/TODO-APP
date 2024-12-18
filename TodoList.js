import React from "react";

function TodoList({ todos, removeTodo }) {
  return (
    <ul className="mt-4">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center p-2 border-b"
        >
          <span>{todo.text}</span>
          <button
            onClick={() => removeTodo(todo.id)}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;