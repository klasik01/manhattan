import React from 'react';
import { connect} from "react-redux";
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import MenuItem, { MenuCollapse} from "./Menu";

const Nav = styled.div`
    min-width: 250px;
    max-width: 250px;
    background-color: #eeeeee;
    border-right: 1px solid #000000;
    min-height: 250px;
    padding-top: 15px;
    float:left;
    top: 80px;
`;

class SideBar extends React.Component {
    constructor(props) {
        super(props);

        this.buildMenu = this.buildMenu.bind(this);
    }

    buildMenu(menu, subMenu) {
        return (menu.map(menu => {
            if (menu.subItems.length === 0) {
                return (
                    <MenuItem item={menu} subMenu={subMenu}/>
                )
            } else {
                let subMenu = menu.subItems;
                return (
                    <MenuCollapse item={menu}>
                        {this.buildMenu(subMenu, true)}
                    </MenuCollapse>
                );
            }
        }));
    }

    render() {
        return (
            <Nav className="">
                <div className="">
                    {this.buildMenu(this.props.menuItems)}
                </div>
            </Nav>
        );
    }
}

const mapStateToProps = state => state;

export default withRouter(connect(mapStateToProps, null)(SideBar));