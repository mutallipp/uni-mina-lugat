import { useStore } from '@/store'
import { createI18n } from 'vue-i18n'
import { SettingGetterType } from '@/store/modules/setting/constants/getter'
import { LangType } from '@/store/modules/setting/types/state'
import uyLocale from './uy/index'
import zhLocale from './zh/index'

export { useI18n } from 'vue-i18n'

const store = useStore()

const messages = {
  uy: {
    ...uyLocale,
  },
  zh: {
    ...zhLocale,
  },
}

/**
 * 获取当前的语言
 */
export function getLanguage (): LangType {
  const chooseLanguage = uni.getStorageSync('language') && JSON.parse(uni.getStorageSync('language')) || ''
  if (chooseLanguage) return chooseLanguage
  if (store.getters[SettingGetterType.SELECT_LANG]) return store.getters[SettingGetterType.SELECT_LANG]
  return 'zh'
}
/**
 * 创建i18n实例
 */
const i18n = createI18n({
  locale: getLanguage(),
  messages,
})
export default i18n
