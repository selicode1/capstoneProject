import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar1 from './navbar1';
import Navbar2 from './Navbar2';


function NavBarLayout() {
  return (
    <div>
      <NavBar1 />
      <Navbar2 />
      {/* The child route components will be rendered here */}
      <Outlet />
    </div>
  );
}

export default NavBarLayout;
