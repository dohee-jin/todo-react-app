import { useState } from "react";
import { useTodoStore } from "../store/TodoStore.js";
import TodoItem from "../components/TodoItem.jsx";
import TodoInput from "../components/TodoInput.jsx";
import TodoHeader from "../components/TodoHeader.jsx";

const TodoPage = () => {

    const todos = useTodoStore((state) => state.todos);
    const order = {
        high: 0,
        medium: 1,
        low: 2
    }
    const sortedTodos = [...todos].sort(
        (a, b) => order[a.priority] - order[b.priority]
    );

    return (
        // addtodo 컴포넌트로 변경
        <>
            <TodoHeader length={todos.filter(todo => todo.done !== true).length}/>
            <div>
                <TodoInput />
                <ul className="space-y-3">
                    {todos.length > 0 ? (
                        sortedTodos.map((todo) => (
                            <TodoItem key={todo.id} todo={todo}/>
                        ))
                        ) : <p className='text-center text-gray-400 py-10'>등록된 할 일이 없습니다.</p>
                    }
                </ul>
            </div>
        </>
    )
}

export default TodoPage;