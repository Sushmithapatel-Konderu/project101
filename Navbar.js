import React from 'react';

const Navbar = ({ isLoggedIn, onShowDonorForm, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="logo">BloodBank</div>
      <ul className="nav-links">
        <li className="dropdown">
          <span>Donor</span>
          <div className="dropdown-content">
            {!isLoggedIn ? (
              <>
                <button onClick={onShowDonorForm}>Become a Donor</button>
                <button onClick={() => document.getElementById('login-modal').style.display = 'block'}>
                  Sign In
                </button>
              </>
            ) : (
              <>
                <button onClick={onLogout}>Logout</button>
                <button onClick={() => alert('Donor profile')}>My Profile</button>
              </>
            )}
          </div>
        </li>
        <li><a href="#inventory">Inventory</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
