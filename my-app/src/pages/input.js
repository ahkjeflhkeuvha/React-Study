import {React, useState} from "react";

const Input = () => {
    const [text, setText] = useState("")

    const changeText = (e) => {
        setText(e.target.value)
    }

    return (
        <div>
            <input type="text" value={text} onChange={changeText}></input>
            <br />
            <p>{text}</p>
        </div>
    )
}

export default Input