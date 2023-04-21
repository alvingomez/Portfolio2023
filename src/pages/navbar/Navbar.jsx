import React from 'react'
import data from './data';
import Logo from '../../assets/navimage.jpg';

function Navbar() {
  const dataList = data.map((item) => {
    const {id, link, title} = item;
    return (
        <li key={id}>
            <a href={link}>{title}</a>
        </li>        
    )
  })
  
return (
    <nav>
       {/* <div className="container nav_container"> */}
        <div>
        <a href={Logo}>
            <img src={Logo} alt="" />
        </a>
        <ul className="nav_menu">
            {dataList}
        </ul>
       </div>
       <button id="icon">

       </button>

    </nav>
      
    
  )
}

export default Navbar
