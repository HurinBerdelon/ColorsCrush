const path = require('path')

module.exports = {
    i18n: {
        locales: ['en', 'pt-BR', 'fr', 'es'],
        defaultLocale: 'en',
        localePath: path.resolve('./public/locales')
    }
}