import React, { Component } from 'react';
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    UncontrolledDropdown,
    NavItem,
    NavLink,
    Container
} from "reactstrap";

import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { FormattedMessage } from "react-intl";
import SwitchLocale from '../../intl/SwitchLocale';
import styled from "styled-components";

class HeaderMenu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const { items } = this.props;

        return (
            <MenuWrapper expand="md" dark>
                <Container>
                    <MenuBrand href="/"><FormattedMessage id="projectName" defaultMessage="Project Manhattan" /></MenuBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <MenuNav className="ml-auto" navbar>
                            <SwitchLocale />
                            {items.map((item) => {
                                if (item.hasSubItem) {
                                    return (this.renderDropDownMenu(item));
                                } else {
                                    return (this.renderNavItemMenu(item));
                                }
                            })}
                        </MenuNav>
                    </Collapse>
                </Container>
            </MenuWrapper>
        );
    }

    renderNavItemMenu = (item) => (
        <NavItem key={item.id}>
            <MenuLink tag={Link} to={item.url}><FormattedMessage id={item.label} /></MenuLink>
        </NavItem>
    );

    renderDropDownMenu = (item) => (
        <UncontrolledDropdown nav inNavbar key={item.id}>
            <DropDownLink nav caret >
                <FormattedMessage id={item.label} />
            </DropDownLink>
            <DropdownMenu right>
                {item.subItems.map(subItem => <DropdownItem tag={Link} key={subItem.component} to={subItem.url}><FormattedMessage id={subItem.label} /></DropdownItem>)}
            </DropdownMenu>
        </UncontrolledDropdown>
    );
}

const MenuWrapper = styled(Navbar)`
    background: #ed7679;
    height: 50px;
`;

const MenuBrand = styled(NavbarBrand)`
    color: white;
    text-transform: uppercase;
    :hover {
        color: #ffffff;
    }
`;

const MenuNav = styled(Nav)`

`;

const MenuLink = styled(NavLink)`
    color: white;
    :hover {
        color: red;
    }
`;

export const DropDownLink = styled(DropdownToggle)`
    color: white;
`;

HeaderMenu.propTypes = {
    light: PropTypes.bool,
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

export default HeaderMenu;