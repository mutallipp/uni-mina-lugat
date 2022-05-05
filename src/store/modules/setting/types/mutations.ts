import { SettingMutationTypes } from '../constants/mutations'
import {
  IMessageItem, ISettingState, ISystemInfo, LangType,
} from './state'
/**
 * 翻译消息参数
 */
export interface IMessageListOption {
  isReload?:boolean,
  messageList:Array<IMessageItem>
}
/**
 * 设置 mutations类型
 */
export type SettingMutations<S = ISettingState> ={
  [SettingMutationTypes.SET_ACTIVE_TAB_BAR] (state:S, index:number):void
  [SettingMutationTypes.SET_SETTING_INFO] (state:S, systemInfo:ISystemInfo):void
  [SettingMutationTypes.SET_LANGUAGE] (state:S, lang:LangType):void
  [SettingMutationTypes.SET_MESSAGE_LIST] (state:S, messageListOption:IMessageListOption):void
}
