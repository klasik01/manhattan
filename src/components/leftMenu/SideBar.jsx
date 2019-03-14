import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {IoIosCloseCircle} from "react-icons/io";
import menu from "../blog/blogMenu";
import SideBarItems from "./SideBarItems";
import styled from "styled-components";
import {Route} from "react-router-dom";
import PropTypes from 'prop-types';

class SideBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: '/blog/',
        }
    }

    componentDidMount() {
        console.log(this.state.selected);
        console.log(this.props.defaulSelected);
        if (this.state.selected === '') {
            console.log(this.state.selected);
            this.setState({selected: this.props.defaultSelected})
        }
    }

    render() {

        const {open, onClose, width} = this.props;

        const {selected} = this.state;

        return (
            <Route render={({location, history}) => (
                <React.Fragment>
                    {console.log(location)}
                    {console.log(history)}
                    <SideNav id="mySidenav" open={open} width={width}
                             onSelect={(selected) => {
                                 const to = '/' + selected;
                                 if (location.pathname !== to) {
                                     history.push(to);
                                 }
                             }} >
                        <SideNavBrand>
                            <SideNavBrandHeader>Blog Menu</SideNavBrandHeader>
                            <SideNavBrandClose onClick={onClose}><IoIosCloseCircle
                                style={{fontSize: '33px'}}/></SideNavBrandClose>
                        </SideNavBrand>
                        <div className="clearfix"></div>

                        <SideNavToggle>
                            <SideNavItemList className="list-group">
                                {menu.map(item => {
                                    return <SideBarItems item={item} key={item.id} selected={selected}/>
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
            )} />
        );
    }
}

SideBar.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    defaulSelected: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
};


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
    width: ${props => props.open ? '200px' : '0'};
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
    margin-left: ${props => props.open ? '200px': '0'};
`;

export default SideBar;