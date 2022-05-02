import { UserMutationTypes } from '../constants/mutations'
import { IMemberInfo, IUserState } from './state'

/**
 * 用户 mutations类型
 */
export type UserMutations<S = IUserState> ={
  [UserMutationTypes.SET_TOKEN] (state:S, token:string):void
  [UserMutationTypes.SET_DATA_PROMISE] (state:S, dataPromise:Promise<any>):void
  [UserMutationTypes.CHANGE_GET_USER_INFO_VISIBLE] (state:S, visible:boolean):void
  [UserMutationTypes.SET_MEMBER_INFO] (state:S, memberInfo:IMemberInfo):void
}
