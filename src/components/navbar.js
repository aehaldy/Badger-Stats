import React from 'react'


export const Navbar = ({schoolData}) => {
  const { name, alias, schoolUrl, city, state, zip, enrollment } = schoolData;

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
      <div className="dropdown">
        <button className="dropbtn headerbtn" type="button">
          About
        </button>
        <div className="dropdown-content" id="about">
          <div>
            <p id="currentSchool">
              From student population of {enrollment} at:
            </p>
            <p className="address">
              {name} {alias && alias}
            </p>
            <p className="address">
              {city}, {state} {zip}
            </p>
            <a href={`http://${schoolUrl}`} id="schoolUrl">
              {schoolUrl}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
