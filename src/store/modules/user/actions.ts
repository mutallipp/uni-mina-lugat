import { IRootState } from '@store/types'
import { ActionTree } from 'vuex'
import { getLocalStorage } from '@/utils/storage'
import { ISetLocalUserInfo } from '@/components/get-user-info/types'
import { ILocalResult } from '@/defineds/utils/storage'
import { LocalStorageKeyType } from '@/utils/constanst/storage'
import { IMemberInfo, IUserState } from './types/state'
import { UserActions } from './types/actions'
import { UserActionTypes } from './constants/action'
import { UserMutationTypes } from './constants/mutations'
import { SettingActionTypes } from '../setting/constants/action'

/**
 * 用户应用的 actions
 */
export const userActions:ActionTree<IUserState, IRootState> & UserActions = {
  /**
   *  用户登录
   */
  async [UserActionTypes.LOGIN] ({ commit, dispatch }) {
    // eslint-disable-next-line no-async-promise-executor
    commit(UserMutationTypes.SET_DATA_PROMISE, new Promise(async (resolve) => {
      dispatch(SettingActionTypes.SET_SETTING_INFO)
      resolve(true)
    }))
  },
  async [UserActionTypes.CHANGE_GET_USER_INFO_VISIBLE] ({ commit }, visible):Promise<boolean> {
    return new Promise((resolve) => {
      commit(UserMutationTypes.CHANGE_GET_USER_INFO_VISIBLE, visible)
      resolve(visible)
    })
  },
  async [UserActionTypes.SET_MEMBER_INFO] ({ commit }, memberInfo:IMemberInfo):Promise<void> {
    return new Promise((resolve) => {
      commit(UserMutationTypes.SET_MEMBER_INFO, memberInfo)
      resolve()
    })
  },
  async [UserActionTypes.GET_MEMBER_INFO] ({ commit }):Promise<ILocalResult<IMemberInfo>> {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve) => {
      const res = await getLocalStorage<ISetLocalUserInfo>(LocalStorageKeyType.USER_INFO)
      const temp:ILocalResult<IMemberInfo> = {
        code: res.code,
        data: res.data?.userInfo,
      }
      resolve(temp)
      if (res.code === -100 || res.data?.expired < (new Date()).valueOf()) {
        //
      } else {
        commit(UserMutationTypes.SET_MEMBER_INFO, res.data?.userInfo)
      }
    })
  },
}
