import React from 'react'

export const Carosuel = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://cdn.pixabay.com/photo/2017/08/10/07/25/airplane-2619434_1280.jpg" class="d-block w-100" width={"100%"} height={"600px"} alt="..."/>
      <div class="carousel-caption carosueltxt1">
      {/* <div className='carosueltxt1'> */}
 <i>
   <h2 className='text-white fs-1'>Make life Easy and <span className="text-danger">Happy</span></h2>
 <p className='opacity-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deserunt nulla veniam! Lorem ipsum dolor.</p>
 </i>
  <button className="btn btn-danger">Book Now</button>
{/* </div> */}
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2020/05/25/17/03/travel-5219496_640.jpg" class="d-block w-100" width={"100%"} height={"600px"} alt="..."/>
      <div class="carousel-caption carosueltxt1">
      
      {/* <div> */}
<i>
<h2 className='text-white fs-1'><span className="text-danger">5 star </span>luxury <span className="text-danger">travelling</span> place</h2>
  <p>Some representative placeholder content for the second slide of the carousel.</p>
  <button className="btn btn-danger">Learn More</button>
</i>
{/* </div> */}



      
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2017/03/27/13/51/air-force-2178863_640.jpg" class="d-block w-100" width={"100%"} height={"600px"} alt="..."/>
      <div class="carousel-caption carosueltxt1">
  


      {/* <div> */}
<i>
<h2 className='text-white fs-1'>Gold and <span className="text-danger">Gold and boundless travel</span> travel</h2>
  <p>Some representative placeholder content for the third slide of this carousel.</p>
  <button className="btn btn-danger">Book Now</button>
</i>
{/* </div> */}


      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
