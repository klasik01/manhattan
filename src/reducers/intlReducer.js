import labels from '../messages/labels.json';

const SET_CURRENT_LOCALE = 'SET_CURRENT_LOCALE';

export const intl = (state = {}, actions) => {
    switch (actions.type) {
        case SET_CURRENT_LOCALE: {
            const {locale} = actions.payload;
            return Object.assign({}, state, {currentLocale: locale, messages: labels[locale]});
        }
        default:
            return state;
    }
};

export const setCurrentLocale = (locale) => ({
    type: SET_CURRENT_LOCALE,
    payload: {locale},
});