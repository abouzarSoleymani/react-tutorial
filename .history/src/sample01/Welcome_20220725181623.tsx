function Welcome(props: any) {
    return (
        <>
         <h3>welcome component</h3>
         <ul>
            {props.prop1.map(item => item.name)}
          </ul>
         </>

    )
}

export default Welcome;