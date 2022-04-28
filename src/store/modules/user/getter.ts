import { IRootState } from '@/store/types'
import { GetterTree } from 'vuex'
import { UserGetterType } from './constants/getter'
import { UserGetters } from './types/getter'
import { IMemberInfo, IUserState } from './types/state'

/**
 * 用户应用的 getters
 */
export const userGetters:GetterTree<IUserState, IRootState> &UserGetters = {
  [UserGetterType.TOKEN] (state:IUserState):string {
    return state?.token || ''
  },
  [UserGetterType.MEMBER_INFO] (state:IUserState):IMemberInfo {
    return state?.memberInfo || {}
  },
  [UserGetterType.AVATAR_URL] (state:IUserState):string {
    return state?.memberInfo?.avatarUrl || ''
  },
}
