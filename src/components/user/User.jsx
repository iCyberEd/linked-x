import React from 'react';
import s from './User.module.css';
import { NavLink } from 'react-router-dom';


const User = (props) => {

    return (     
        <div className={s.user}>           
            <div className={s.profile}>
                    <NavLink to="/user/profile">
                        <img src={props.udb[4].avatar} alt="user-icon" className={s.user_ico}></img>
                        
                        <h2>{props.udb[4].name}</h2>
                    </NavLink>
            </div> 
            <div className={s.user_main_info}>
                Descent: bio<br />
                Completed: 32<br />
                likes: 1022<br />
                Friends: 555<br />
                Enemies: 5m+
            </div>
            <nav className={s.user_nav}>
                <ul>
                    <li><NavLink to="/user/residence">Residence</NavLink></li>
                    <li><a href="#/user/wall">The Wall</a></li>
                    <li><a href="#Teammates">Teammates</a></li>
                    <li><a href="#Rank">Rank</a></li>
                    <li><a href="#Power">Power</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default User;