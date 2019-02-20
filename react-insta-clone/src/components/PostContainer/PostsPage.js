import React from 'react';
import PostContainer from './PostContainer';

export default class PostsPage extends React.Component {
    render(){
        const containers = this.props.filteredPosts.map((post, index) => {
            return <PostContainer key={index} post={post} addNewComment={this.addNewComment} />
        })

        return (
            <div className="posts">
                {containers}
            </div>
            
        );
    }
}