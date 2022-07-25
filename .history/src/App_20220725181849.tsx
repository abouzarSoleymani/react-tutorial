import './App.css';
import Welcome from './sample01/Welcome';

function App() {
 const array1: any = [
    {id: 0, name: 'ali', age: 20},
    {id: 1, name: 'reza', age: 30},
    {id: 2, name: 'mohammad', age: 35}
  ];
  return (
      <>
      <Welcome key =  prop1= {array1}/>
      </>
  );
}

export default App;
