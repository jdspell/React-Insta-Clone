import React from 'react';
import PostContainer from './PostContainer';
import dummyData from "../../dummy-data";
import SearchBar from '../SearchBar/SearchBar';

export default class PostsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            search: "",
        };
    }

    componentDidMount = () => {
        this.setState({
            posts: dummyData
        })
    }

    addNewComment = (e, timestamp, addedComment) => {
        e.preventDefault();
        const newComment = {
            username: "jordan",
            text: addedComment
        };

        this.state.posts.filter(post => post.timestamp === timestamp)[0].comments.push(newComment);

        this.setState({
            ...this.state,
            posts: this.state.posts
        });
    }
    
    searchPosts = (e, searchValue) => {
        e.preventDefault();

        this.setState({
            ...this.state,
            search: searchValue
        })
    }

    render(){
        const filteredPosts = this.state.posts.filter(post => post.username.includes(this.state.search));

        const containers = filteredPosts.map((post, index) => {
            return <PostContainer key={index} post={post} addNewComment={this.addNewComment} />
        })

        return (
            <div className="PostPage">
                <SearchBar posts={this.state.posts} searchPosts={this.searchPosts} />
                {containers}
            </div>
            
        );
    }
}