interface User {
    id: number
    name: string
    age: number
  }

interface Props {
    users: User[]
}

const Welcome13 = ({ items }:) => {
    return (
        <>
         <h3>welcome component</h3>
         <ul>
            {prop1.map((item: User) =>
             <li key={item.id}>{item.name}</li>
             )}
          </ul>
         </>

    )
}

export default Welcome13;



