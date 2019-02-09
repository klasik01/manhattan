import * as React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router';
import profile from 'src/reducers/profile';
import { connect} from 'react-redux';
import LoginPage from './LoginPage';

class App extends React.Component {

    render() {

        const Main = styled.div`
            && html {
                font-size: 12px;
            }
            && body {
                background-color: navy;
                margin: 5px 5px;
            }

            color: pink;
        `;

        return (
            <Main>
                {this.props.authState && <Route exact path="*" component={LoginPage}}
            
                <Switch>
                    <Route exact path='/' />
                    <Route path='/about' />
                    <Route path='/test' />
                </Switch>
            </Main>
        );
    }
}

const mapStateToProps = state => {
    return {
        authState: profile.authState,
    }
}

export default connect(mapStateToProps)(App);