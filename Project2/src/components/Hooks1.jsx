import { useState } from "react"
// import React from,useState={} 'react'

export const Hooks1 = () => {
    const [value, setvalue] = useState(5);
    const Add=()=>{
        setvalue(value+1);
        }
        const Sub=()=>{
            setvalue(value-1);
            }
  return (



    <div>

<div className="contanier mt-5 pt-5 ">
<div className="row text-center">
<div className="col">
<div className="btn btn-danger" onClick={Add}>ADD</div>
        <p>Class{value}</p>
        <div className="btn btn-primary" onClick={Sub}>Sub</div>
</div>
</div>
    </div>        

    </div>
  )
}
