import React from 'react';

const withAuthenticate = PostsPage => Login => 
    class extends React.Component {
        constructor() {
            super();
            this.state ={
                loggedIn: false,
            }
        }

        componentDidMount(){
            if(localStorage.getItem('user')) {
                this.setState({ loggedIn: true})
            }
        }

        render(){
            {this.state.loggedIn ? <PostsPage /> : <Login />}
        }
    };

export default withAuthenticate;