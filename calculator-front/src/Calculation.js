 
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
 
 
function Calculation(props) {
 
  const [operand1, setValue1] = useState(props.operand1);
  const [operand2, setValue2] = useState(props.operand2);
  const [calcresult, setResult] = useState('');
  const [sign, setSign] = useState(props.sign);
  const [edit, setEdit] = useState(0);
 
 
 
 
  const onChange = (event) => {
 
    setValue1(event.target.value);
  };
 
 
  const onChangeToResult = (event) => {
 
    setValue2(event.target.value);
  };
 
  const onChangeSelect = (event) => {
 
    setSign(event.target.value);
  };
 
  const operators = [{ id: 1, sign: "+" }, { id: 2, sign: "-" }, { id: 3, sign: "*" }, { id: 4, sign: "/" }];
 
  const listItems = operators.map((x) =>
    <option key={x.id} value={x.id}>{x.sign}</option>
 
  );
 
  useEffect(()=>{
      axios.get(`http://localhost:5000/api/Calculator/CalculateAction?num1=${operand1}&num2=${operand2}&sign=${sign}`)
      .then(res=>{setResult(res.data);})
    },[operand1,operand2,sign]);
 
  return (
    <div className="input-group mb-3" style={{display: 'inline'}} >
       <button type="button" class="btnedit" onClick={() => setEdit(1)}>Edit</button> 
      <input type="number" value={operand1} onChange={onChange} disabled = {edit==0? "disabled" : ""} />&nbsp;
      <select onChange={onChangeSelect} value={sign}  disabled = {edit==0? "disabled" : ""}>
        {listItems}
      </select> &nbsp;
      <input type="number" value={operand2} onChange={onChangeToResult} disabled = {edit==0? "disabled" : ""} />
      <span>=</span>
      <span>{calcresult.result}</span>
    </div>
  );
}
 
export default Calculation;
 

