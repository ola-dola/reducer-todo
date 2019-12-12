import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({todos}) {
  return (
    <div>
      {
        todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} />
        ))
      }
    </div>
  )
}
