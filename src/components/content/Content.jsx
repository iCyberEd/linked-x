import React from 'react';
import s from './Content.module.css';


const Content = () => {
    return (
        <div className={s.content}>
            <div className="post">
                <div className="userpic"><img alt="userpic" className="userpic" src="https://gameintrospection.files.wordpress.com/2014/08/dog-pooping-848x473.jpg?w=848"></img></div>
                <div className="text-content">Here are will be text messages from different pets</div>
                <div className="buttons">
                    <input type="button" value="comment"/>
                    <input type="button" value="send to"/>
                    <input type="button" value="like"/>
                    <input type="button" value="favorit"/>
            </div>
            </div>
        </div>
    );
}

export default Content;