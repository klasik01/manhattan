import React, {Component} from 'react';
import {Col, Container, Row} from 'reactstrap';
import SideBar from "../leftMenu/SideBar";

import blogMenu from './blogMenu';
import {Route, Switch} from "react-router-dom";
import Welcome from "../Welcome";
import NotFoundPage from "../NotFoundPage";

class Blog extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        }
    }

    closeMenu = () => {
        this.setState({isOpen: false});
    }

    openMenu = () => {
        this.setState({isOpen: true});
    }

    render() {

        const {isOpen} = this.state;

        return (
            <Container>
                <Row>
                    <Col>
                        <SideBar data={blogMenu} open={isOpen} onClose={this.closeMenu} defaulSelected="/blog/" width="250px">
                            <h2>{!isOpen ? <span onClick={this.openMenu}>&#9776;</span> : null} Sidenav Push
                                Example</h2>

                            <Switch>
                                <Route path="/blog/first" component={Welcome}/>
                                <Route path="/blog/second/first" component={NotFoundPage}/>
                                <Route path="/blog/second/second" component={Welcome}/>
                                <Route component={NotFoundPage}/>
                            </Switch>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla turpis magna, cursus sit
                                amet, suscipit a, interdum id, felis. Nulla pulvinar eleifend sem. Integer in sapien.
                                Aliquam erat volutpat. Aliquam in lorem sit amet leo accumsan lacinia. Nullam dapibus
                                fermentum ipsum. Quisque porta. Fusce suscipit libero eget elit. Sed convallis magna eu
                                sem. Et harum quidem rerum facilis est et expedita distinctio. Morbi imperdiet, mauris
                                ac auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus in lacus.
                            </p>
                            <p>
                                In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Class aptent taciti
                                sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Proin in tellus
                                sit amet nibh dignissim sagittis. Mauris elementum mauris vitae tortor. Nullam dapibus
                                fermentum ipsum. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam,
                                tempor suscipit diam nulla vel leo. Temporibus autem quibusdam et aut officiis debitis
                                aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae
                                non recusandae. Cras elementum. Aenean id metus id velit ullamcorper pulvinar. Donec
                                quis nibh at felis congue commodo. Cum sociis natoque penatibus et magnis dis parturient
                                montes, nascetur ridiculus mus.
                            </p>
                        </SideBar>
                    </Col>
                </Row>
            </Container>
        );
    }
}


export default Blog;