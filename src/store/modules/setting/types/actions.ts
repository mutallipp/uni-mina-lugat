import { IRootState } from '@/store/types'
import { ActionContext } from 'vuex'
import { SettingActionTypes } from '../constants/action'
import { SettingMutations } from './mutations'
import { IMessageItem, ISettingState, LangType } from './state'

/**
 * 设置 actions函数参数类型
 */
export type ActionAugments = Omit<ActionContext<ISettingState, IRootState>, 'commit'> & {
  commit<K extends keyof SettingMutations> (key:K, payload?:Parameters<SettingMutations[K]>[1]): ReturnType<SettingMutations[K]>,
}
/**
 * 翻译消息参数
 */
export interface IMessageListOption {
  isReload?:boolean,
  messageList:Array<IMessageItem>
}

/**
 * 设置应用的 actions类型
 */
export type SettingActions = {
  [SettingActionTypes.SET_ACTIVE_TAB_BAR] (context:ActionAugments, index:number) :void
  [SettingActionTypes.SET_SETTING_INFO] (context:ActionAugments) :void
  [SettingActionTypes.SET_LANGUAGE] (context:ActionAugments, lang:LangType) :void
  [SettingActionTypes.SET_MESSAGE_LIST] (context:ActionAugments, messageListOption:IMessageListOption) :void
}
