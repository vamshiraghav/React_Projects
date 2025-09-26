import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import Todo from './Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>Todo Application - React Redux</div>
      <div>
        <Counter />
        <Todo />
      </div>
    </>
  )
}

export default App


