///////////////////////////////////////////////////
//  src/components/Navbar.js
///////////////////////////////////////////////////

import React, { useState } from 'react';

const Navbar = () => {

  const navbarStyles = {
    position: 'fixed',
    height: '60px',
    width: '100%',
    backgroundColor: 'grey',
    textAlign: 'center'
  }

  return (
    <div style={{ ...navbarStyles }}>
      Some Company Inc.
    </div>
  );
};

export default Navbar;