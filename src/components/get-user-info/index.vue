<template>
  <div>
    <van-popup
      :show="visible"
      :close="onClose"
      custom-style="height: 20%; width:80%"
    >
      <div class="user-info-centainer">
        <div class="contetn">
          授权登录获取你的头像和名称
        </div>
        <van-button
          class="btn"
          type="primary"
          @tap="getUserInfo"
        >
          授权登陆
        </van-button>
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts">
import { IMemberInfo } from '@/store/modules/user/types/state'
import { computed, defineComponent } from 'vue'
import { useStore } from '@store/index'
import * as storage from '@utils/storage'
import { UserGetterType } from '@store/modules/user/constants/getter'
import { UserActionTypes } from '@/store/modules/user/constants/action'
import { LocalStorageKeyType } from '@/utils/constanst/storage'
import { ISetLocalUserInfo } from './types/index'

function useGetUserInfo () {
  const store = useStore()
  const visible = computed(() => {
    return store.getters[UserGetterType.GET_UDER_INOF_VISIBLE]
  })

  const onClose = () => {
    console.log('onClose')
    store.dispatch(UserActionTypes.CHANGE_GET_USER_INFO_VISIBLE, false)
  }
  const getUserInfo = () => {
    // 用户授权登录信息默认缓存 15天
    const expired = (new Date()).valueOf() + 1000 * 60 * 60 * 24 * 15
    // desc: '用于完善会员资料'  必填 声明获取用户个人信息后的用途，后续会展示在弹窗中
    uni.getUserProfile({
      desc: '用于完善更好的展示UI内容',
      lang: 'zh_CN',
      async success (user) {
        // console.log(user);
        const {
          avatarUrl, nickName,
        } = user.userInfo
        const userInfo:IMemberInfo = {
          avatarUrl,
          nickName,
        }
        storage.setLocalStorageSync<ISetLocalUserInfo>(LocalStorageKeyType.USER_INFO, { userInfo, expired })
        store.dispatch(UserActionTypes.SET_MEMBER_INFO, userInfo)
        store.dispatch(UserActionTypes.CHANGE_GET_USER_INFO_VISIBLE, false)
      },
      fail (err) {
        console.log('用户信息获取失败', err)
      },
    })
  }
  return {
    visible,

    getUserInfo,
    onClose,
  }
}
export default defineComponent({
  components: {},
  props: {},
  setup () {
    return {
      ...useGetUserInfo(),
    }
  },
})

</script>

<style lang="scss" scoped>
.user-info-centainer{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .contetn{
    margin-top: 20px;
    font-size: 16px;
  }
  .btn{
    margin-top: 20px;
  }
}
</style>
