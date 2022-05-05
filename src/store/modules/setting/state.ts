import { ISettingState } from './types/state'

/**
 * 用户相关应用状态
 */
export const settingState: ISettingState = {
  /**
    * 配置信息
    */
  baseConfig: {
    env: 1, // 1->dev,2->prod
    baseColor: '#3366ff',
  },
  /**
   * 底部导航栏
   */
  tabBarOption: {
    tabBarList: [
      {
        pagePath: '/pages/me/me',
        text: 'static.tabBar.me',
        icon: 'contact',
      },
      {
        pagePath: '/pages/index/index',
        text: 'static.tabBar.home',
        icon: 'wap-home-o',
      },
    ],
    active: 1,
  },
  systemInfo: {
    brand: '',
    model: '',
    screenWidth: 0,
    screenHeight: 0,
  },
  language: 'uy',
  messageList: [],

}
