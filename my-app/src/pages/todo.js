import React, { useState } from "react";
import styled from 'styled-components';

const TodoList = () => {
    const [text, setText] = useState("");
    const [Todos, setTodos] = useState([]);

    const showTodo = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (text.length < 15) {
            setTodos((currentArray) => [{ text: text, checked: false }, ...currentArray]);
        }
        setText("");
    };

    const removeTodo = (idx) => {
        setTodos((currentArray) => currentArray.filter((_, index) => index !== idx));
    };

    const Checked = (idx) => {
        setTodos((currentArray) =>
            currentArray.map((item, index) =>
                index === idx ? { ...item, checked: !item.checked } : item
            )
        );
    };

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
                    return (
                        <div className="todoList" key={idx}>

                            <li style={{ textDecoration: item.checked ? 'line-through' : 'none' }} className="todo-item">
                                <input
                                    type="checkbox"
                                    checked={item.checked}
                                    onChange={() => Checked(idx)}
                                    className="checkbox-div"
                                ></input>
                                {item.text}
                                <button onClick={() => removeTodo(idx)}>제거하기</button>
                            </li>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
};

export default TodoList;
