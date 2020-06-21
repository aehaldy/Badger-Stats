import React from 'react'


export const Navbar = ({appFromId}) => {
  return (
    <header>
      <div>
        <img
          className="logo"
          src="/title.png"
          alt="Title logo for Badger Stats"
          onClick={() => window.location.reload(false)}
        />
      </div>
      <div className="dropdown about">
        <button className="dropbtn headerbtn" type="button">
          About
        </button>
        <div className="dropdown-content">
          <p>Move the school info to show here?</p>
        </div>
      </div>
    </header>
  );
}
