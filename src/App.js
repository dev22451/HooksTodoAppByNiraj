import React, { useState } from 'react'
import Form from './Components/Form'
import Header from './Components/Header'
import TodosList from './Components/TodosList';
import './App.css'


const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>

        <div >
          <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setTodos} isChecked={isChecked} setIsChecked={setIsChecked} />
        </div>

        <div>
          <TodosList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} setIsChecked={setIsChecked} isChecked={isChecked} />
        </div>
      </div>


    </div>
  )
}

export default App
