import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

console.log('Setting up plugin');

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'es',
    messages: {
      'en': require('~/assets/locales/en.json'),
      'es': require('~/assets/locales/es.json')
    }
  })

  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${app.i18n.locale}/${link}`
  }
}