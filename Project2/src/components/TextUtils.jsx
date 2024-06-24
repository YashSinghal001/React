import { useState } from "react"

export default function TextUtils() {
    const [text, setText] = useState("");

const uppercase=()=>{
    let newtxt=text.toUpperCase();
    setText(newtxt);
    console.log(newtxt);
}
const lowercase=()=>{
    let newtxt=text.toLowerCase();
    setText(newtxt);
    console.log(newtxt);
}
const Onchnge=(evnt) =>{
setText(evnt.target.value);
}

  return (
    <div>
      

<div className="container">
<div class="mb-3">
  <label for="exampleFormControlTextarea1"  class="form-label"></label>
  <textarea class="form-control" placeholder="Enter text Here" id="exampleFormControlTextarea1" rows="3"value={text} onChange={Onchnge}></textarea>
</div>

<div className="my-1 mx-4 btn btn-primary" onClick={uppercase}>UpperCase</div>
<div className="my-1 mx-4 btn btn-danger" onClick={lowercase}>LowerCase</div>
</div>

<div className="container">
    <h3>{text.split(" ").length} Words and Characters {text.length}</h3>
    <h1>Preview</h1>
    <p>{text}</p>
    
</div>








    </div>
  )
}
