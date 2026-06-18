import {create} from "zustand/react";

// todo 상태 저장소 생성
export const useTodoStore = create((set) => ({
    // 전역 관리할 상태값 배치
    todos: [];

    // todo 상태를 변경할 액션함수 배치
    // set 함수로 상태값을 변경할 수 있음
    // 콜백의 파라미터 state는 이전 상태값 모음 객체를 의미한다.
    // 여기서는 todos 배열을 의미
    addTodo: (title) => set((state) => ({
        todos: [...state.todos, {
            id: Date.now(),
            title: title,
            done: false
        }]
    })),

    toggleTodo: (id) => set((state) => ({
        todos: state.todos.map((todo) => {
            todo.id === id ? !state.todo.done : todo
        })
    })),

    deleteTodo: (id) => set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id)
    }))
}))