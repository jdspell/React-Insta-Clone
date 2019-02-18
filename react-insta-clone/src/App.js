import React, { Component } from 'react';
import './App.css';

import dummyData from "./dummy-data";
import PostContainer from './components/PostContainer/PostContainer';

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
        {containers}
      </div>
    );
  }
}

export default App;