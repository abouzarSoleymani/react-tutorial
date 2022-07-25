const Welcome = (props: any) => {
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

export default Welcome;


// function Welcome1(props: any){
//     return (
//         <>
//         </>
//     )
// }

// export default Welcome1;


// export default function Welcome2() {
//     return(
//         <>
//         </>
//     )
// }


interface Props {
    todo: Todo
  }


const Item: React.FC<Props> = ({ todo }) => {
}