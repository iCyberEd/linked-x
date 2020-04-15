import React from 'react';
import s from './Incidents.module.css';
import { Route } from 'react-router-dom';
import Comments from './Comments';


const IncidentDescription = (props) => {

    let incidentsDescriptionList = props.incidents.incidentsDB.map( i => <Route path={"/incidents/" + i.id} render={ () => {return (<div>
        <div>
            <div className="photo">{/* {props.incident.photo} */}</div>
            <div className="location">{/* {props.incident.location} */}</div>
            <div className="details">{/* {props.incident.headline} */}</div>
        </div>
        <div className={s.comments}>
            <Comments iComments={i.comments} 
                    tmpComment={props.incidents.tempComment}
                    addComment={props.addComment} 
                    onCommentChange={props.onCommentChange} 
                    identifier={i.id}
            />
        </div>
    </div>)
    }} />);

    return <div>{incidentsDescriptionList}</div>
}

export default IncidentDescription;