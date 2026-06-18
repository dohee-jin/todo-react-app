import React from "react";
import useTodoStore from "../store/TodoStore.js";

const TodoItem = ({todo}) => {
    const {toggleTodo, deleteTodo} = useTodoStore();
    const {id, todo, done} = todo;

    return (
        <li className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
            <input type="checkbox"
                   checked={done}
                   onChange={() => toggleTodo(id)}
            />
            <span className={done ? "text-gray-400 line-through" : "text-gray-800"}>
                {todo}
            </span>
            <button type="button" onClick={() => deleteTodo(id)} className="ml-auto text-red-500">
                <MdDelete />
            </button>
        </li>
    )
}

export default TodoItem;