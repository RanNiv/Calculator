import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState,useRef } from 'react';
import axios from 'axios';
import Calculation from './Calculation.js';
 
 
function App() {
 
  const [value1,setValue1]=useState('');
  const [value2,setValue2]=useState('');
  const [calcresult,setResult]=useState({result:'',resultMessage:''});
  const [signid,setSign]=useState(1);
  const [mathArray, setMathArray] = useState([]);
  const countRef = useRef(0);
 
 
useEffect(()=>{
 
  countRef.current++
  axios.get(`http://localhost:5000/api/Calculator/CalculateAction?num1=${value1}&num2=${value2}&sign=${signid}`)
  .then(res=>setResult(res.data))
  .then(()=> setMathArray([...mathArray,{id:countRef.current,op1:value1,op2:value2,sign:signid}]));
},[value1, value2,signid]);
 
 
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
 
const Items=mathArray.map((x)=>
<div>
<button type="button" class="btndelete"  onClick={() =>setMathArray(mathArray.filter(t=>t.id!=x.id))}>Delete</button> 
<Calculation key={x.id}  operand1={x.op1} operand2={x.op2} sign={x.sign} />
</div>
);
 
 
 
 
 
  return (
    <div className="container">
 
<h2>Calculator</h2>
 
 
<div className="input-group mb-3">
  <input type="number" value={value1} onChange={onChange}/>&nbsp;
<select onChange={onChangeSelect}>
{listItems}
</select> &nbsp;
<input type="number" value={value2} onChange={onChangeToResult}/>
<span>=</span>
<span>{calcresult.result}</span>
</div>
<div>result status: {calcresult.resultMessage} </div>
<br/>
<br/>
<h2>Calculation History</h2>
    {Items}
   
    </div>
 
  );
}
 
export default App;
 

