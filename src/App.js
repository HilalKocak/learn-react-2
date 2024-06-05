import TodoList from './TodoList';
import React, { useState } from 'react'

function App() {
  const [todos, setTodos] = useState(['To do 1', ' To do 2'])

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
