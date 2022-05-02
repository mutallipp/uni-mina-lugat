<template>
  <div class="bg-white m-t-10">
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
    </scroll-view>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent, nextTick, PropType, ref, toRefs,
} from 'vue'
import { timeStamp2time } from '@utils/index'
import { useClientRect } from '@/hooks/client-rect'
import { useStore } from '@/store'
import { SettingGetterType } from '@store/modules/setting/constants/getter'
import MsgAvatar from './avatar.vue'
import MsgContent from './content.vue'
import { IMessageItem, IMessageListProps } from '../types/message-list'

function useMessageList (props:IMessageListProps) {
  const store = useStore()
  const { messageList } = toRefs(props)
  const homeHeaderRect = useClientRect('.header')
  const chatInputRect = useClientRect('.chat-input')
  const msgId = ref('')
  const isIPhone = computed<boolean>(() => {
    return store.getters[SettingGetterType.IS_IPHONE]
  })
  const messageListHeight = computed(() => {
    /**
     * tabBar 50 +40
     */
    let height = 50 + 20
    if (homeHeaderRect.value?.height) {
      height += homeHeaderRect.value?.height
    }
    if (chatInputRect.value?.height) {
      height += chatInputRect.value?.height
    }
    if (isIPhone.value) {
      height += 40
    }
    // if (tabBarRect.value?.height) {
    //   height += tabBarRect.value?.height
    // }
    return `${height}px`
  })
  // 消息滚动到底部
  const scroll2bottom = () => {
    console.log('scroll2bottom')

    msgId.value = ''
    nextTick(() => {
      // msgId.value = `msgItem-${0}`
      msgId.value = `msgItem-${messageList.value?.[messageList?.value?.length - 1]._id}`
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
    messageListHeight,

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
    // messageListHeight: {
    //   type: String,
    //   default: '0px',
    // },
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
