import React from 'react'
import { useDispatch } from 'react-redux'
import { TodoItem } from './redux/types'

// This is components own props
interface OwnProps {
  todo: TodoItem
}

// The final list of Props
type Props = OwnProps

const Todo = ({ todo }: Props) => {
  const dispatch = useDispatch()
  return (
    <li className="todo-item">
      {todo && todo.completed ? '👌' : '👋'}{' '}
      <span className={`${todo && todo.completed} ? completed: todo-item`}>
        {todo.content}
      </span>
    </li>
  )
}

export default Todo
