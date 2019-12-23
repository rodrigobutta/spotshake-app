import LocalizedStrings from 'react-native-localization';

export const LANGUAGES = ['en', 'es', 'fr'];

const strings = new LocalizedStrings({
  en: {
    hello: 'Hello',
  },
  es: {
    hello: 'Hola',
  },
  fr: {
    hello: 'Bonjour',
  },
});

export default strings;
