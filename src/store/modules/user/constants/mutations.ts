/**
 * 用户 commit类型
 */
export enum UserMutationTypes {
  /**
   * 设置token
   */
  SET_TOKEN = 'SET_TOKEN',
  /**
   * 设置promise
   */
  SET_DATA_PROMISE = 'SET_DATA_PROMISE',
  /**
   * 修改获取用户信息弹窗的开关
   */
  CHANGE_GET_USER_INFO_VISIBLE = 'CHANGE_GET_USER_INFO_VISIBLE',
  /**
   * 设置用户信息
   */
  SET_MEMBER_INFO = 'SET_MEMBER_INFO',
}
