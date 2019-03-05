import React, { Component } from 'react';
import GlobalStyle from './theme/globalStyle';
import {Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {authenticate} from "./actions/actionProfile";
import styled from "styled-components";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import NotFoundPage from "./components/NotFoundPage";


const Main = styled.div`
  padding: 15px 20px;
  background-color: #ffffff;
`;

const AppWrapper = styled.div`
`;

class App extends Component {

  render() {
    const isLogged = this.props.isLogged;
    if (!isLogged) {
      return <Route path="*" exact component={Login} />;
    }
    return (
      <AppWrapper>
        <GlobalStyle />
        <Main>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route component={NotFoundPage} />
          </Switch>
        </Main>
      </AppWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogged: state.profile.isLogged,
});

export default withRouter(connect(mapStateToProps, { authenticate })(App));
