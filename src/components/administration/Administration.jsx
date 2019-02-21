import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';
import NotFoundPage from '../NotFoundPage';
import SideBar from '../menu/SideBar';
import administrationMenu from '../menu/administrationMenu';
import AdministrationMainPage from './AdministrationMainPage';

const Div = styled.div`
    margin-left: 270px;
`;

class Administration extends React.Component {
    constructor(props) {
        super(props);
    }

    renderContent(menu, subMenu) {
        return (menu.map(menu => {
            if (menu.subItems.length === 0) {
                return (
                    <Route exact path={`${this.props.match.url}${menu.url}`} render={() => menu.name}/>
                )
            } else {
                let subMenu = menu.subItems;
                return this.renderContent(subMenu, true);
            }
        }));
    }

    render() {
        const renderSideBar = () => <SideBar menuItems={administrationMenu}/>;
        return (
            <div>
                <Route path={`${this.props.match.url}/`} render={renderSideBar}/>
                <Div>
                    <Switch>
                        <Route exact path={`${this.props.match.url}/`} component={AdministrationMainPage}/>
                        {this.renderContent(administrationMenu)}
                        <Route component={NotFoundPage}/>
                    </Switch>
                </Div>
            </div>
        )
    }
}

const mapSateToProps = state => state;

export default connect(mapSateToProps, null)(Administration);