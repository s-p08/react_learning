import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Card from './component/card';
function App() {
  const [count, setCount] = useState(0); // remove if unused
  let myobj={
    username:"shivam",
    age:21
  }
  let newArr=[1,2,3]

  return (
    <>
<h1 className='bg bg-green-500 text-black p-4 rounded mb-4'>TailwindCSS</h1>
    <Card username="shivam"/>
    <Card username="prakash"/>
    </>
  );
}

export default App;
