import React from 'react';

export const Navbar = () => {
  const options = ['Create PDF', 'Download Dataset', 'Print Graphs'] //action buttons TBD

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
           Menu
         </button>
         <div className="dropdown-content">
           {options.map((opt) => (
             <p key={opt}>{opt}</p>
           ))}
         </div>
       </div>
     </header>
   );
}
