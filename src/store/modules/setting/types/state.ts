/**
 * 配置信息
 */
export interface IBaseConfig {
  /**
   * 环境
   * 1->dev,2->prod
   */
  env:number,
  /**
   * 主题颜色
   */
  baseColor:string
}
/**
 * 底部导航栏item
 */
export interface ITabBarItem {
  pagePath:string,
  text:string,
  icon:string,
}
/**
 * 手机系统信息
 */
export interface ISystemInfo{
  /**
   * 手机品牌
   */
  brand:string,
  /**
   * 手机型号
   */
  model:string,
  /**
   * 屏幕宽度
   */
  screenWidth:number,
  /**
   * 屏幕高度
   */
  screenHeight:number,
}
/**
 * 语言类型
 */
export type LangType = 'zh'|'uy'
/**
 * 翻译内容
 */
export interface IMessageItem {
  _id: number,
  fromContent: string,
  toContent: string,
  isSelf: boolean,
  time: number,
}
/**
 * 设置相关应用状态类型
 */
export interface ISettingState {
  /**
   * 配置信息
   */
  baseConfig:IBaseConfig
  /**
   * 底部导航栏
   */
  tabBarOption:{
    /**
     * tabbarlis
     */
    tabBarList: Array<ITabBarItem>,
    /**
     * 激活选项index
     */
    active:number
  }
  /**
   * 系统信息
   */
  systemInfo:ISystemInfo,
  /**
   * 当前选中的语言
   */
  language:LangType,
  /**
   * 翻译消息队列
   */
  messageList:Array<IMessageItem>

}
