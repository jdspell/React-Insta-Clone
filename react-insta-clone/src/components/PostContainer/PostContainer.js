import React from 'react';
import CommentsSection from '../CommentsSection/CommentsSection';

const PostContainer = props => {
    return(
        <div className="post">
            <p><img src={props.post.thumbnailUrl} /> <strong>{props.post.username}</strong></p>
            <img src={props.post.imageUrl} />
            <div className="icons">
                <img src={require("../../Images/searchBarHeart.svg")} />
                <img src={require("../../Images/postSpeechBubble.svg")} />
            </div>
            <p><strong>{props.post.likes} likes</strong></p>
            <CommentsSection comments={props.post.comments} />
            <input type="text" placeholder="Add a comment..." />
        </div>
    );
}

export default PostContainer;