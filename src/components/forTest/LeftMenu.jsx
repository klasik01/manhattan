/*
import React, {Component} from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import SideNav, {NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import {FaHome} from 'react-icons/fa';
import {Route} from "react-router-dom";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {FormattedMessage} from 'react-intl';


class LeftMenu extends Component {


    renderIcon = (name) => {

        return (<FaHome style={{fontSize: '1.75em'}}/>);
    }

    renderMenuItem = (menu, subMenu) => {

        return (
            <NavItem eventKey={menu.url} key={menu.id}>
                <NavIcon>
                    {menu.icon.length > 0 ? this.renderIcon(menu.icon) : null}
                </NavIcon>
                <NavText>
                    <FormattedMessage id={menu.label}/>
                </NavText>
                {menu.subItems.map((subItem) => this.renderMenuItem(subItem, true))}
            </NavItem>
        )
    };

    render() {
        return (
            <LeftMenuWrapper style={{
                margin: 0,
                top: '50px',
                float: 'left',
                height: 'calc(100vh - 50px)'
            }}>
                <Route render={({location, history}) => (
                    <React.Fragment>
                        <SideNav
                            onSelect={(selected) => {
                                const to = '/' + selected;
                                if (location.pathname !== to) {
                                    history.push(to);
                                }
                            }}>
                            <SideNav.Toggle/>
                            <SideNav.Nav defaultSelected="blog/">
                                {this.props.data.map(item => this.renderMenuItem(item, null))}
                            </SideNav.Nav>
                        </SideNav>
                        {this.props.children}
                    </React.Fragment>
                )}
                />
            </LeftMenuWrapper>
        )
    }
}

const LeftMenuWrapper = styled.div`
    margin: 0;
`;

export default LeftMenu;*/
