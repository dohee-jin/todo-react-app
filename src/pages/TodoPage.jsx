import { useState } from "react";
import { useTodoStore } from "../store/TodoStore.js";
import TodoItem from "../components/TodoItem.jsx";

const TodoPage = () => {
    const [input, setInput] = useState("");
    const todos = useTodoStore((state) => state.todos);
    const addTodo = useTodoStore((state) => state.addTodo);

    const handleAdd = () => {
        if (!input.trim()) return;
        addTodo(input.trim());
        setInput("");
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>
            <div className="flex gap-2 mb-4">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                    className="flex-1 p-2 border rounded"
                    placeholder="할 일을 입력하세요"
                />
                <button onClick={handleAdd} className="px-4 bg-violet-600 text-white rounded">
                    추가
                </button>
            </div>
            <ul className="space-y-2">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    )
}

export default TodoPage;