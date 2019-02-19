import React, { Component } from 'react';
import './App.scss';

import dummyData from "./dummy-data";
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }
  render() {
    const containers = this.state.posts.map(post => {
      return <PostContainer post={post}/>
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