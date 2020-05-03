import React, { useState } from 'react';
import './bootstrap.css';
import './index.css';

import { Form } from './components/Form'
import { TodoList } from './components/TodoList'

const TODOS = [
    {id: 0, text: 'First todo item', completed: false},
    {id: 1, text: 'Second todo item', completed: false},
    {id: 2, text: 'Third todo item', completed: true}
]

export const App = () => {

  const [todos, setTodos] = useState(TODOS);

  const addTask = (e) => {
    e.preventDefault();
    
    let newItem = {
        id: todos.length + 1,
        text: e.target.querySelector('input').value,
        completed: false
    };

    if(newItem.text !== '') {
      setTodos([...todos, newItem])
      e.target.querySelector('input').value = ''
    }
  }

  const markComplete = (id) => {
    setTodos( todos.map(item => {
      if(item.id === id) {
        item.completed = !item.completed
      }
        return item
      })
    )
  }

  const deleteTodo = (id) => {
    setTodos( todos.filter(item => item.id !== id) )
  }

  return(      
    <div className="container">
      <h1 className="text-center">To do app</h1>
      <Form 
        todos={todos} 
        addTask={addTask}
      />
      <TodoList 
        todos={todos} 
        markComplete={markComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  )
}