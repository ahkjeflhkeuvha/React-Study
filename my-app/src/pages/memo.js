import React, {useState} from "react";
import styled from 'styled-components';

const Memo = () => {
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

    const removeMemo = (idx) => {
        setMemos((currentArray) => currentArray.filter((item, index) => index !== idx))
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
                                {item.text}
                            </li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default Memo;