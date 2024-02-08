import { useState } from 'react'
import './CSS/Todo.css'
import { useRef } from 'react'
import { useEffect } from 'react'
import TodoItem from './TodoItem'

let count = 0
const Todo = () => {
  const [todos, setTodos] = useState([])
  const inputRef = useRef(null)

  const addTodo = () => {
    setTodos([
      ...todos,
      { no: count++, text: inputRef.current.value, display: '' },
    ])
    inputRef.current.value = ''
    localStorage.setItem('todo_count', count)
  }

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todo')))
    count = localStorage.getItem('todo_count')
  }, [])

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem('todo', JSON.stringify(todos))
    }, 100)
  }, [todos])
  return (
    <div className="todo">
      <div className="todo-header">TO-DO App</div>
      <div className="todo-add">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add Your Task"
          className="todo-input"
        />
        <div onClick={addTodo} className="todo-add-btn">
          Add
        </div>
      </div>
      <div className="todo-list">
        {todos.map((todo, index) => {
          return <TodoItem todo={todo} setTodos={setTodos} key={index} />
        })}
      </div>
    </div>
  )
}
export default Todo
