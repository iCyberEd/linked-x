import React from 'react';
import s from './Content.module.css';

const Elements = () => {
    return (
        <div className={s.content}>
            <h2>Choose the Element</h2>
            <ul>
                <li>Magnet</li>
                <li>Fire</li>
                <li>Regeneration</li>
                <li>Illusion</li>
                <li>Water</li>
                <li>Rock</li>
            </ul>
        </div>
    );
}

export default Elements;