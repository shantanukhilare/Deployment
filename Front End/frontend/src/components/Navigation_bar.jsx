import { Link } from "react-router-dom"
import logo from "../productImages/Logo.png"
import React, { useEffect, useState } from "react";

export default function Navigation_bar() {
  
    return (
<nav class="navbar navbar-expand-lg bg-info-subtle">
  <div class="container-fluid">
    <img src={logo} style={{width:"50px"}} />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"  aria-disabled="true">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
        <li class="nav-item">
         <Link to='/home' className='nav-link' aria-current='page' href='#' >OneStopShop</Link>
        </li>
        <li className="nav-item dropdown">
        <Link to='/category' className='nav-link' aria-current='page' href='#' >Categories</Link>
       
              
            </li>
        <li class="nav-item">
            <Link to='/login' className='nav-link' aria-current='page' href='#' >Login</Link>
        </li>
        <li class="nav-item">
         <Link to='/address' className='nav-link' aria-current='page' href='#' >Address</Link>
        </li>      
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Looking for something?" style={{width:"300px"}} aria-label="Search" />
        <button class="btn btn-dark" type="submit">Search</button>

      </form>
      
      <li class="nav-item">
          <Link to='/logout' className='btn btn-outline-danger' aria-current='page' href='#' >Logout</Link>
        </li> 
    </div>
  </div>
</nav>
)
}
