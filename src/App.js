import TodoList from './TodoList';
import React, { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([{ id: 1, name:'Todo 1', complete: true }])

  return (
    <>
    <TodoList todos={todos}/>
    <input type="text"></input>
    <button>Add Todo</button>
    <button>Clear Complete</button>
    <div>0 left to do</div>
    </>
    
  )
   
}

export default App;
