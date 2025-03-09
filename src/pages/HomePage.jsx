import React, { useState } from 'react'
import { CreateTodo } from '../components/CreateTodo'

export const HomePage = () => {

  const [todosList, setTodosList] = useState([]);

  const handleAddToDoList = (todoTask) => {
    setTodosList([...todosList, todoTask]);
    console.log(todosList)
  }

  return (
    <div>
        <CreateTodo addTodoList={handleAddToDoList} />
    </div>
  )
}
