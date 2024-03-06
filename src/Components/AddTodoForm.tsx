import React, { useState } from 'react'
import { Todo } from '../types/todo'

// interface AddTodoFormProps {
//     input: string;
//     setInput: React.Dispatch<React.SetStateAction<string>>;
//     addHandler: (e: React.FormEvent) => void
// }

interface AddTodoFormProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

// const AddTodoForm = ({ addHandler, input, setInput }: AddTodoFormProps) => {
const AddTodoForm = ({ todos, setTodos }: AddTodoFormProps) => {

    const [input, setInput] = useState("")


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if(input.trim() === ""){
            return
        }else {
            const newTodos = [{ id: Math.random(), title: input, completed: false }, ...todos]
            setTodos(newTodos)
            localStorage.setItem("todos", JSON.stringify(newTodos))
            setInput("")
        }
        
    }

  return (
    <form className="w-11/12 max-w-[500px] flex items-center justify-center" onSubmit={handleSubmit}>
          <input placeholder="What needs to be done?" className="border-2 border-gray-400 rounded-l-md p-2 w-11/12 grow max-w-[500px]" value={input} onChange={(e)=> setInput(e.target.value)} />
          <button className="bg-green-400 text-white border-2 border-green-400 hover:bg-green-500 rounded-r-md p-2 transition duration-300 hover:border-green-500" type="submit">Add</button>
    </form>
  )
}

export default AddTodoForm