import React, { Component } from 'react';
import './App.scss';

import PostsPage from "./components/PostContainer/PostsPage";
import dummyData from "./dummy-data";
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
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

  render() {
    const filteredPosts = this.state.posts.filter(post => post.username.includes(this.state.search));

    return (
      <div className="App">
        <SearchBar posts={this.state.posts} searchPosts={this.searchPosts} />
        <PostsPage filteredPosts={filteredPosts}/>
      </div>
    );
  }
}

export default App;