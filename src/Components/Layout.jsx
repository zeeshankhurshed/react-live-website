import React from 'react';
import Navbar from './Navbar';
import {Outlet} from 'react-router-dom';
import Leftnav from './Leftnav';
import Footernav from './Footernav';
function Layout() {
  return (
    <>
      <Navbar/>
      <div className="container">
      <div className="row">
        <div className="col-md-3">
        <Leftnav/>
        </div>
        <div className="col-md-9">
          <Outlet/>
        </div>
      </div>
      </div>
    <div className="footer">
      <Footernav/>
    </div>

    </>
  )
}

export default Layout
