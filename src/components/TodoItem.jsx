import React from "react";
import { MdDelete } from "react-icons/md";
import { useTodoStore } from "../store/TodoStore.js";
import { useState } from "react";

const TodoItem = ({todo}) => {
    const {toggleTodo, deleteTodo, editTodo} = useTodoStore();
    const {id, todo: text, done} = todo;

    // 추가 기능 구현 - todo 인라인 편집
    const [isEditing, setIsEditing] = useState(false);
    const [draft, setDraft] = useState(text);

    const handleSave = () => {
        if(draft.trim()) {
            editTodo(id, draft.trim());
        }
        setIsEditing(false);
    };


    return (
        <li className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
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
            <button type="button" onClick={() => deleteTodo(id)} className="ml-auto text-red-500">
                <MdDelete/>
            </button>
        </li>
    )
}

export default TodoItem;