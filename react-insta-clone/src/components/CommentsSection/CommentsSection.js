import React from 'react';
import Comments from './Comments';


const CommentsSection = props => {
    return(
        // <h2>hello h2</h2>
        <div className="commentsSection">
            {props.comments.map(comment => 
            <Comments username={comment.username} text={comment.text} />
        )}
        </div>
    );
}

export default CommentsSection;