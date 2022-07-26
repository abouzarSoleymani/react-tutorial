

const Welcome13 = () => (
  <>
    <h3>welcome component</h3>
    <ul>
      {users.map((item: User) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  </>
)

export default Welcome13
