import React from 'react'

export default function Search() {
  return (
    <div>
      
      <div className="container-fluid red">
<div className="container bg-white rounded-4 pt-5 position-relative">
<div className="row p-3">
    <div className="col col-sm-12 col-md-8 ">
    <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
  <input type="checkbox" className="btn-check" id="btncheck1" autocomplete="off"/>
  <label className="btn btn-outline-danger" for="btncheck1">On Way</label>

  <input type="checkbox" className="btn-check" id="btncheck2" autocomplete="off"/>
  <label className="btn btn-outline-danger" for="btncheck2">Road Trip</label>

  <input type="checkbox" className="btn-check" id="btncheck3" autocomplete="off"/>
  <label className="btn btn-outline-danger" for="btncheck3">Multi Trip</label>
</div>
    </div>

    <div className="col col-sm-12 col-md-4 ">
    <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
  <input type="checkbox" className="btn-check" id="btncheck1" autocomplete="off"/>
  <label className="btn btn-outline-danger" for="btncheck1">Book International and Domestic Flights</label>
</div>
    </div>

</div>


<div className="container backgroundalloffer1">
<div className="row text-center">
    <div className="col col-sm-12 col-md-6 col-lg-3 border1 p-3">
        <p>Form</p>
        <h3>From Delhi</h3>
        <p>DEL,Delhi Airport India</p>
    </div>

    <div className="col col-sm-12 col-md-6 col-lg-3 border1 p-3">
    <p>To</p>
    <h3>Bengaluru </h3>
    <p>BLR, Bengaluru International Airport India</p>
    </div>

    <div className="col col-sm-12 col-md-6 col-lg-3 border1 p-3">
    <div className="dropdown open">
    <button className="btn  dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
               Departure
            </button>
    <div className="dropdown-menu" aria-labelledby="triggerId">
        <a className="dropdown-item" href="#"><input type="date" name="" id=""/></a>
       
    </div>
 </div>


   <h3> <strong>12</strong> july 24</h3>
   <span>Wednesday</span>
    </div>

    <div className="col col-sm-12 col-md-6 col-lg-3 border1 p-3">
    <p>Travellers <span>& Class</span></p> 
    <h3> <strong>19</strong> Travellers</h3>
   <span>Economy/Premium Economy</span>    
    </div>
</div>

<div className="row text-center">
    <div className="col col-sm-12 col-md-6 col-lg-3 border1 p-3">
    <p >Form</p>
    <h3>Bengaluru</h3>
    <p>DEL,Delhi Airport India</p>
    </div>

    <div className="col col-sm-12 col-md-6 col-lg-3 border1 p-3">
    <p>To</p>
    <h3> Select City </h3>
    <p>BLR, Bengaluru International Airport India</p>
    </div>

    <div className="col col-sm-12 col-md-6 col-lg-3 border1 p-3">
    <div className="dropdown open">
    <button className="btn  dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
               Departure
            </button>
    <div className="dropdown-menu" aria-labelledby="triggerId">
        <a className="dropdown-item" href="#"><input type="date" name="" id=""/></a>
       
    </div>
 </div>


   <h3> <strong>14</strong> july 24</h3>
   <span>Friday</span>
    </div>

    <div className="col col-sm-12 col-md-6 col-lg-3 border1 p-3">
    {/* <p>Travellers <span>& Class</span></p> 
    <h3> <strong>19</strong> Travellers</h3>
   <span>Economy/Premium Economy</span>     */}
  <button className="btn  dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
           Travellers <span className="d-none d-md-inline">& Class</span> 
            </button>
            <button className="btn btn-outline-danger">+ADD ANOTHER CITY</button>

   
    </div>
</div>
</div>{/* con3 */}




{/* radio */} 
<div className="row py-4 fw-bold bgcolr" >
  <div className="col">Select A Fare Type</div>
 <div className="col"> <input type="radio" name="flight" value=""/>Ragular fares</div>
 <div className="col"> <input type="radio" name="flight" value=""/>Armed Forces Fares</div>
 <div className="col d-none d-md-flex"> <input type="radio" name="flight" value=""/>Student Fars</div>
 <div className="col d-none d-md-flex"> <input type="radio" name="flight" value=""/>Senior Citizen Fars</div>
 <div className="col d-none d-md-flex"> <input type="radio" name="flight" value=""/>Doctor & Nurses Fares</div>
 
   
    

</div>

</div>{/* con2 */}



{/* flght */}
<div className="row text-center  backgroundalloffer1 position-absolute w-75 bg-white rounded-5 pt-3 move" >
  <div className="col ticketbookingicon">
    <i className="fa-solid fa-jet-fighter text-danger fs-4 " ></i>
    <p>Flights</p>
  </div>
  <div className="col ticketbookingicon">
    <i className="fa-solid fa-hotel fs-4 "></i>
    <p>Hotels</p>
  </div>
  <div className="col ticketbookingicon">
    <i className="fa-solid fa-house fs-4 "></i>
    <p>HomeStyles</p>
  </div>
  <div className="col ticketbookingicon d-none d-md-block">
    <i className="fa-solid fa-gifts fs-4 "></i>
    <p>Holiday Packages</p>
  </div>
  <div className="col ticketbookingicon d-none d-md-block">
    <i className="fa-solid fa-bus fs-4 "></i>
    <p>Buses</p>
  </div>
  <div className="col ticketbookingicon d-none d-lg-block">
    <i className="fa-solid fa-train fs-4 "></i>
    <p>Train</p>
  </div>
  <div className="col ticketbookingicon d-none d-lg-block">
    <i className="fa-solid fa-car fs-4 "></i>
    <p>Cabs</p>
  </div>
</div>


  {/* </div> */}
  








      </div>{/* con1 */}






    </div>
  )
}
