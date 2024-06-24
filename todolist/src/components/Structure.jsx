import React, { useState } from "react";



export default function Structure() {


   const [text, setText] = useState(" ");
    const [array, setArray] = useState([]);


    const addbtn = () => {
      
        setArray([...array,text]);
        setText("");
      
    };
  
      

    // changeText=(e)=>{
    //     setText(e.target.value);
    // }
  return (
    <>
  
<div className="container text-center">
<h1 className='text-white tolist'>To Do List</h1>
</div>


      <div className="container cntr rounded-3">
    
      <input type="text" className='rounded' id="inp" onChange={(e)=>setText(e.target.value)}  placeholder="Enter Your Task"/>
        <button className='btn btn-primary rounded-4'onClick={addbtn} >Add</button>
     <ul>
      {array.map((texts)=> <li>{texts} <button className="btn btn-danger">Remove</button> </li>

)}
     </ul>


</div>

    </>
  )
}
