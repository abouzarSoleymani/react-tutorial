function Welcome({props: any) {
    return (
        <>
         <h3>welcome component</h3>
         <ul>
            {props.prop}
          </ul>
         </>

    )
}

export default Welcome;