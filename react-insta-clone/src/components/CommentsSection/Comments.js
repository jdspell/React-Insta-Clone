import React from 'react';

const Comments = props => {
    return(
        <div className="comment">
            <p>
                <strong>{props.username} </strong>
                {props.text}
            </p>
        </div>
    );
}

export default Comments;