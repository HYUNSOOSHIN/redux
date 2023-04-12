import { createStore } from 'redux'

const add = document.getElementById('add')
const minus = document.getElementById('minus')
const number = document.querySelector('span')

// store = 데이터를 저장하는 공간
// reducer = 데이터를 변경하는 함수

const countModifier = (count = 0, action) => {
  if(action.type === 'ADD') return count + 1;
  else if(action.type === 'MINUS') return count - 1;
  else return count
}

const countStore = createStore(countModifier) 

const onChange = () => {
  number.innerText = countStore.getState()
}

// 변화를 감지함.
countStore.subscribe(onChange)

const handleAdd = () =>{
  countStore.dispatch({type:'ADD'})
  console.log(countStore.getState())
}

const handleMinus = () => {
  countStore.dispatch({type:'MINUS'})
}

add.addEventListener('click', handleAdd)
minus.addEventListener('click', handleMinus)