import React, { useState } from 'react';
import s from './Incidents.module.css';
import { NavLink } from 'react-router-dom';
import IncidentDescription from './IncidentDescription';

const IncidentHeaderTemplate = (props) => {

    /* let [togglerHeadlines, toggleHeadline] = useState(props.toggler); */
    let headlineClick = (identifier) => {
        return props.headlineClicker(identifier);
    }

    return (
                <div className={props.toggler === props.incident.id ? s.headlinesActivated : s.headlines} 
                    onClick={ ()=> headlineClick(props.incident.id) }
                >
                    <NavLink to={"/incidents/" + props.incident.id}>
                    <h2>{props.incident.headline}</h2>
                    <div className={s.info}>
                        <div>Left: {props.incident.expirationDate}</div>
                        <div>Like {props.incident.likesCount}</div>
                        <div>Comments: {props.incident.comments.length}</div>
                    </div>
                    </NavLink>
                </div>
    );
}

const Incidents = (props) => {

    let [togglerHeadlines, toggleHeadline] = useState(1);
    let headlineClicker = (identifier) => {
        toggleHeadline(togglerHeadlines=identifier);
    }

    let incidentsHeaders = props.incidents.incidentsDB.map( i => {
        return <IncidentHeaderTemplate incident={i} toggler={togglerHeadlines} headlineClicker={headlineClicker} />
    } );
    
    return (<div className={s.incidents}>
        <div>{incidentsHeaders}</div>
        <div className={s.incidentDescription}>
            <IncidentDescription    incidents={props.incidents} 
                                    addComment={props.addComment} 
                                    onCommentChange={props.onCommentChange}
            />
        </div>
        </div>);

}



export default Incidents;