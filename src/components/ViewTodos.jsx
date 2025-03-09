import React from "react";

export const ViewTodos = (props) => {
  return props.todosList.map((todo, index) => {
    return (
      <div key={index} className="bg-black p-4 rounded-2xl">
        <h1 className="text-xl text-white">Title: {todo.title}</h1>
        <p className="text-gray-400">Description: {todo.description}</p>
        <p className="text-gray-200 text-sm">Completion Date: {todo.completionDate}</p>
      </div>
    );
  });
};
