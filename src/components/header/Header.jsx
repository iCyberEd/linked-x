import React from 'react';
import s from './Header.module.css';
import linkedx from './linkedx.png';
import Nav from '../Nav';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className={s.header}>
        <NavLink to="/"><img src={linkedx} alt="x-web" className={s.logo}></img></NavLink>
        <h1>X-Human Power</h1>
        <div><Nav /></div>   
        </header>
    );
  }

export default Header;