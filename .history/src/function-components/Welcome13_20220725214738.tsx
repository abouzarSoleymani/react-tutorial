interface User {
    id: number
    name: string
    age: number
  }

interface Props {
    users: User[]
}

const Welcome13 = ({ users }: Props) => (
  <>
    <h3>welcome component</h3>
    <ul>

      {users.map((item: User) => <li key={item.id}>{item.name}</li>)}
    </ul>
  </>

);

export default Welcome13;
