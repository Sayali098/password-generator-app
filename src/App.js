
import { useState } from 'react';
import './App.css'; 
import {UC,LC} from './data/passChar';
import {NC,SC} from './data/passChar';

function App() {

  const[uppercase,setUppercase]=useState(false);
  const[lowercase,setLowercase]=useState(false);
  const[numbers,setNumbers]=useState(false);
  const[symbols,setSymbols]=useState(false);
const[passLength,setPassLength]=useState(10);
const[pass,setPass]=useState();


  function createPassword(){
    
    let charSet='';
    let FinalPass=''
    if(uppercase || lowercase || numbers || symbols){
      
      if(uppercase) charSet+=UC;
      if(lowercase) charSet+=LC;
      if(numbers) charSet+=NC;
      if(symbols) charSet+=SC;

      for( let i=0;i<passLength;i++){
         FinalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length));

      }
      console.log(FinalPass)
      setPass(FinalPass);
   
    }else {
     alert ("please check at least one ")}
    // console.log("hi")
  }
  return (
    <section className='pass-wrapper'>
      <div className="pass-container">
        <h2>Password Generation</h2>
        <div className='input-div'>
          <input className='inputData input' type='text' value={pass}  readOnly></input><button className='inputData'>Copy</button>
        </div>

        <div className='input-Data'>
          <label>password length</label>
          <input className='input-length' type='number'  
          max={16} min={6}
          value={passLength} onChange={(event)=>setPassLength(event.target.value)}></input>
        </div>
        <div className='input-Data'>
          <label>Include Uppercase letter</label>
          <input type='checkbox' checked={uppercase}  onChange={()=>setUppercase(!uppercase)}></input>
        </div>
        <div className='input-Data'>
          <label>Include lowercase letter</label>
          <input type='checkbox' checked={lowercase}  onChange={()=>setLowercase(!lowercase)}></input>
        </div>
        <div className='input-Data'>
          <label>Include number</label>
          <input type='checkbox' checked={numbers}  onChange={()=>setNumbers(!numbers)}></input>
        </div>
        <div className='input-Data'>
          <label>Include symbols</label>
          <input type='checkbox' checked={symbols}  onChange={()=>setSymbols(!symbols)}></input>
        </div>
        <button onClick={createPassword} className='pass-btn'>Generate Password</button>
      </div>
    </section>
  );
}

export default App;
