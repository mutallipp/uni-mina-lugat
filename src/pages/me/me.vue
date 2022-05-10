<template>
  <m-layout
    navigation-bar-title-text="我的"
  >
    <div
      class="head-wrapper"
      :style="{backgroundColor:baseColor}"
    >
      <div class="user-info">
        <div
          v-if="memberInfo?.avatarUrl"
          class="avatar"
        >
          <van-image
            round
            width="50px"
            height="50px"
            lazy-load
            :src="memberInfo.avatarUrl"
          >
            <template #loading>
              <van-loading
                type="spinner"
                size="20"
                vertical
              />
            </template>
          </van-image>
          <div class="name m-l-10">
            {{ memberInfo.nickName }}
          </div>
        </div>
        <div
          v-else
          class="avatar"
          @click="clickAvatarHandle"
        >
          <van-icon
            name="manager"
            size="50px"
          />
          <div class="name m-l-10">
            维汉词典用户
          </div>
        </div>
        <div @click="clickSetting">
          <van-icon name="setting-o" />
        </div>
      </div>
    </div>
    <div class="grid-content m-x-20">
      <m-gird @onClick="onClickGird" />
    </div>
    <template #footer>
      <div class="footer">
        Powerd by Mutallip
      </div>
    </template>
    <m-setting
      v-model:visible="settingVisible"
      @click="clickSettingItem"
    />
  </m-layout>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from '@store/index'
import { UserGetterType } from '@store/modules/user/constants/getter'
import { UserActionTypes } from '@/store/modules/user/constants/action'

import Gird from './components/gird.vue'
import Setting from './components/setting.vue'

function useMe () {
  const store = useStore()

  const settingVisible = ref(false)

  const memberInfo = computed(() => {
    return store.getters[UserGetterType.MEMBER_INFO]
  })

  const clickAvatarHandle = () => {
    store.dispatch(UserActionTypes.CHANGE_GET_USER_INFO_VISIBLE, true)
  }
  const clickSetting = () => {
    settingVisible.value = true
  }
  const onClickGird = (name:string) => {
    switch (name) {
      case 'setting':
        settingVisible.value = true
        break
      default:
        break
    }
  }
  const clickSettingItem = (key:string) => {
    console.log('clickSettingItem', key)
  }
  return {
    memberInfo,
    settingVisible,

    clickAvatarHandle,
    clickSetting,
    clickSettingItem,
    onClickGird,
  }
}
export default defineComponent({
  components: {
    'm-gird': Gird,
    'm-setting': Setting,
  },
  props: {},
  setup () {
    return {
      ...useMe(),
    }
  },
})

</script>

<style lang="scss" scoped>
.head-wrapper{
  background-color: pink;
  min-height: 200px;
  margin: -$mainContentPadding;
  .user-info{
    display: flex;
    justify-content: space-between;
    // align-items: center;
    padding:20px 10px 10px 20px
  }
  .avatar{
    display: flex;
    align-items: center;
  }
}
.grid-content{
  position: relative;
  top:-60px;
  background-color: white;
  border-radius: 5px;
  .btn{
    display: block;
    text-align: center;
  }
  ::v-deep .u-icon--right{
    flex-direction: column!important;
  }
}
.content{
  margin-top: -60px;
}
.footer{
  text-align: center;
  margin-bottom: 10px;
  font-size: 22;
  font-weight: 800;
  // margin-left: -$mainContentPadding;
  width: 100%;
}
</style>
