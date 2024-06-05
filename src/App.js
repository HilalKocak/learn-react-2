import TodoList from './TodoList';
import React, { useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [todos, setTodos] = useState([{ id: 1, name:'Todo 1', complete: true }])
  const todoNameRef = useRef()
  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if(name === '') return 
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })
    console.log(name)
    todoNameRef.current.value = null
  }
  return (
    <>
    <TodoList todos={todos}/>
    <input ref={todoNameRef} type="text"></input>
    <button onClick={handleAddTodo}>Add Todo</button>
    <button>Clear Complete</button>
    <div>0 left to do</div>
    </>
    
  )
   
}

export default App;
