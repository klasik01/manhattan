import * as React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router';

import PageInterface from '../PageInterface';

class App extends React.Component<PageInterface, {}> {

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
                <Switch>
                    <Route exact path='/' />
                    <Route path='/about' />
                    <Route path='/test' />

                </Switch>
                <div>
                <h1>Welcome to React</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam dolorem pariatur repellat laudantium quam inventore ab culpa perferendis, iure excepturi! Voluptate eius exercitationem possimus tenetur alias qui animi dignissimos culpa.</p>
                <p>The Color of this page is: {this.props.color}</p>
                </div>
                
            </Main>
        );
    }
}

export default App;