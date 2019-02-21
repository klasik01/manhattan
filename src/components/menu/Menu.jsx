import React from 'react';
import styled, {css} from 'styled-components';
import { NavLink, withRouter} from "react-router-dom";

const Link = css`
    :visited,
    :link {
        color: #000000;
        }
    :active,
    :hover {
        background-color: #ffcc33;
    }
    
    &.$('nav-item-active') {
        background-color: #ffcc33;
    }
`;

const LinkItem = styled(NavLink)`
    ${Link};
    ${props => props.subMenu ? "padding-left: 30px" : ""};
    ${props => props.subMenu ? "background-color: #fafafa" : ""};
`;

const Collapse = styled.div``;

const CollapseLink = styled.a`
    ${Link};
`;

class MenuItem extends React.Component {
    render() {
        return (
            <LinkItem to={`${this.props.match.url}${this.props.item.url}`} className="nav-link" subMenu={this.props.subMenu} activeClassName="nav-item-active">
                {this.props.item.name}
            </LinkItem>
        )
    }
}

export class MenuCollapse extends React.Component {
    render() {
        return (
            <div>
                <CollapseLink href={`#${this.props.item.url}`} className="nav-link dropdown-toggle" data-toggle="" aria-expanded="true" aria-controls={this.props.item.url}>
                    {this.props.item.name}
                </CollapseLink>
                <Collapse id={this.props.item.url} className="" >
                    {this.props.children}
                </Collapse>
            </div>
        )
    }
}

export default withRouter(MenuItem);