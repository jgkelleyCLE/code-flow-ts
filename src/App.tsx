import { useState, useEffect } from 'react'
import { dummyData } from './data'
import { FlexColumn } from './Components/UI'
import TodoItem from './Components/TodoItem'
import AddTodoForm from './Components/AddTodoForm'

function App() {
  // const [todos, setTodos] = useState(dummyData)
  const [todos, setTodos] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")!) : [])
  const [input, setInput] = useState("")

  const handleToggle = (id: number) => {

    console.log(id)
    const newTodos = todos.map(item => item.id === id ? {...item, completed: !item.completed} : item)
    setTodos(newTodos)
    localStorage.setItem("todos", JSON.stringify(newTodos))
  }

  console.log(todos)

  // const addHandler = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setTodos([...todos, { id: Math.random(), title: input, completed: false }])
  //   setInput("")
  // }

  return (
    <FlexColumn>
      <h1 className="text-3xl font-bold text-center py-6">Your Todos</h1>
        <AddTodoForm todos={todos} setTodos={setTodos} />
      {
        todos.length > 0 ? <p className="text-center text-gray-400 mt-4">Click on the todo to mark it as completed</p> : <p className="text-center text-gray-400 mt-4">No todos yet</p>
      }
      { 
        todos.map(item => (
          <TodoItem key={item.id} item={item} handleToggle={handleToggle} todos={todos} setTodos={setTodos} />
          
        ))
      }
    </FlexColumn>
  )
}

export default App
