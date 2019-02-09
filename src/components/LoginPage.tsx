import React from 'react';

class LoginPage extends React.Component {


    loginHandler = () => {
        console.log("Login button clicked");
    }

    render() {
        return (
            <div>
                <h1>Login page</h1>
                <button onClick={this.loginHandler}>Login</button>
            </div>
        );
    }
}