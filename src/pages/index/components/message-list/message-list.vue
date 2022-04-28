<template>
  <div class="bg-white m-x-10">
    <scroll-view
      :scroll-into-view="msgId"
      :style="{ '--message-scroll-height': messageListHeight }"
      show-scrollbar
      scroll-y="true"
      class="message-list"
      @scrolltoupper="scrolltoupper"
    >
      <div
        v-for="(msgItem,index) in messageList"
        :id="`msgItem-${msgItem._id}`"
        :key="index"
        class="message-item"
      >
        <div class="time-box">
          <div class="time">
            {{ timeStamp2time(msgItem.time) }}
          </div>
        </div>
        <div
          v-if="msgItem.isSelf"
          class="message-content right"
        >
          <div class="content">
            <msg-content :msg-item="msgItem" />
          </div>
          <div class="avatar">
            <msg-avatar />
          </div>
        </div>
        <div
          v-else
          class="message-content left"
        >
          <div class="avatar">
            <msg-avatar />
          </div>
          <div class="content">
            <msg-content :msg-item="msgItem" />
          </div>
        </div>
      </div>
      <div @click="scroll2bottom">
        to top
      </div>
    </scroll-view>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, nextTick, PropType, ref, toRefs,
} from 'vue'
import { timeStamp2time } from '@utils/index'
import MsgAvatar from './avatar.vue'
import MsgContent from './content.vue'
import { IMessageItem } from '../types/message-list'

function useMessageList (props) {
  const { messageList } = toRefs(props)
  const msgId = ref('')
  // 消息滚动到底部
  const scroll2bottom = () => {
    console.log('scroll2bottom')

    msgId.value = ''
    nextTick(() => {
      // msgId.value = `msgItem-${0}`
      msgId.value = `msgItem-${messageList.value?.slice(-1)[0]._id}`
    })
  }
  // 消息滚动到顶部
  const scroll2top = () => {
    console.log('scroll2top')

    msgId.value = ''
    nextTick(() => {
      msgId.value = `msgItem-${0}`
    })
  }
  // 下滑快到顶部的时候，加载历史消息
  const scrolltoupper = () => {
    // getMoreMessage()
    console.log('到顶了')
  }
  return {
    msgId,

    timeStamp2time,
    scrolltoupper,
    scroll2bottom,
    scroll2top,
  }
}
export default defineComponent({
  components: {
    'msg-avatar': MsgAvatar,
    'msg-content': MsgContent,
  },
  props: {
    messageListHeight: {
      type: String,
      default: '0px',
    },
    messageList: {
      type: Array as PropType<Array<IMessageItem>>,
      default: () => [],
    },
  },
  setup (props) {
    return {
      ...useMessageList(props),
    }
  },
})

</script>

<style lang="scss" scoped>
.message-list {
  //content-visibility: auto;
  overflow-anchor: none;
  height: calc(100vh - var(--message-scroll-height));
  .message-item{
    .time-box{
      display: flex;
      justify-content: center;
      margin: 10px;
      .time{
        background-color: $gray-60;
        padding: 5px;
      }
    }
    .message-content{
      display: flex;
      // justify-content: flex-start;
      &.left{
        justify-content: flex-start;
      }
      &.right{
        justify-content: flex-end;
      }
    }
  }
}
</style>
