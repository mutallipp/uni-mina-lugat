/**
 * 用户应用的 getter类型
 */
export enum UserGetterType {
  /**
   * 获取token
   */
  TOKEN = 'TOKEN',
  /**
   * 获取用户信息
   */
  MEMBER_INFO = 'MEMBER_INFO',
  /**
   * 获取用户头像
   */
  AVATAR_URL = 'AVATAR_URL',
  /**
   * 获取授权登录弹窗开关状态
   */
  GET_UDER_INOF_VISIBLE = 'GET_UDER_INOF_VISIBLE',
  /**
   * 获取授权登录状态
   */
  HAS_USER_INFO = 'HAS_USER_INFO'

}
