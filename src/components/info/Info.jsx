import React from 'react';
import './Info.module.css';
import News from './News';

const Info = () => {
    return (
      <div className="info">
        <ul>
            <News m="First wersion of X-Web (pre 0.000000001 alfa)" />
            <News m="Second edition" />
        </ul>     {/*  TODO make autogenerate news  */}
        <div className="about">This is top secret web of x-mens. No one must know about this!</div>
      </div>
    );
  }

export default Info;