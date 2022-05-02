/**
 * 用户 dispatch类型
 */
export enum UserActionTypes {
  /**
   * 用户登录
   */
  LOGIN ='LOGIN',
  /**
   * 修改获取用户信息弹窗的开关
   */
  CHANGE_GET_USER_INFO_VISIBLE ='CHANGE_GET_USER_INFO_VISIBLE',
  /**
   * 设置用户信息
   */
  SET_MEMBER_INFO ='SET_MEMBER_INFO',
  /**
   * 获取用户信息
   */
  GET_MEMBER_INFO = 'GET_MEMBER_INFO'
}
