<template>
  <div class="msg-container">
    <div class="msg-input">
      <input
        v-model="content"
        type="text"
        :placeholder="$t('home.chatInput.inputHolderL')"
      >
    </div>
    <div class="send-msg">
      <van-button
        type="primary"
        @click="onSendMessage"
      >
        {{ $t('home.chatInput.sendMsg') }}
      </van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store'
import * as utils from '@utils/index'
import { UserGetterType } from '@store/modules/user/constants/getter'
import { UserActionTypes } from '@/store/modules/user/constants/action'
import { computed, defineComponent, ref } from 'vue'
import { useI18n } from '@lang/index'

export interface IChatInputEmit {
  emit(e:'sendMessage', content:string):void
}
function useChatInput (props:any, { emit }:IChatInputEmit) {
  const { t } = useI18n()
  const store = useStore()
  const content = ref('')
  const getUserInfoVisible = ref(true)

  const hasUserInfo = computed(() => {
    return store.getters[UserGetterType.HAS_USER_INFO]
  })

  const onSendMessage = ():void => {
    if (!content.value) {
      utils.toast(t('home.chatInput.needInputContent'), 'error')
      return
    }
    if (!hasUserInfo.value) {
      store.dispatch(UserActionTypes.CHANGE_GET_USER_INFO_VISIBLE, true)
      return
    }
    emit('sendMessage', content.value)
    content.value = ''
    getUserInfoVisible.value = true
  }
  return {
    content,
    getUserInfoVisible,

    onSendMessage,
  }
}
export default defineComponent({
  components: { },
  props: {},
  setup (props, context) {
    return {
      ...useChatInput(props, context),
    }
  },
})

</script>

<style lang="scss" scoped>
.msg-container{
  display: flex;
  background-color: white;
  align-items: flex-end;
  padding-bottom: 10px;
  margin-top: 5px;
  .msg-input{
    width: 80%;
    height: 100%;
    margin: 5px;
  }
  .send-msg{
    width: 20%;
  }
}
</style>
