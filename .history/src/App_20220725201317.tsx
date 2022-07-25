import './App.css';

function App() {
 const array1: any = [
    {id: 0, name: 'ali', age: 20},
    {id: 1, name: 'reza', age: 30},
    {id: 2, name: 'mohammad', age: 35}
  ];
  return (
      <>
      <Welcome1  prop1= {array1}/>
      </>
  );
}

export default App;
