import React from 'react';
import { Link } from 'react-router-dom';

function navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark ms-">
    <div class="container-fluid">
    <img src="css/sk.webp" alt="" height="34"/>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">S.K. Electricals</a>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><Link to="/" class="nav-link">Home</Link></li>
            <li class="nav-item"><Link to="/about" class="nav-link">About</Link></li>
            <li class="nav-item"><a href="#footer" class="nav-link">contact</a> </li>
            <li class="nav-item"><a href="#testo" class="nav-link">Testmonials</a></li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-light btn-outline-success" type="submit">Search</button>
        </form>
    </div>
    </div>
  </nav> 
    </>
  )
}

export default navbar
