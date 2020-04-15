import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={s.nav}>
            <ul>
            <NavLink to="/news"><li>News</li></NavLink>
            <NavLink to="/incidents/1"><li>World</li></NavLink>
            <NavLink to="/users"><li>Communities</li></NavLink>
            <NavLink to="/notices"><li>Notices</li></NavLink>
            </ul>
        </nav>
    );
}

export default Nav