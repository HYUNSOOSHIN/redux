import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchTestAsyncThunk = createAsyncThunk('async/fetchTest', async (params, thunkAPI) => {
    try {
        // thunkAPI.dispatch(setLoading(true))
        const result = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        // thunkAPI.dispatch(setLoading(false))
        // thunkAPI.fulfillWithValue(result.data)
        return result.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const toDos = createSlice({
    name: 'toDosReducer',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({text: action.payload, id: Date.now()})
        },
        remove: (state, action) => {
            return state.filter(toDo => toDo.id !== parseInt(action.payload))
        } 
    },
    extraReducers: {
        [fetchTestAsyncThunk.pending]: (state) => {
            console.log('pending')
        },
        [fetchTestAsyncThunk.fulfilled]: (state, action) => {
            console.log('fulfilled', action.payload)
            state.push(...action.payload.map(item => ({...item, text: item.title})))
        },
        [fetchTestAsyncThunk.rejected]: (state, action) => {
            console.log('rejected', action.error)
        },
    }
})

export const { add, remove } = toDos.actions

export default toDos