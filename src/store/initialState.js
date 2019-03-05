import labels from '../messages/labels.json';

const locales = ['en', 'sk', 'cs', 'de', 'fr'];

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
const locale = (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage || navigator.browserLanguage;

// Split locales with a region code
const languageWithoutRegionCode = locale.toLowerCase().split(/[_-]+/)[0];

// Try full locale, fallback to locale without region code, fallback to en
const messages = labels[languageWithoutRegionCode] || labels[locale] || labels.en;

/**
 * Initial values of important properties
 */
const initialState = {
  intl: {
    locales,
    currentLocale: locale,
    messages,
  }
};

export default initialState;
