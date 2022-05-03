import { IlanguageOptions, INavBarOption } from './types'

export const languageOptions: Array<IlanguageOptions> = [
  { label: 'static.language.uyghur', value: 'uy' },
  { label: 'static.language.chinese', value: 'zh' },
]
/**
 * 导航栏国际化
 */
export const navBarTitles:INavBarOption[] = [
  {
    key: '/pages/index/index',
    title: 'static.tabBar.home',
  },
  {
    key: '/pages/me/me',
    title: 'static.tabBar.me',
  },
  {
    key: '/pages/me/info',
    title: 'static.navBar.info',
  },
]
