import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

function mapStateToProps(state) {
    const {currentLocale, messages} = state.intl;
    return {locale: currentLocale, messages};
}

export default connect(mapStateToProps)(IntlProvider);
