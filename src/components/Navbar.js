import React from 'react';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark" style={{ backgroundColor: '#373435', padding: '10px' }}>
        <div className='navbar-logo' style={{ marginLeft: '20px' }}>
          <img src="insiderlogo.png" alt="Logo" width="100" height="40" ></img>
        </div>
        {/* <div>
      <img src="u1.png" style={{float:'right', height:'20px',width:'20px' }} alt="" />
    </div> */}
      </nav>
    </>
  )
}

