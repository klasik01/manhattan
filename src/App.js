import React, { Component } from 'react';
import GlobalStyle from './theme/globalStyle';
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { authenticate, fetchProfileData } from "./actions/actionProfile";
import styled from "styled-components";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import NotFoundPage from "./components/NotFoundPage";
import MainMenu from "./components/menu/MainMenu";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from "reactstrap";
import Footer from './components/Footer';

const Main = styled.div`
  padding: 15px 20px;
  background: #f1f7fc;
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
        const { isLogged, loading } = this.props;
        if (!isLogged) {
            return (
                <Main>
                    <Route path="*" exact component={Login} />
                </Main>);
        }

        if (loading) {
            return (
                <Main>
                    <SpinnerWrapper>
                        <Spinner color="danger" />
                    </SpinnerWrapper>
                </Main>
            )
        }

        return (
            <AppWrapper>
                <GlobalStyle />
                <MainMenu />
                <Main>
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </Main>
                <Footer />
            </AppWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    isLogged: state.profile.isLogged,
    loading: state.profile.loading
});

export default withRouter(connect(mapStateToProps, { authenticate, fetchProfileData })(App));
