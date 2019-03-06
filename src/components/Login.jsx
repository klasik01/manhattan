import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from "react-redux";
import {authenticate} from "../actions/actionProfile";


class Login extends Component {

    handlerSignIn = () => {
        this.props.authenticate(true);
    }

    render() {
        return (
            <div>
                Login page...
                <button onClick={this.handlerSignIn} className="btn btn-lg btn-info">Sign In</button>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    profile: state.profile.profile
});

export default connect(mapStateToProps, {authenticate})(Login);