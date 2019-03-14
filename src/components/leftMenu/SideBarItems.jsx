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

    renderSubMenu = (item, selected) => {
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
                                {console.log(selected + " - " + subItem.url)}
                                return (

                                    <SideNavSubItem key={subItem.id} active={subItem.url === selected ? true : false}>
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

    renderOneLink = (item, selected) => {
        console.log(selected + " - " + item.url);
        return (

            <SideNavItem active={item.url === selected ? true : false}>
                <Link to={item.url}>
                    <FormattedMessage
                        id={item.label}/>
                </Link>
            </SideNavItem>
        );
    }

    render() {
        const {item, selected} = this.props;
        if (item.subItems.length > 0) {
            return this.renderSubMenu(item, selected);
        } else {
            return this.renderOneLink(item, selected);
        }
    }

}

const SideNavItem = styled.li`
    color: black;
    font-weight: normal;
    
    :hover {
        cursor: pointer;
    }
    
    ${props => props.active && `
        font-weight: bold;
        color: orange;
    `}
    
`;

const SideNavSubItem = styled.li`
    font-weight: normal;
    list-style-type: none;
    text-decoration: none;
    
    :hover {
        font-weight: bold;
        color: orange;
    }
    
     ${props => props.active && `

        font-weight: bold;
        color: orange;
    `}
`;

const SideNavSubItems = styled.div`
    
`;

export default SideBarItems;