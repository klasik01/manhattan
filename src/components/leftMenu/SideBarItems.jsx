import React, {Component} from 'react';
import {FormattedMessage} from "react-intl";
import {Collapse} from "reactstrap";
import {Link} from "react-router-dom";
import styled from "styled-components";

class SideBarItems extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: true,
        }
    }

    renderSubMenu = (item) => {
        const {open} = this.state;

        return (
            <SideNavItem>
                <span href="#"
                      onClick={() => this.setState({open: !open})}
                      aria-expanded={open}
                      aria-controls={item.id}>

                    <span><FormattedMessage id={item.label}/></span>
                </span>
                <Collapse isOpen={open}>
                    <SideNavSubItems id={item.id}>
                        <ul>
                            {item.subItems.map(subItem => {
                                return (
                                    <SideNavSubItem key={subItem.id} className={``}>
                                        <Link to={subItem.url}>
                                            <FormattedMessage
                                                id={subItem.label}/>
                                        </Link>
                                    </SideNavSubItem>
                                )
                            })}
                        </ul>
                    </SideNavSubItems>
                </Collapse>
            </SideNavItem>
        );
    }

    renderOneLink = (item) => {
        return (
            <SideNavItem>
                <Link to={item.url}>
                    <FormattedMessage
                        id={item.label}/>
                </Link>
            </SideNavItem>
        );
    }

    render() {
        const {item, onSelected} = this.props;
        if (item.subItems.length > 0) {
            return this.renderSubMenu(item);
        } else {
            return this.renderOneLink(item);
        }
    }

}

const SideNavItem = styled.li`
    color: black;
    font-weight: normal;
    
    :hover {
        cursor: pointer;
    }
    
    && .active {
        font-weight: bold;
        color: orange;
    }
    
`;

const SideNavSubItem = styled.li`
    font-weight: normal;
    list-style-type: none;
    text-decoration: none;
    
    :hover {
        font-weight: bold;
        color: orange;
    }
    
    && .active {
        font-weight: bold;
        color: orange;
    }
`;

const SideNavSubItems = styled.div`
    
`;

export default SideBarItems;