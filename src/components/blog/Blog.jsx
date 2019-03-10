import React, { Component } from 'react';
import { Route, Switch, withRouter, Link } from "react-router-dom";

import Welcome from '../Welcome';
import { Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import LeftMenu from '../menu/LeftMenu';

import blogMenu from './blogMenu';
import NotFoundPage from '../NotFoundPage';

class Blog extends Component {

    render() {
        return (
            <div>
                <LeftMenu data={blogMenu}>
                    <Container>
                        <main>
                            <Switch>
                                <Route path="/blog/" exact component={props => <Welcome />} />
                                <Route path="/blog/home" component={props => <Welcome />} />
                                <Route path="/blog/devices" component={props => <Welcome />} />
                                <Route component={NotFoundPage} />
                            </Switch>
                        </main>
                    </Container>
                </LeftMenu>
            </div>
        );
    }
}

export default Blog;