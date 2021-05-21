import { useState } from 'react'

import AddTodo from '../components/AddTodo'
import SingleTodo from '../components/SingleTodo'

const todos = () => {
  const todos = [
    { title: "hello", id: "1", completed: false },
    { title: "hello 2", id: "2", completed: false },
    { title: "hello 3", id: "3", completed: true },
  ];

  return (
    <div className='flex justify-center px-4 mx-auto mt-32 max-w-7xl sm:px-6 lg:px-8'>
      <div className='max-w-3xl mx-auto lg:w-4/12'>
        <h1 className='text-3xl font-bold '>My todos!</h1>

        <AddTodo />

        <div className='mt-3 overflow-hidden bg-white rounded-md shadow'>
          <ul className='divide-y divide-gray-200'>
            {todos.map((todo) => (
              <SingleTodo key={todo.id} todo={todo} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default todos;
