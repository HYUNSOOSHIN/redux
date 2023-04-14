import React, { useState } from 'react'
import { connect } from 'react-redux'
import { add } from '../store';
import ToDo from '../components/ToDo';

function Home(props) {
    const {toDos, addTodo} = props;
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        addTodo(text)
        setText("")
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={e=>setText(e.target.value)}></input>
            </form>
            <ul>{toDos.map((toDo) => <ToDo key={toDo.id} text={toDo.text} id={toDo.id}/>)}</ul>
        </>
    )
}

function mapStateToProps(state) {
    return {toDos: state.toDos}
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: (text) => dispatch(add(text))
    }
}   

export default connect(mapStateToProps, mapDispatchToProps)(Home);