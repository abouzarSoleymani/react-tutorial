import './App.css';
import Welcome from './sample01/Welcome';

function App() {
 const array1: any = [
    {name: 'ali', age: 20},
    {name: 'reza', age: 30},
    {name: 'mohammad', age: 35}
  ];
  return (
      <>
      <Welcome prop1= {...array1}/>
      </>
  );
}

export default App;
