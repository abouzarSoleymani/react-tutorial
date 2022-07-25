interface User {
    id: number
    name: string
    age: number
  }

const Welcome13 = ({prop1}: User[]) => {
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



