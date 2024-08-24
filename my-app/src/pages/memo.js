import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Memo = () => {
    const [isOpen, setIsOpen] = useState([]);
    const [Title, setTitle] = useState("");
    const [Text, setText] = useState("");
    const [Memos, setMemos] = useState([]);

    const showTitle = (e) => {
        setTitle(e.target.value);
    };

    const showText = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setMemos((currentArray) => [{ title: Title, memo: Text }, ...currentArray]);
        setTitle("");
        setText("");
    };

    const removeMemo = (idx) => {
        setMemos((currentArray) => currentArray.filter((_, index) => index !== idx));
    };

    const openMemo = (idx) => {
        setIsOpen((currentArray) => {
            const newArray = [...currentArray];
            newArray[idx] = true;
            return newArray;
        });
    };

    const closeMemo = (idx) => {
        setIsOpen((currentArray) => {
            const newArray = [...currentArray];
            newArray[idx] = false;
            return newArray;
        });
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Title" value={Title} onChange={showTitle} />
                <input type="text" placeholder="Memo" value={Text} onChange={showText} />
                <button type="submit">
                    <span className="material-symbols-outlined">save</span>
                </button>
            </form>
            <ul>
                {Memos.map((item, idx) => (
                    <div className="memoList" key={idx}>
                        <li>
                            {item.title}
                            <button onClick={() => openMemo(idx)}>show memo</button>
                            {isOpen[idx] && (
                                <div className="memo-title">
                                    <h1>{item.title}</h1>
                                    <p>{item.memo}</p>
                                    <button onClick={() => closeMemo(idx)}>close</button>
                                    <button onClick={() => removeMemo(idx)}>remove memo</button>
                                </div>
                            )}
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Memo;
