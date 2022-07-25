interface User {
    id: number
    name: string
    age: number
  }

interface Props {
    items: Item[]
}

const Welcome13 = ({ items }: { items: Item[] }) => {
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



