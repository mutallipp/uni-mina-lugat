import { MutationTree } from 'vuex'
import { SettingMutationTypes } from './constants/mutations'
import { IMessageListOption, SettingMutations } from './types/mutations'
import {
  ISettingState, ISystemInfo, LangType,
} from './types/state'

/**
 * 用户 mutations
 */
export const settingMutations:MutationTree<ISettingState> &SettingMutations = {
  [SettingMutationTypes.SET_ACTIVE_TAB_BAR] (state:ISettingState, index:number) {
    const newState = {
      active: index,
    }
    Object.assign(state.tabBarOption, newState)
  },
  [SettingMutationTypes.SET_DATA_PROMISE] (state:ISettingState) {
    const newState = {

    }
    Object.assign(state, newState)
  },
  [SettingMutationTypes.SET_SETTING_INFO] (state:ISettingState, systemInfo:ISystemInfo) {
    const newState = {
      ...systemInfo,
    }
    Object.assign(state.systemInfo, newState)
  },
  [SettingMutationTypes.SET_LANGUAGE] (state:ISettingState, lang:LangType) {
    const newState = {
      language: lang,
    }
    Object.assign(state, newState)
  },
  [SettingMutationTypes.SET_MESSAGE_LIST] (state:ISettingState, messageListOption:IMessageListOption) {
    const { messageList, isReload = true } = messageListOption
    const newState = {
      messageList: isReload ? messageList : [...state.messageList, ...messageList],
    }
    Object.assign(state, newState)
  },
}
