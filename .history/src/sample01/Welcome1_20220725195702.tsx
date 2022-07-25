export interface Todo {
    id: string
    bodyText: string
    completed: boolean
  }

interface Props {
    todo: Todo
  }

const Welcome1: React.FC<Props> = ({ todo }) => {
    return(
        <>
        </>
    )
}
export default Item