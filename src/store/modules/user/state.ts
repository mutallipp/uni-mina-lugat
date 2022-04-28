import { IUserState } from './types/state'

/**
 * 用户相关应用状态
 */
export const userState: IUserState = {
  token: '',
  dataPromise: undefined,
  memberInfo: {
    nickName: 'mutallip',
    avatarUrl: 'http://qiniu.mutallip.cn/bay-mia-logo.JPG',
  },
}
