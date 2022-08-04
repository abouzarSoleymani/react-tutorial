import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Todo from './Todo'
import { getTodoList } from './redux/actions'
import { getTodosByVisibilityFilter } from './redux/selector'

const TodoList = () => {
  const dispatch = useDispatch()

  const todos = () => {
    return getTodosByVisibilityFilter(state)
  })

  useEffect(() => {
    // initialize by getting the data drom the API
    dispatch(getTodoList())
  }, [dispatch])

  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo, index) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />
          })
        : 'No todos, yay!'}
    </ul>
  )
}

export default TodoList
