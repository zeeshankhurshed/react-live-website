import React, { useState } from 'react';
import {Link,NavLink} from 'react-router-dom';
import Modal from './Modal';

function Navbar() {
 let [isModalOpen,setIsModalOpen]= useState(false)

let openModal=()=>{
if(isModalOpen){
  setIsModalOpen(false)
}else{
  setIsModalOpen(true)
}
}

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    <Link className="navbar-brand" to={"/"}>B</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to={"/"}>Doc</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/examples"}>Examples</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/icons"}>Icons</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/theme"}>Theme</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/blog"}>Blog</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/items"}>Items</NavLink>
        </li>
   
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <button className="btn btn-primary mx-2" onClick={openModal} >LogIn</button>

    </div>
  </div>
</nav>
{
  isModalOpen ? <Modal openModal={openModal}/> :""
}
    </>
  )
}

export default Navbar
