import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setCurrentLocale} from '../reducers/intlReducer';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";

class SwitchLocale extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false
        };
    }

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render() {
        const {locales, setCurrentLocale} = this.props;
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>Language</DropdownToggle>
                <DropdownMenu>
                    {locales.map((locale, key) => <DropdownItem key={key}
                        onClick={() => setCurrentLocale(locale)}>{locale}</DropdownItem>)}
                </DropdownMenu>
            </Dropdown>
        );
    }
}

const mapStateToProps = state => ({
    currentLocale: state.intl.currentLocale,
    locales: state.intl.locales
})


export default connect(mapStateToProps, {setCurrentLocale})(SwitchLocale)