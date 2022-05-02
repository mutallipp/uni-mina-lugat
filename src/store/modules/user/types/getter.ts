import { UserGetterType } from '../constants/getter'
import { IMemberInfo, IUserState } from './state'

/**
 * 用户应用的 getters类型
 */
export type UserGetters = {
  [UserGetterType.TOKEN] (state:IUserState) :string
  [UserGetterType.MEMBER_INFO] (state:IUserState) :IMemberInfo
  [UserGetterType.AVATAR_URL] (state:IUserState) :string
  [UserGetterType.GET_UDER_INOF_VISIBLE] (state:IUserState) :boolean
  [UserGetterType.HAS_USER_INFO] (state:IUserState) :boolean
}
