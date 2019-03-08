import React, {Component} from 'react';
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
    NavLink
} from "reactstrap";
import PropTypes from 'prop-types';
import {FormattedMessage} from "react-intl";
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

        const MenuWrapper = styled(Navbar)`
            background: #eeeeee;
        `;

        return (
                <MenuWrapper expand="md">
                    <NavbarBrand href="/"><FormattedMessage id="projectName" defaultMessage="Project Manhattan"/></NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        <SwitchLocale/>
                        {items.map((item) => {
                            if(item.hasSubItem) {
                                return(
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret >
                                    <FormattedMessage id={item.label} />
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        {item.subItems.map(subItem => <DropdownItem href={subItem.url}><FormattedMessage id={subItem.label} /></DropdownItem>)}
                                    </DropdownMenu>
                                </UncontrolledDropdown>)
                            } else {
                                return (
                                    <NavItem>
                                        <NavLink href={item.url}><FormattedMessage id={item.label} /></NavLink>
                                    </NavItem>
                                );
                            }
                        })}
                        </Nav>
                    </Collapse>
                </MenuWrapper>
        );
    }
}

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