import React from 'react';
import data from './data';
import Logo from '../../assets/navimage.jpg';
import { IoIosColorPalette } from 'react-icons/io';

function Navbar() {
  const dataList = data.map((item) => {
    const { id, link, title } = item;
    return (
      <li key={id}>
        <a href={link}>{title}</a>
      </li>
    );
  });

  return (
    <nav>
      <div className="container nav_container">      
        <a href={Logo}>
          <img src={Logo} alt="" />
        </a>
        <ul className="nav_menu">{dataList}</ul>
      </div>
      <button id="icon">
        <IoIosColorPalette />
      </button>
    </nav>
  );
}

export default Navbar;
