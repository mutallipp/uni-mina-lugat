import { IRootState } from '@/store/types'
import { GetterTree } from 'vuex'
import { SettingGetterType } from './constants/getter'
import { SettingGetters } from './types/getter'
import {
  IMessageItem, ISettingState, ISystemInfo, ITabBarItem, LangType,
} from './types/state'

/**
 * 用户应用的 getters
 */
export const settingGetters:GetterTree<ISettingState, IRootState> &SettingGetters = {
  [SettingGetterType.BASE_COLOR] (state:ISettingState):string {
    return state?.baseConfig?.baseColor || 'red'
  },
  [SettingGetterType.TAB_BAR_LIST] (state:ISettingState): Array<ITabBarItem> {
    return state?.tabBarOption.tabBarList || []
  },
  [SettingGetterType.ACTIVE_TAB_BAR] (state:ISettingState): number {
    return state?.tabBarOption.active || 0
  },
  [SettingGetterType.IS_IPHONE] (state:ISettingState): boolean {
    return state?.systemInfo?.model.split(' ').some(item => ['iPhone', 'iphone'].includes(item))
  },
  [SettingGetterType.SELECT_LANG] (state:ISettingState): LangType {
    return state?.language || 'uy'
  },
  [SettingGetterType.MESSAGE_LIST] (state:ISettingState): Array<IMessageItem> {
    return state?.messageList || []
  },
  [SettingGetterType.SYSTEM_INFO] (state:ISettingState): ISystemInfo {
    return state?.systemInfo
  },
}
