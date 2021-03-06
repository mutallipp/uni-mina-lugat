import { SettingGetterType } from '../constants/getter'
import {
  IMessageItem, ISettingState, ISystemInfo, ITabBarItem, LangType,
} from './state'

/**
 * 用户应用的 getters类型
 */
export type SettingGetters = {
  [SettingGetterType.BASE_COLOR] (state:ISettingState) :string,
  [SettingGetterType.TAB_BAR_LIST] (state:ISettingState) :Array<ITabBarItem>,
  [SettingGetterType.ACTIVE_TAB_BAR] (state:ISettingState) :number,
  [SettingGetterType.IS_IPHONE] (state:ISettingState) :boolean,
  [SettingGetterType.SELECT_LANG] (state:ISettingState) :LangType,
  [SettingGetterType.MESSAGE_LIST] (state:ISettingState) :Array<IMessageItem>,
  [SettingGetterType.SYSTEM_INFO] (state:ISettingState) :ISystemInfo,
}
