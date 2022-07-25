function Welcome(props) {
    return ( <h3>welcome component</h3>
    <ul>
        {props.array1.map(item => {
        <li>{item.name}</li>
        })}
    </ul>
}
}

export default Welcome;