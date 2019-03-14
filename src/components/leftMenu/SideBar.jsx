import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {IoIosCloseCircle} from "react-icons/io";
import menu from "./blogMenu";
import SideBarItems from "./SideBarItems";
import styled from "styled-components";
import {Route} from "react-router-dom";

class SideBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            defaultSelected: '/blog',
            selected: '',
        }
    }

    render() {

        const {open, onClose, defaultSelected} = this.props;

        return (
            <Route>
            <React.Fragment>
                <SideNav id="mySidenav" open={open} >
                    <SideNavBrand>
                        <SideNavBrandHeader>Blog Menu</SideNavBrandHeader>
                        <SideNavBrandClose onClick={onClose}><IoIosCloseCircle style={{fontSize: '33px'}}/></SideNavBrandClose>
                    </SideNavBrand>
                    <div className="clearfix"></div>

                    <SideNavToggle>
                        <SideNavItemList className="list-group">
                            {menu.map(item => {
                                return <SideBarItems item={item} key={item.id}/>
                            })}
                        </SideNavItemList>
                    </SideNavToggle>
                </SideNav>


                <PageMain id="main" open={open}>
                    <Breadcrumb>
                        <BreadcrumbItem>Hello</BreadcrumbItem>
                        <BreadcrumbItem>Hello</BreadcrumbItem>
                    </Breadcrumb>
                    {this.props.children}
                </PageMain>
            </React.Fragment>
    </Route>
        );
    }
}



const SideNavBrand = styled.div`
    position: relative;
    padding: 10px 20px;
    display: block;
    transition: 0.5s;
    border-top: 1px solid black;
`;

const SideNavBrandHeader = styled.span`
    float: left;
    font-size: 25px;
`;

const SideNavBrandClose = styled.span`
    float: right;
    font-size: 36x;
    color: #ed7679;
    
    :hover {
        transform: skew(1.2);
        cursor: pointer;
    }
`;

const SideNavToggle = styled.div`
    margin-top: 10px;
`;

const SideNavItemList = styled.ul`
    
`;

const SideNavItem = styled.div`
    display: block;

     a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        display: block;
        transition: 0.3s;
    }
    
    a:hover,
    a:active {
        color: #151515;
    }
`;

const SideNav = styled.div`
    height: 100%;
    width: ${props => props.open ? '250px' : '0'};
    position: relative;
    z-index: 1;
    float: left;
    overflow-x: hidden;
    transition: 0.5s;
    border-right: 1px solid black; 
    `;

const PageMain = styled.div`
    transition: margin-left .5s;
    padding: 16px;
    margin-left: ${props => props.open ? '250px' : '0'};
`;

export default SideBar;