import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  const [value1,setValue1]=useState(null);
  const [value2,setValue2]=useState(null);
  const [result,setResult]=useState(null);

  return (
    <div className="container">
      Test
    </div>
  );
}

export default App;
