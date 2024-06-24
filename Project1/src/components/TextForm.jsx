import React, {useState} from 'react'

export default function Textform(props) {

  //UpperCase Convert
const handleUpClick =() =>{
// console.log("UpperCase was Clicked" + text);
let newText=text.toUpperCase();
setText(newText);
props.showAlert("Converted To UpperCase","success");
}


  //lowerCase Convert
  const handleLowClick =() =>{
    // console.log("Lowercase was Clicked" + text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To LowerCase","warning");
    }

    //ClearText 
  const clearText =() =>{
    // console.log( " ");
    let newText=" ";
    setText(newText);
    props.showAlert("Clear Data","danger");
    }


        //Delete one letter 
  const clearOneText =() =>{
    // console.log( " ");
    let newText=text.substring(0,text.length-1);
    setText(newText);
    props.showAlert("Clear One Word","dark");
    }

          //Copy Text 
  const copyText =() =>{
   let input=document.getElementById("mybox");
  //  input.select();
   navigator.clipboard.writeText(input.value);
   props.showAlert("Copy To Clipboard","info");
    }

    //uppercase First Letter Convert
  const upperFirstText =() =>{
    // console.log(text.split(" ").length.substring(0,1).toUpperCase());
    // let newText=text.split(" ").length.substring(0,1).toUpperCase();
    // setText(newText);
    }


const handleOnChange =(event) =>{
    console.log("on Change");
   setText(event.target.value);//We can change value in input filed
    }


  const [text,setText] = useState("");

    return (
      <>
 <div >
<h1>{props.heading}</h1>
<div className="mb-3">
  <textarea placeholder='Enter Your Text Here' className="form-control" id="mybox" value={text} onChange={handleOnChange} rows="8" ></textarea>
</div>

<button className="btn btn-primary " onClick={handleUpClick}>Convert To UpperCase</button>

<button className="btn btn-primary mx-3 my-2" onClick={handleLowClick}>Convert To LowerCase</button>

<button className="btn btn-primary mx-3 my-2" onClick={clearText}>Clear Text</button>

<button className="btn btn-primary mx-3 my-2" onClick={clearOneText}>Del one</button>

<button className="btn btn-primary mx-3 my-2" onClick={copyText}>Copy Text</button>

{/* <button className="btn btn-primary mx-3 my-2" onClick={removeExtraSpace}>Remove Space</button> */}

{/* <button className="btn btn-primary mx-3" onClick={upperFirstText}>Title Case</button> */}

 </div>
 
 <div className="container">
<p>{text.split(" ").length} Words  and Characters {text.length}</p>
<h2>Preview</h2>
<p>{text.length}</p>
 </div>
 </>
  )
}
