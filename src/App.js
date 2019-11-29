import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState("Ahmed")
  const [age, setAge] = useState(10)

  const increment = () => {
    setAge(age + 1)
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log('use effect called');

  }, [age]);

  
  // [] empty means component unmount
  useEffect(() => {
    return () => {
      console.log('component unmounted');
    }
  }, []);



  return (
    <div className="App">
      <h1>React Hooks</h1>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <button onClick={() => setName("Kashaf")}>Change Name</button>
      <button onClick={() => increment()}>Icrement age</button>
    </div >
  );
}

export default App;
