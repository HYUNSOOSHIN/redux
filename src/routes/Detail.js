import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function Detail() {
    const {id} = useParams()
    const toDos = useSelector(state => state.toDos)

    return (
        <>
            <h1>{toDos.find(item=> item.id === parseInt(id))?.text}</h1>
            <h5>Created at: {toDos.find(item=> item.id === parseInt(id))?.id}</h5>
        </>
    )
}

export default Detail