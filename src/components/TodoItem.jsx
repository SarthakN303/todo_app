import './CSS/TodoItem.css'
import checked from '../Assets/tick.png'
import unchecked from '../Assets/not_tick.png'
import cross from '../Assets/cross.png'

const TodoItem = ({ todo, setTodos }) => {
  const deleteTodo = (no) => {
    let data = JSON.parse(localStorage.getItem('todo'))

    data = data.filter((todo) => todo.no !== no)
    setTodos(data)
  }
  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem('todo'))

    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === '') {
          data[i].display = 'line-through'
        } else {
          data[i].display = ''
        }
        break
      }
    }
    setTodos(data)
  }
  return (
    <div className="todo-items">
      <div
        className={`todo-items-container ${todo.display}`}
        onClick={() => toggle(todo.no)}
      >
        {todo.display === '' ? (
          <img src={unchecked} alt="" />
        ) : (
          <img src={checked} alt="" />
        )}

        <div className="todo-items-text">{todo.text}</div>
      </div>
      <img
        onClick={() => deleteTodo(todo.no)}
        className="todo-cross-icon"
        src={cross}
        alt=""
      />
    </div>
  )
}
export default TodoItem
