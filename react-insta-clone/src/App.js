import React, { Component } from 'react';
import './App.scss';

import PostsPage from "./components/PostContainer/PostsPage";
import withAuthenticate from "./components/authentication/authenticate";
import Login from './components/Login/Login';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

class App extends Component {

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}


export default App;