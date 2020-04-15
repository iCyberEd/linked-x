import React from 'react';
import s from './Comments.module.css';

const Comments = (props) => {

    let everyIncidentComments = props.iComments.map( c => <div> 
        <div className={s.commentName}>{c.name}</div>
        <div className={s.comment}>{c.comment}</div> 
        </div>
    );

    return (
        <div className={s.commentsBlock}>
            {everyIncidentComments}
            <CommentForm    identifier={props.identifier} 
                            tmpComment={props.tmpComment}
                            addComment={props.addComment} 
                            onCommentChange={props.onCommentChange} 
            />
        </div>
    )
};

const CommentForm = (props) => {
    let commentArea = React.createRef();
    let identifier = props.identifier;

    let onCommentChange = () => {
        let text = commentArea.current.value;
        props.onCommentChange(text);
    }  

    let addComment = () => {
        props.addComment(identifier);
    }

    return (<div className={s.comment_form}><p />
        <div className={s.you}>You:</div>
        <textarea onChange={onCommentChange} value={props.tmpComment} ref={commentArea} className={s.textarea} /><p />
        <button onClick={addComment} >Add comment</button>
        </div>
    )
};

export default Comments;