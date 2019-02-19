import React from 'react';
import "./PostContainer.scss";
import CommentsSection from '../CommentsSection/CommentsSection';

const PostContainer = props => {
    return(
        <div className="post">
            <div className="postHeading">
                <img src={props.post.thumbnailUrl} /> 
                <strong> {props.post.username}</strong>
            </div>

            <img src={props.post.imageUrl} />

            <div className="icons">
                <img src={require("../../Images/searchBarHeart.svg")} />
                <img src={require("../../Images/postSpeechBubble.svg")} />
            </div>

            <div className="likes"><strong>{props.post.likes} likes</strong></div>

            <CommentsSection comments={props.post.comments} />

            <input type="text" placeholder="Add a comment..." />
        </div>
    );
}

export default PostContainer;