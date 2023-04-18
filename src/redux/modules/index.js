import { combineReducers } from "redux";
import toDos from './toDos'

export default combineReducers({
    toDos: toDos.reducer
})