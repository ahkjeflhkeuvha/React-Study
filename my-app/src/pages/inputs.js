import { React, useState } from 'react'

const Inputs = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        tel: ""
    })

    const { name, email, tel } = inputs

    const changeItem = (e) => {
        const value = e.target.value
        const id = e.target.id

        setInputs({
            ...inputs, // 깊은 복사 -> inputs[name] = name 과 같은 얕은 복사는 안 됨
            [id]: value
        })
    }

    return (
        <div>
            <div>
                <label>이름</label>
                <input type='text' id='name' value={name} onChange={changeItem}></input>
            </div>
            <div>
                <label>이메일</label>
                <input type='email' id='email' value={email} onChange={changeItem}></input>
            </div>
            <div>
                <label>전화번호</label>
                <input type='tel' id='tel' value={tel} onChange={changeItem}></input>
            </div>

            <p>Name : {name}</p>
            <p>Email : {email}</p>
            <p>Tel : {tel}</p>
        </div>
    )
}

export default Inputs