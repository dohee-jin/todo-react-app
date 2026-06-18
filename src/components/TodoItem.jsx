import React from "react";
import { MdDelete } from "react-icons/md";
import { useTodoStore } from "../store/TodoStore.js";
import { useState } from "react";

const TodoItem = ({todo}) => {
    const {toggleTodo, deleteTodo, editTodo, setPriority} = useTodoStore();
    const {id, todo: text, done, priority} = todo;

    // 추가 기능 구현 - todo 인라인 편집
    const [isEditing, setIsEditing] = useState(false);
    const [draft, setDraft] = useState(text);

    const handleSave = () => {
        if(draft.trim()) {
            editTodo(id, draft.trim());
        }
        setIsEditing(false);
    };

    // 추가 기능 구현 - 우선 순위 설정
    const priorityStyle = {
        high: 'border-l-4 border-l-red-500',
        medium: 'border-l-4 border-l-yellow-500',
        low: 'border-l-4 border-l-green-500',
    }

    return (
        <li className={`flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow ${priorityStyle[priority]}`}>
            <input type="checkbox"
                   checked={done}
                   onChange={() => toggleTodo(id)}
            />
            {/* todo 인라인 편집 구현 */}
            {isEditing ?
                <input autoFocus
                       value={draft}
                       onChange={(e) => setDraft(e.target.value)}
                       onBlur={handleSave}
                       onKeyDown={(e) => {
                           if (e.key == "Enter") handleSave();
                           if (e.key === "Escape") {
                               setDraft(text);
                               setIsEditing(false);
                           }
                       }}
                       className="flex-1 p-1 border rounded"
                />
                :
                <span
                    onDoubleClick={() => setIsEditing(true)}
                    className={done ? "text-gray-400 line-through" : "text-gray-800"}>
                {text}
                </span>

            }
            {/* 우선순위 설정 구현*/}
            <select
                value={priority}
                onChange={(e) => setPriority(id, e.target.value)}
                className="text-xs border-none rounded px-1 py-0.5 ml-auto"
            >
                <option value="high">높음</option>
                <option value="medium">보통</option>
                <option value="low">낮음</option>
            </select>
            <button type="button" onClick={() => deleteTodo(id)} className="text-red-500">
                <MdDelete/>
            </button>
        </li>
    )
}

export default TodoItem;