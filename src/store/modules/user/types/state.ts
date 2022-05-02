export interface IMemberInfo {
  /**
     * 用户名
     */
  nickName:string,
  /**
     * 头像
     */
  avatarUrl:string,
}
/**
 * 获取用户信息组件props
 */
export interface IGetUserInfoProps {
  visible:boolean
}
/**
 * 用户相关应用状态类型
 */
export interface IUserState {
  /**
  * 用户token
  */
  token:string,
  /**
   * dataPromise
   */
  dataPromise?:Promise<any>,
  /**
   * user info
   */
  memberInfo :IMemberInfo,
  /**
   * 全局获取用户信息弹窗props
   */
  getUserInfoProps :IGetUserInfoProps
}
