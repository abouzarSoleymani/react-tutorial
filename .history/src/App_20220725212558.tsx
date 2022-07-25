import './App.css';
import Welcome13 from './function-components/Welcome13';

function App() {
  const userList: any = [
    { id: 0, name: 'ali', age: 20 },
    { id: 1, name: 'reza', age: 30 },
    { id: 2, name: 'mohammad', age: 35 },
  ];
  return (
    <Welcome13 users={userList} />
  );
}

export default App;
