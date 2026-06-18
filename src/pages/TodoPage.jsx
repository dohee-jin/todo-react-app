import React from "react";
import TodoItem from "../components/TodoItem.jsx"

const TodoPage = () => {
    <ul className="space-y-2">
        {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
        ))}
    </ul>
}

export default TodoPage;