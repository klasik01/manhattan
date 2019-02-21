import React, { Component } from 'react';
import logo from './logo.svg';
import SwitchLocale from "./intl/SwitchLocale";
import styled from 'styled-components';
import {connect} from "react-redux";
import { Route, Switch, withRouter } from 'react-router-dom';
import GlobalStyle from "./theme/globalStyle";

const Main = styled.div`
  padding: 15px 20px;
  background-color: #ffffff;
`;

const AppWrapper = styled.div`
  
`;

class App extends Component {
  render() {

    const isLogged = this.props.isLogged;
    if(!isLogged) {
      return <Route path="*" exact component={Login} />
    }
    return (
      <AppWrapper className="container-fluid">
        <GlobalStyle />
        <Header />
        <TopBar />
        <Main>
          <Switch>
            <Route exact path ="/" component={Welcome} />
          </Switch>
        </Main>
      </AppWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
   isLogged: state.profile.isLogged
});

export default withRouter(connect(mapStateToProps)(App));
