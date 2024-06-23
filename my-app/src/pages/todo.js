import React from "react";
import { useState } from "react";

const TodoList = () => {
    const [text, setText] = useState("")
    const [Todos, setTodos] = useState([])

    const showTodo = (e) => {
        setText(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (text.length < 15) setTodos((currentArray) => [text, ...currentArray])
        setText("")
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="할 일을 입력해주세요" onChange={showTodo} value={text}></input>
                <button>
                    <span className="material-symbols-outlined">add</span>
                </button>
            </form>
            <ul>
                <li>test</li>
                {Todos.map((item, idx) => {
                    return <li>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default TodoList