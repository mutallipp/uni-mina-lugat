import { IRootState } from '@store/types'
import { ActionTree } from 'vuex'
import { SettingActionTypes } from './constants/action'
import { ISettingState } from './types/state'
import { SettingActions } from './types/actions'
import { SettingMutationTypes } from './constants/mutations'

/**
 * 用户应用的 actions
 */
export const settingActions:ActionTree<ISettingState, IRootState> & SettingActions = {
  /**
   *  设置底部tabbar登录
   */
  async [SettingActionTypes.SET_ACTIVE_TAB_BAR] ({ commit }, index) {
    commit(SettingMutationTypes.SET_ACTIVE_TAB_BAR, index)
  },
  async [SettingActionTypes.SET_SETTING_INFO] ({ commit }) {
    // 获取系统信息
    uni.getSystemInfo({
      success (res) {
        const {
          brand = '', // 手机牌子
          model = '', // 手机型号
          screenWidth = 0, screenHeight = 0,
        } = res
        commit(SettingMutationTypes.SET_SETTING_INFO, {
          brand, model, screenWidth, screenHeight,
        })
      },
    })
  },
}
