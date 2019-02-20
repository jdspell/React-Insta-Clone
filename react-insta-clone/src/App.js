import React, { Component } from 'react';
import './App.scss';

import dummyData from "./dummy-data";
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
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
  

  render() {
    const containers = this.state.posts.map(post => {
      return <PostContainer post={post} addNewComment={this.addNewComment} />
    })
    return (
      <div className="App">
      <SearchBar />
        {containers}
      </div>
    );
  }
}

export default App;