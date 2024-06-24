import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><h6 className="fs-2 fw-bold mx-5">ROYAL<span className="text-danger fw-bold" >YATRA</span></h6></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Offers</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            What You Want
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Filght</a></li>
            <li><a class="dropdown-item" href="#">Hotel </a></li>
          
            <li><a class="dropdown-item" href="#">HomeStyles</a></li>
            <li><a class="dropdown-item" href="#">Holiday Packegs</a></li>
            <li><a class="dropdown-item" href="#">Trains</a></li>
            <li><a class="dropdown-item" href="#">Buses</a></li>
            <li><a class="dropdown-item" href="#">Cabs</a></li>
          </ul>
        </li>
       
      </ul>
      <form class="d-flex mx-5" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-danger" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
