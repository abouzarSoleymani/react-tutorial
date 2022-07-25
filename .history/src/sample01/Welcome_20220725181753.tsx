function Welcome(props: any) {
    return (
        <>
         <h3>welcome component</h3>
         <ul>
            {props.prop1.map((item: any) =>
             <li>{item.name</li>
             )}
          </ul>
         </>

    )
}

export default Welcome;