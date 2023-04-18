import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/modules/toDos'
import { Link } from 'react-router-dom'

function ToDo({text, id}) {
    const dispatch = useDispatch();

    return (<li><Link to={`/${id}`}>{text}</Link> <button onClick={()=>dispatch(remove(id))}>Del</button></li>)
}

export default ToDo