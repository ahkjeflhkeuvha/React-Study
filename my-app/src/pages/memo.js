import React, {useState} from "react";
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom'

const Memo = () => {
    const navigate = useNavigate();
    const [isOpen, SetIsOpen] = useState(false);
    const [Title, setTitle] = useState("");
    const [Text, setText] = useState("");
    const [Memos, setMemos] = useState([]);

    const showTitle = (e) => {
        setTitle(e.target.value);
    }

    const showText = (e) => {
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setMemos((currentArray) => [{title : Title, memo : Text}, ...currentArray]);
        setTitle("")
        setText("")
        console.log(Memos);
    }

    const showMemo = (idx) => {
        navigate(`/memo{idx}`)
    }

    const removeMemo = (idx) => {
        setMemos((currentArray) => currentArray.filter((item, index) => index !== idx))
        console.log(Memos)
    }

    const openMemo = () => {
        SetIsOpen(true);
    }

    const closeMemo = () => {
        SetIsOpen(false);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Title" onChange={showTitle}></input>
                <input type="text" placeholder="Memo" onChange={showText}></input>
                <button>
                    <span className="material-symbols-outlined">save</span>
                </button>
            </form>
            <ul>
                {Memos.map((item, idx) => {
                    return (
                        <div className="memoList" key={idx}>
                            <li>
                                {item.title}
                                <button onClick={openMemo}>show memo</button>
                                {isOpen && (
                                    <div className="memo-title">
                                        <h1>{item.title}</h1>
                                        <p>{item.text}</p>
                                        <button onClick={closeMemo}>close</button>
                                        <button onClick={(idx) => removeMemo(idx)}>remove memo</button>
                                    </div>
                                )}
                            </li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default Memo;