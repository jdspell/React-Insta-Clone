import React from 'react';
import CommentsSection from '../CommentsSection/CommentsSection';

const PostContainer = props => {
    return(
        <CommentsSection comments={props.post.comments} />
    );
}

export default PostContainer;