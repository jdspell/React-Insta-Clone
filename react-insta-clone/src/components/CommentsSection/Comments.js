import React from 'react';

const Comments = props => {
    return(
        <div className="comment">
            <h3>{props.usename}</h3>
            <p>{props.text}</p>
        </div>
    );
}

export default Comments;