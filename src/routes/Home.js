import React, { useState } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store';
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
    return {toDos: state}
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: (text) => dispatch(actionCreators.addToDo(text))
    }
}   

export default connect(mapStateToProps, mapDispatchToProps)(Home);