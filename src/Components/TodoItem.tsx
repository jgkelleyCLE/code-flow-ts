import React from 'react'
import { Todo } from '../types/todo'
import { TodoCard } from './UI';
import { FaTrashAlt } from "react-icons/fa";


interface TodoItemProps {
    item: Todo;
    handleToggle: (id: number, completed: boolean) => void;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem = ({ item, handleToggle, todos, setTodos }: TodoItemProps) => {

   const deleteHandler = (id: number) => {
    const newTodos = todos.filter(item => item.id != id)
        setTodos(newTodos)
        localStorage.setItem("todos", JSON.stringify(newTodos))
   }

  return (
    <TodoCard>
        <input type="checkbox"
        id={`${item.id}`}
        className="w-6 h-6 mr-2"
         checked={item.completed} 
         onChange={(e)=> handleToggle(item.id, e.target.checked)} 
         />
        <label htmlFor={`${item.id}`} className={`${item.completed ? 'line-through' : ""}`} >{item.title}</label>
        <button className="text-gray-500 absolute right-2 hover:text-red-500 transition duration-300" onClick={()=> deleteHandler(item.id)}><FaTrashAlt /></button>
    </TodoCard>
  )
}

export default TodoItem