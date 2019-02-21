import React from 'react';

export default class Login extends React.Component {
    state = {
        user: '',
        password: ''
    }

    handleChanges = e => this.setState({[e.target.name]: e.target.value});

    signIn = e => {
        e.preventDefault();
        localStorage.setItem('user', this.state.user);
        // localStorage.setItem('password', this.state.password);
        window.location.reload();
    }

    render(){
        return(
            <div className="LoginPage">
                <form>
                    <input 
                        type="text" 
                        placeholder="Username"
                        value={this.state.user}
                        name="username"
                        onChange={this.handleChanges}
                    />
                    
                    <input 
                        type="text" 
                        placeholder="Username"
                        value={this.state.password}
                        name="username"
                        onChange={this.handleChanges}
                    />
                    <button onClick={this.signIn}>Login</button>
                </form>
            </div>
        );
    }
}