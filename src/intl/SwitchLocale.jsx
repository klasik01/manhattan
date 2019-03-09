import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setCurrentLocale} from '../reducers/intlReducer';
import {DropdownItem, DropdownMenu, UncontrolledDropdown} from "reactstrap";
import { FormattedMessage } from 'react-intl';
import { DropDownLink } from '../components/menu/HeaderMenu';

class SwitchLocale extends Component {

    render() {
        const {locales, setCurrentLocale} = this.props;
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropDownLink nav caret >
                <FormattedMessage id="language" defaultMessage="Language" />
                </DropDownLink>
                <DropdownMenu right>
                    {locales.map((locale, key) => <DropdownItem key={key}
                        onClick={() => setCurrentLocale(locale)}><FormattedMessage id={locale} defaultMessage={locale} /></DropdownItem>)}
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }
}

const mapStateToProps = state => ({
    currentLocale: state.intl.currentLocale,
    locales: state.intl.locales
})


export default connect(mapStateToProps, {setCurrentLocale})(SwitchLocale)