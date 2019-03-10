import React, { Component } from 'react';
import { connect } from "react-redux";
import { authenticate } from "../actions/actionProfile";
import { FormattedMessage } from 'react-intl';
import { LoginWrapper, FormWrapper } from './styledSignInUp';
import { NavLink } from 'reactstrap';


class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isSignUp: false,
        }
    }

    handlerSignIn = () => {
        this.props.authenticate(true);
    }

    handlerSwitchSignInUp = () => {
        this.setState({ isSignUp: !this.state.isSignUp });
    }

    render() {
        if (this.state.isSignUp) {
            return (this.renderSignUp());
        }
        return (this.renderSignIn());

    }

    renderSignUp() {
        return (
            <LoginWrapper>
                <FormWrapper>
                    <form method="post">
                        <h2 className="text-center"><FormattedMessage id="register.header" /></h2>
                        <div className="form-group">
                            <input className="form-control" type="email" name="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="password" name="password" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="password" name="passwordAgain" placeholder="Password again" />
                        </div>
                        <div className="form-group"></div>
                        <div className="form-group">
                            <span>
                                <label className="control-label checkbox-inline">
                                    <input type="checkbox" />
                                    <FormattedMessage id="register.licence.plate" />
                                </label>
                            </span>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block" type="submit" onClick={this.handlerSwitchSignInUp}>
                                <FormattedMessage id="register.header" />
                            </button>
                        </div>
                        <NavLink href="#" onClick={this.handlerSwitchSignInUp} className="already"><FormattedMessage id="register.redirectLogin" /></NavLink>
                    </form>
                </FormWrapper>
            </LoginWrapper>
        )
    }

    renderSignIn() {
        return (
            <LoginWrapper>
                <FormWrapper>
                    <form method="post">
                        <h2 className="text-center"><FormattedMessage id="login.header" /></h2>
                        <div className="form-group">
                            <input className="form-control" type="email" name="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="password" name="password" placeholder="Heslo" />
                        </div>
                        <div className="form-group"></div>
                        <div className="form-group">
                            <span>
                                <label className="control-label checkbox-inline">
                                    <input type="checkbox" />
                                    <FormattedMessage id="login.pernament.login" />
                                </label>
                            </span>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block" type="submit" onClick={this.handlerSignIn}>
                                <FormattedMessage id="login.header" />
                            </button>
                        </div>
                        <NavLink href="#" onClick={this.handlerSwitchSignInUp} className="already"><FormattedMessage id="login.register" /></NavLink>
                    </form>
                </FormWrapper>
            </LoginWrapper>
        );
    }
};




const mapStateToProps = state => ({
    profile: state.profile.profile
});

export default connect(mapStateToProps, { authenticate })(Login);