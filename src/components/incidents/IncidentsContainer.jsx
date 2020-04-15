import React from 'react';
import Incidents from './Incidents';



const IncidentsContainer = (props) => {

    let onCommentChange = (text) => {
        props.dispatch({type: "UPDATE-INCIDENT-COMMENT", value: text});
    }  

    let addComment = (identifier) => {
        props.dispatch({type: "ADD-INCIDENT-COMMENT", identifier: identifier});
    }
    
    return <Incidents incidents={props.incidents} addComment={addComment} onCommentChange={onCommentChange} />;
}

export default IncidentsContainer;