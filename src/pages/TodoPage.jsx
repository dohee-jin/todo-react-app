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

    // 미완료 우선순위 정렬
    const activeTodos = todos
        .filter((t) => !t.done)
        .sort( (a, b) => order[a.priority] - order[b.priority]);

    // 완료된 todo
    const doneTodos = todos.filter((t) => t.done);

    return (
        // addtodo 컴포넌트로 변경
        <>
            <TodoHeader length={todos.filter(todo => todo.done !== true).length}/>
            <div>
                <TodoInput />
                {/* 미완료 todo 및 작성된 todo 없을 때*/}
                <ul className="space-y-3">
                    {todos.length > 0 ? (
                        activeTodos.map((todo) => (
                            <TodoItem key={todo.id} todo={todo}/>
                        ))
                        ) : <p className='text-center text-gray-400 py-10'>등록된 할 일이 없습니다.</p>
                    }
                </ul>
                {/* 완료 todo 있을 때 구분선 + 카운트 + 목록 */}
                {
                    doneTodos.length > 0 && (
                        <>
                            <div className="flex items-center gap-3 my-4">
                                <hr className="flex-1 border-gray-300" />
                                <span className="text-sm text-gray-500 shrink-0">완료된 항목 {doneTodos.length}개</span>
                                <hr className="flex-1 border-gray-300" />
                            </div>
                            <ul className="space-y-2">
                                {doneTodos.map((todo) => (
                                    <TodoItem key={todo.id} todo={todo} />
                                ))}
                            </ul>
                        </>
                    )
                }
            </div>
        </>
    )
}

export default TodoPage;