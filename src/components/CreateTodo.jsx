/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { PrimaryButton } from './buttons/PrimaryButton';

export const CreateTodo = (props) => {
    const [todoTask, setTodoTask] = useState();

  const handleCreateTask = () => {
    props.addTodoList(todoTask);
  };

  return (
    <div className="h-screen bg-gray-300">
      <form className="flex flex-col gap-4 justify-center items-center h-screen">
        <h1 className="text-xl font-bold">Create your task list</h1>
        <div className="border p-4 rounded-2xl border-gray-400">

          <div className="flex flex-col gap-1">
            <label htmlFor="">Title</label>
            <input
              className="border border-gray-400 rounded p-2"
              type="text"
              placeholder="Enter your Title"
              value={todoTask?.title}
              onChange={(e) =>
                setTodoTask({ ...todoTask, title: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="">Description</label>
            <textarea
              className="border border-gray-400 rounded p-2"
              type="password"
              placeholder="Enter your password"
              value={todoTask?.description}
              onChange={(e) =>
                setTodoTask({ ...todoTask, description: e.target.value })
              }
            />
          </div>

          <div className='flex flex-col gap-1'>
              <label htmlFor="">Completion Date</label>
              <input
              className="border border-gray-400 rounded p-2"
              type="date"
              placeholder="Enter your Completion Date"
              value={todoTask?.completionDate}
              onChange={(e) =>
                setTodoTask({ ...todoTask, completionDate: e.target.value })
              }
            />
          </div>

          <div className="flex justify-center mt-4">
            <PrimaryButton label={"Add Task"} handleOnClick={handleCreateTask} />
          </div>
        </div>
      </form>
    </div>
  );
}
