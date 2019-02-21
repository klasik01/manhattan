import React, {Component} from 'react';
import logo from './logo.svg';
import SwitchLocale from "./intl/SwitchLocale";
import styled from 'styled-components';
import {connect} from "react-redux";
import {Route, Switch, withRouter} from 'react-router-dom';
import GlobalStyle from "./theme/globalStyle";
import Header from './components/Header';
import TopBar from './components/TopBar';
import Welcome from './components/page/Welcome';
import Login from './components/Login';
import Administration from "./components/administration/Administration";
import NotFoundPage from "./components/NotFoundPage";
import LeftSideBar from "./components/LeftSideBar";
import {withStyles} from "@material-ui/core";
import PropTypes from "prop-types";

const Main = styled.div`
  padding: 15px 20px;
  background-color: #ffffff;
`;

const AppWrapper = styled.div`
  
`;

const styles = theme => ({
    root: {
        display: 'flex',
    }});

class App extends Component {
    render() {

        const {classes, theme} = this.props;

        const isLogged = this.props.isLogged;
        if (isLogged) {
            return <Route path="*" exact component={Login}/>
        }
        return (
            <AppWrapper className={`container-fluid ${classes.root}`} >
                <GlobalStyle/>
                <LeftSideBar />
                <Main>
                    <Switch>
                        <Route exact path="/" component={Welcome}/>
                        <Route exact path="/administration" component={Administration}/>
                        <Route component={NotFoundPage}/>
                    </Switch>
                </Main>
            </AppWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    isLogged: state.profile.isLogged
});

App.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withRouter(connect(mapStateToProps)(withStyles(styles, {withTheme: true}))(App));
