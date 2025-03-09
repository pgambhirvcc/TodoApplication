import React, { useState } from 'react'
import { CreateTodo } from '../components/CreateTodo'
import { ViewTodos } from '../components/ViewTodos';

export const HomePage = () => {

  const [todosList, setTodosList] = useState([]);

  const handleAddToDoList = (todoTask) => {
    setTodosList([...todosList, todoTask]);
    console.log(todosList)
  }

  return (
    <div className='flex gap-4 justify-center items-center bg-gray-300'>
        <CreateTodo addTodoList={handleAddToDoList} />
        <div className='flex flex-col gap-4 overflow-y-auto h-[400px] w-[400px]'>
          <ViewTodos todosList={todosList} />
        </div>
    </div>
  )
}
