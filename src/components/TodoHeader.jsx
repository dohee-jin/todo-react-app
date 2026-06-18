import React from "react";

const TodoHeader = ({length}) => {
    // length는 남은 할 일 개수 TodoPage로 부터 받아오는 값

    return (
        <header className="flex items-center gap-2 mb-4">
            <h1 className="text-2xl font-bold">My Task</h1>
            <span className="text-sm font-medium bg-orange-600 text-white rounded-full px-3 py-1">
                할 일 {length}개 남음
            </span>
        </header>
    )
}

export default TodoHeader;