import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, fetchTestAsyncThunk } from '../store';
import ToDo from '../components/ToDo';

function Home() {
    const dispatch = useDispatch();
    const toDos = useSelector(state => state.toDos)
    const [text, setText] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(add(text))
        setText("")
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={e=>setText(e.target.value)}></input>
            </form>
            <ul>{toDos.map((toDo) => <ToDo key={toDo.id} text={toDo.text} id={toDo.id}/>)}</ul>

            <button onClick={() => {
                dispatch(fetchTestAsyncThunk())
            }}>async thunk</button>
        </>
    )
}

export default Home;