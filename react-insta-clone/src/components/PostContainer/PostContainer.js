import React, {useState} from 'react';
import "./PostContainer.scss";
import CommentsSection from '../CommentsSection/CommentsSection';

const PostContainer = props => {
    const [newComment, setNewComment] = useState("");
    const [likes, setLikes] = useState(props.post.likes);

    return(
        <div className="post">
            <div className="postHeading">
                <img src={props.post.thumbnailUrl} /> 
                <strong> {props.post.username}</strong>
            </div>

            <img src={props.post.imageUrl} />

            <div className="icons">
                <img 
                    onClick={() => setLikes(prevState => prevState+1)}
                    src={require("../../Images/searchBarHeart.svg")} 
                />
                <img src={require("../../Images/postSpeechBubble.svg")} />
            </div>

            <div className="likes"><strong>{likes} likes</strong></div>

            <CommentsSection comments={props.post.comments} />

            <form onSubmit={e => {
                props.addNewComment(e, props.post.timestamp, newComment)
                setNewComment("")
                }}>
                <input 
                    type="text" 
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={e => setNewComment(e.target.value)}
                />
            </form>
        </div>
    );
}

export default PostContainer;