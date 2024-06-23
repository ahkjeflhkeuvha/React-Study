import React from "react";
import { useState } from "react";
import styled from 'styled-components';

const TodoList = () => {
    const [text, setText] = useState("")
    const [Todos, setTodos] = useState([])
    const [isChecked, setChecked] = useState(false)

    const showTodo = (e) => {
        setText(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (text.length < 15) setTodos((currentArray) => [text, ...currentArray])
        setText("")
    }

    const removeTodo = (idx) => {
        setTodos((currentArray) => [...currentArray.splice(idx, 1), ...currentArray])
        console.log(idx)
    }

    const Checked = (e) => {
        const 
        if (isChecked === true) {
            setChecked(false)
            e.target.style.textDecoration = 'line-through'
        }
        else {
            setChecked(true)
            e.target.style.textDecoration = 'line-through'
        }
        console.log(e.target)
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
                {Todos.map((item, idx) => {
                    return (<div className="todoList">
                        <input type="checkbox" value={isChecked} onClick={Checked} className="checkbox-div"></input>
                        <li key={idx}>{item}
                            <button onClick={() => removeTodo(idx)}>제거하기</button>
                        </li>
                    </div>

                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList