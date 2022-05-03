import { SettingMutationTypes } from '../constants/mutations'
import { ISettingState, ISystemInfo, LangType } from './state'
/**
 * 设置 mutations类型
 */
export type SettingMutations<S = ISettingState> ={
  [SettingMutationTypes.SET_ACTIVE_TAB_BAR] (state:S, index:number):void
  [SettingMutationTypes.SET_SETTING_INFO] (state:S, systemInfo:ISystemInfo):void
  [SettingMutationTypes.SET_LANGUAGE] (state:S, lang:LangType):void
}
