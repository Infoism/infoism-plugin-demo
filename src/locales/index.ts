import i18next from 'i18next'

import zh_default from './zh-cn/default.json'
import en_default from './en/default.json'

// init i18n
const resources = {
  zh: {
    default: zh_default
  },
  en: {
    default: en_default
  }
}

i18next.init({
  lng: 'zh',
  debug: true,
  resources,
  defaultNS: 'default'
})

export default i18next
