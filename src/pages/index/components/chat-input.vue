<template>
  <div class="msg-container">
    <div class="msg-input">
      <input
        v-model="content"
        type="text"
        placeholder="请输入文本"
      >
    </div>
    <div class="send-msg">
      <van-button
        type="primary"
        @click="onSendMessage"
      >
        发送
      </van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export interface IChatInputEmit {
  emit(e:'sendMessage', content:string):void
}
function useChatInput (props:any, { emit }:IChatInputEmit) {
  console.log(props)

  const content = ref('')
  const onSendMessage = ():void => {
    emit('sendMessage', content.value)
    content.value = ''
  }
  return {
    content,

    onSendMessage,
  }
}
export default defineComponent({
  components: {},
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
