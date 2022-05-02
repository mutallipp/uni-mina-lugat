import { IMemberInfo } from '@/store/modules/user/types/state'

/**
 * emit
 */
export interface IGetUserInfoEmit {
  emit(e:'update:visible', value:boolean):void,
  emit(e:'getUserInfo', value:IMemberInfo):void,
}
/**
 * 需要本地缓存的用户类型
 */
export interface ISetLocalUserInfo {
  userInfo:IMemberInfo,
  expired:number
}
