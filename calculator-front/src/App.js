import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [value1,setValue1]=useState('');
  const [value2,setValue2]=useState('');
  const [result,setResult]=useState('');
  const [signid,setSign]=useState(1);
  const [items, setItems] = useState([]);//Test
  const [itemName, setItemName] = useState("");//Test
  

  const addItem = event => {
    event.preventDefault();
    setItems([
      ...items,
      {
        id: items.length,
        name: itemName
      }
    ]);
    setItemName("");
  };



useEffect(()=>{
if(value1!='' && value2!='')
{

  axios.get(`https://localhost:5001/api/Calculator/CalculateAction?num1=${value1}&num2=${value2}`).then(res=>setResult(res.data));
  

}


});


const onChange=(event)=>{

  setValue1(event.target.value);
};


const onChangeToResult=(event)=>{

  setValue2(event.target.value);
};

const onChangeSelect=(event)=>{

  setSign(event.target.value);
};




const operators=[{id:1,sign:"+"},{id:2,sign:"-"},{id:3,sign:"*"},{id:4,sign:"/"}];

const listItems=operators.map((x)=>
<option key={x.id} value={x.id}>{x.sign}</option>

);



  return (
    <div className="container">
<div>Input1 value: {value1} </div>
<div>Sign value: {signid} </div>
<div>Input2 value: {value2} </div>
<div className="input-group mb-3">
  <input type="number" value={value1} onChange={onChange}/>&nbsp;
<select onChange={onChangeSelect}>
{listItems}
</select> &nbsp;
<input type="number" value={value2} onChange={onChangeToResult}/>
<span>=</span>
<span>{result}</span>
</div>
<br/>
<br/>


<>
      <form onSubmit={addItem}>
        <label>
          <input
            name="item"
            type="text"
            value={itemName}
            onChange={e => setItemName(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit"></input>
      </form>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>


    </div>

  );
}

export default App;
