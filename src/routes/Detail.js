import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

function Detail({toDos}) {
    const {id} = useParams()

    return (
        <>
            <h1>{toDos.find(item=> item.id === parseInt(id))?.text}</h1>
            <h5>Created at: {toDos.find(item=> item.id === parseInt(id))?.id}</h5>
        </>
    )
}

function mapStateToProps(state) { 
    return {toDos: state.toDos}
}

export default connect(mapStateToProps)(Detail)