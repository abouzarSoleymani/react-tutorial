interface User {
    id: number
    name: string
    age: number
  }

const Welcome13 = (props: User) => {
    return (
        <>
         <h3>welcome component</h3>
         <ul>
            {props.prop1.map((item: any) =>
             <li key={item.id}>{item.name}</li>
             )}
          </ul>
         </>

    )
}

export default Welcome13;



