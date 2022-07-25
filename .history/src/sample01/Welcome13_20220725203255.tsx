interface User {
    id: string
    bodyText: string
    completed: boolean
  }

const Welcome13 = (props: any) => {
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



