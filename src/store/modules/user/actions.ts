import { IRootState } from '@store/types'
import { ActionTree } from 'vuex'
import { IUserState } from './types/state'
import { UserActions } from './types/actions'
import { UserActionTypes } from './constants/action'
import { UserMutationTypes } from './constants/mutations'

/**
 * 用户应用的 actions
 */
export const userActions:ActionTree<IUserState, IRootState> & UserActions = {
  /**
   *  用户登录
   */
  async [UserActionTypes.LOGIN] ({ commit }) {
    // eslint-disable-next-line no-async-promise-executor
    commit(UserMutationTypes.SET_DATA_PROMISE, new Promise(async (resolve) => {
      resolve(true)
    }))
  },
}
