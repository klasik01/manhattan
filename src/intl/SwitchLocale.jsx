import React from 'react';
import { connect } from 'react-redux';
import { setCurrentLocale } from '../reducers/intlReducer';

const SwitchLocale = ({ locales, setCurrentLocale }) => (
    <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" type="button" data-toogle="dropdown">Language<span
            className="caret"></span></button>
        <ul className="dropdown-menu">
            {locales.map((locale, key) => <li><a className="dropdown-item"
                                                 onClick={() => setCurrentLocale(locale)}>{locale}</a></li>)}
        </ul>
    </div>
);

export default connect(state => ({
    currentLocale: state.intl.currentLocale,
    locales: state.intl.locales,
}), {setCurrentLocale})(SwitchLocale)