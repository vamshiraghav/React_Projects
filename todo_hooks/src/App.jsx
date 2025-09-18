import { useState } from 'react'
import './App.css'
import ListTodo from './ListTodo'

function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])
  const [keyCounter, setKeyCounter] = useState(0)
  const [editKey, setEditKey] = useState(0)
  const [isEditing, setIsEditing] = useState(false)

  const addTodo = (todoValue) => {
    if (isEditing) {
      setTodos(todos?.map(todo => todo.key == editKey ? ({ key: todo.key, value: inputValue }) : todo))
      setIsEditing(false)
    } else {
      setTodos([...todos, { value: todoValue, key: keyCounter + 1 }])
      setKeyCounter(keyCounter + 1)
    }
    setInputValue('')
    console.log('todos ' + JSON.stringify(todos))
  }

  const inputOnChange = (value) => {
    setInputValue(value)
  }

  const deleteTodo = (key) => {
    setTodos(todos?.filter(todo => todo.key != key))
    if(key==editKey){
      setInputValue('')
    }
  }

  const EditTodo = (key) => {
    const todo = todos?.filter(todo => todo.key == key)[0]
    setInputValue(todo?.value)
    setEditKey(key)
    setIsEditing(true)
  }

  return (
    <>
      <div>Todo Applicaton - React Hooks</div>
      <div>
        <input style={{width:300,height:30,borderRadius:5,fontSize:20}} type='text' value={inputValue} placeholder='Enter Todo Item ' onChange={(e) => inputOnChange(e.target.value)} />
        <button onClick={() => addTodo(inputValue)}> {!isEditing ? 'Add' : 'Edit'} Todo Item</button>
      </div>
      <div>
        <ListTodo todos={todos} deleteTodo={deleteTodo} EditTodo={EditTodo} />
      </div>

    </>
  )
}

export default App
