import React from "react";

export default function Downlaod() {
  return (
    <div>
      <div className="container backgroundcolor mt-5">
        <div className="row">
          <div className="col col-sm-12 col-md-6 col-lg-6">
            <img
              src="https://img.freepik.com/free-vector/appointment-booking-design_23-2148557730.jpg?size=626&ext=jpg"
              width={"100px"}
              className="float mb-3"
              alt=""
            />
            <span class="fs-1 fw-bold m">Download App Now</span>
            <p >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima,
              hic.
            </p>
            <input
              class="form-control"
              type="number"
              placeholder="Enter your Number "
            />
            <button class="btn btn-outline-danger fw-bold my-4 mx-2">GET APP LINK</button>
          </div>

          <div className="col col-sm-12 col-md-6 col-lg-6">
            <div className="row text-center">
              <div className="col">
             <button className="btn btn-dark">
                <div>GET IT ON</div>
                <img src="https://img.freepik.com/free-icon/google-play_318-566073.jpg?size=626&ext=jpg" alt="" width={"30px"}/>
                <br />
                <span>
                    <strong>Google</strong>Play
                </span>
             </button>
             <br />

             <button className="btn btn-dark my-3">
                <div>GET IT ON</div>
                <img src="https://img.freepik.com/free-icon/app-store_318-631416.jpg?size=626&ext=jpg" alt="" width={"30px"}/>
                <br />
                <span>
                    <strong>Google</strong>Play
                </span>
             </button>
              </div>{/* //collast */}

<div className="col">
    <img src="https://ganeshdutt100.github.io/Flight-Booking-Website/the_ganesh_dutt_qr%20(1).png" width={"180px"} alt="" />
</div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
