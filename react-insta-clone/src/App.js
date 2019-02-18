import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import dummyData from "./dummy-data";

class App extends Component {
  constructor() {
    this.state = {
      posts: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.posts.map(post => {
          return <PostContainer post={post}/>
        })}
        
      </div>
    );
  }
}

export default App;
