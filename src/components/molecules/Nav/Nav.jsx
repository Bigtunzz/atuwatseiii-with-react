import React from 'react';
import { Logo, MenuBtn, Navlink } from '../../atoms';
import './style.css';

export const Nav = ({hamburgerFunc}) => {
  return (
    <nav className="nav-style d-flex jc-space-between ai-center col-12">
      <Logo />
      <MenuBtn hamburgerFunc={hamburgerFunc} />
      <div className="d-flex">
        <Navlink>
          <div className="nav-links-items">History</div>
        </Navlink>
        <Navlink>
          <div className="nav-links-items">The Ginuwa Ruling House</div>
        </Navlink>
        <Navlink>
          <div className="nav-links-items">Royal Court Notices</div>
        </Navlink>
        <Navlink>
          <div className="nav-links-items">Warri Traditional Council</div>
        </Navlink>
      </div>
    </nav>
  );
};
