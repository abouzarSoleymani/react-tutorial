export type TodoItem = {
  id: number
  completed: boolean
  content: string
}

export type TodosState = {
  allIds: number[]
  byIds: Record<number, TodoItem>
}

export type VisibilityFilterState = 'all' | 'completed' | 'incomplete'

export type RootState = {
  todos: TodosState
  visibilityFilter: VisibilityFilterState
}
