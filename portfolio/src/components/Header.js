import React from "react";
import {Link} from 'react-router-dom';
import './components.css';


function Header(props) {
    return <header> 
     
    <nav class="navbar navbar-expand-md navbar-dark fixed-top">
      <div class="container">
        <a class="navbar-brand" href="/">Ugur`s Portfolio</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>   
            </li>
            <li class="nav-item">
            <Link to='/Projects.js'> 
              <a class="nav-link" href="/">Projects</a>
            </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">Shop</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">Referances</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">Blog</a>
            </li>
            <li class="nav-item">

            </li>
          </ul>
          <form class="d-flex">
          <Link to='/Login.js'> 
          <a class="nav-link active" aria-current="page" href="/">Login</a> 
          </Link>
          </form>
        </div>
      </div>
    </nav>
    </header>;
  }

  export default Header;



