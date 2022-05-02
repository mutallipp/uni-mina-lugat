import { ILocalResult } from '@/defineds/utils/storage'
import { IRootState } from '@/store/types'
import { ActionContext } from 'vuex'
import { UserActionTypes } from '../constants/action'
import { UserMutations } from './mutations'
import { IMemberInfo, IUserState } from './state'

/**
 * 用户 actions函数参数类型
 */
export type ActionAugments = Omit<ActionContext<IUserState, IRootState>, 'commit'> & {
  commit<K extends keyof UserMutations> (key:K, payload?:Parameters<UserMutations[K]>[1]): ReturnType<UserMutations[K]>,
}

/**
 * 用户应用的 actions类型
 */
export type UserActions = {
  [UserActionTypes.LOGIN] (context:ActionAugments) :void
  [UserActionTypes.CHANGE_GET_USER_INFO_VISIBLE] (context:ActionAugments, visible:boolean) :Promise<boolean>
  [UserActionTypes.SET_MEMBER_INFO] (context:ActionAugments, memberInfo:IMemberInfo) :Promise<void>
  [UserActionTypes.GET_MEMBER_INFO] (context:ActionAugments, memberInfo:IMemberInfo) :Promise<ILocalResult<IMemberInfo>>
}
