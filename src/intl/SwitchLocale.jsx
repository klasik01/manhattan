import React from 'react';
import { connect } from 'react-redux';
import { setCurrentLocale } from '../reducers/intlReducer';

const SwitchLocale = ({locales, setCurrentLocale}) => (
  <li className="nav-item dropdown" id="basic-nav-dropdown">
      <a className="nav-link dropdown-toggle" data-toogle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
      <div className="dropdown-menu">
          {locales.map((locale, key) => <a className="dropdown-item" onClick={() => setCurrentLocale(locale)}>{locale}</a>)}
      </div>
  </li>
);

export default connect(state => ({
    currentLocale: state.intl.currentLocale,
    locales: state.intl.locales,
}), { setCurrentLocale})(SwitchLocale)