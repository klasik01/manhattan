import React, {Component} from 'react';
import GlobalStyle from './theme/globalStyle';
import {Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {authenticate, fetchProfileData} from "./actions/actionProfile";
import styled from "styled-components";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import NotFoundPage from "./components/NotFoundPage";

import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMenu from "./components/menu/NavbarMenu";
import {Spinner} from "reactstrap";

const Main = styled.div`
  padding: 15px 20px;
  background-color: #ffffff;
`;

const AppWrapper = styled.div`
`;

const SpinnerWrapper = styled.div`
    padding: 20px;
    margin: 0 auto;
`;

class App extends Component {

    componentWillMount() {
        this.props.fetchProfileData("test");

    }

    render() {
        const {isLogged, loading} = this.props;
        if (!isLogged) {
            return <Route path="*" exact component={Login}/>;
        }

        if (loading) {
            return (
                <SpinnerWrapper>
                    <Spinner color="danger"/>
                </SpinnerWrapper>
            )
        }

        return (
            <AppWrapper>
                <GlobalStyle/>
                <NavbarMenu/>
                <Main>
                    <Switch>
                        <Route exact path="/" component={Welcome}/>
                        <Route component={NotFoundPage}/>
                    </Switch>
                </Main>
            </AppWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    isLogged: state.profile.isLogged,
    loading: state.profile.loading
});

export default withRouter(connect(mapStateToProps, {authenticate, fetchProfileData})(App));
