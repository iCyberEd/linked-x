import React from 'react';
import s from './News.module.css';

const News = (props) => {
    return (
      <div className={s.content}>
              <li className="news">{props.m}</li>
              <li className="news">At this moment working links: News, World, Communities, wolverine profile (add skills)</li>
              <li className="news">11.03.2020 Enabled Residence</li>
              <li className="news">11.03.2020 Enabled Profile</li>
              <li className="news">19.02.2020 Startind develop X-Network</li>
      </div>
    );
  }

export default News;