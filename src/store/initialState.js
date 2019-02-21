import labels from '../messages/labels.json';

const locales = ['cs', 'en', 'sk'];

const currentLocale = 'en';

const initialState = {
    intl: {
        locales,
        currentLocale: currentLocale,
        messages: labels[currentLocale]
    }
};

export default initialState;