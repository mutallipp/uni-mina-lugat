import { IUserState } from './types/state'

/**
 * 用户相关应用状态
 */
export const userState: IUserState = {
  token: '',
  dataPromise: undefined,
  memberInfo: {
    nickName: '',
    avatarUrl: '',
  },
  getUserInfoProps: {
    visible: false,
  },
}
