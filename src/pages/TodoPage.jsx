import { useState } from "react";
import { useTodoStore } from "../store/TodoStore.js";
import TodoItem from "../components/TodoItem.jsx";
import AddTodo from "../components/AddTodo.jsx";

const TodoPage = () => {

    const todos = useTodoStore((state) => state.todos);

    return (
        // addtodo 컴포넌트로 변경
        <>
            <h1 className="text-2xl font-bold mb-4">My Task</h1>
            <div>
                <AddTodo />
                <ul className="space-y-3">
                    {todos.length > 0 ? (
                        todos.map((todo) => (
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