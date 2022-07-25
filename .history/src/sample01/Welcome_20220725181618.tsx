function Welcome(props: any) {
    return (
        <>
         <h3>welcome component</h3>
         <ul>
            {props.prop1.map()}
          </ul>
         </>

    )
}

export default Welcome;