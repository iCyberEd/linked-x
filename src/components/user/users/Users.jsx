import React from 'react';
import s from './Users.module.css';


const UserInfo = (props) => {
    return (
        <div className={s.userInfo}>
            <div>{<img src={props.avatar} alt={props.name} className={s.avatar}/>}</div>
            <div>
                Name: {props.name} <br></br>
                Location: {props.location}
            </div>
        </div>
    )
};

const Users = (props) => {
    let usersList = props.udb.map(u => <UserInfo id={u.id} avatar={u.avatar} name={u.name} location={u.location} />
    );
    return (
        <div className={s.usersList}>
            {usersList}
        </div>
    );
}

export default Users;