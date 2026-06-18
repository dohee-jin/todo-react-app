import React from "react";

const TodoHeader = ({length}) => {
    // length는 남은 할 일 개수 TodoPage로 부터 받아오는 값

    return (
        <header>
            <h1 className="text-2xl font-bold mb-4">My Task</h1>
            <div className="">할 일 {length}개 남음</div>
        </header>
    )
}

export default TodoHeader;