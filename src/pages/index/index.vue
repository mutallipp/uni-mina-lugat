<template>
  <m-layout
    navigation-bar-title-text="维汉翻译"
  >
    <!-- header -->
    <div class="header">
      <home-header @onChange="onChangeLang" />
    </div>
    <!-- 消息列表 -->
    <message-list
      ref="messageListRef"
      :message-list-height="messageListHeight"
      :message-list="messageList"
    />
    <!--    聊天输入框-->
    <div class="chat-input">
      <chat-input @send-message="onSendMessage" />
    </div>
  </m-layout>
</template>

<script lang="ts">
import {
  computed, defineComponent, onMounted, ref,
} from 'vue'
import store from '@/store'
import * as storage from '@utils/storage'
import * as utils from '@utils/index'
import { useSharePage } from '@hooks/share'
import { useClientRect } from '@hooks/client-rect'
import { onHide } from '@dcloudio/uni-app'
import { translateTextApi } from '@api/IIndex/index'
import { ILangItem } from './components/types/header'
import HomeHeader from './components/header.vue'
import MessageList from './components/message-list/message-list.vue'
import ChatInput from './components/chat-input.vue'
import { IMessageItem } from './components/types/message-list'
import { langList } from './components/constants/header'
import { ITranslateResult } from './types/index'

function useHomePage () {
  const { onShareAppMessage, onShareTimeline } = useSharePage()

  const title = ref('muzat')
  const homeHeaderRect = useClientRect('.header')
  // const headerRect = useClientRect('.layout page-default')
  const chatInputRect = useClientRect('.chat-input')

  const currentLang = ref<ILangItem>(langList[0])

  const messageListRef = ref<any>()

  const messageList = ref<Array<IMessageItem>>([])

  const messageListHeight = computed(() => {
    /**
     * tabBar 50 +40
     * navBar 44 +40
     */
    let height = 50 + 40 + 44 + 40 + 15
    if (homeHeaderRect.value?.height) {
      height += homeHeaderRect.value?.height
    }
    if (chatInputRect.value?.height) {
      height += chatInputRect.value?.height
    }
    // if (tabBarRect.value?.height) {
    //   height += tabBarRect.value?.height
    // }
    return `${height}px`
  })
  const onChangeLang = (lang:ILangItem):void => {
    currentLang.value = lang
    console.log(currentLang.value)
  }
  const onSendMessage = async (currentMsg:string):Promise<void> => {
    console.log(currentMsg)
    const data = await translateTextApi<ITranslateResult>({
      convert: currentLang.value.lang,
      content: currentMsg,
    })

    if (!data.result || data.status === 1) {
      utils.toast(data.result)
      return
    }
    messageList.value.push({
      _id: (new Date()).valueOf(),
      fromContent: currentMsg,
      toContent: data.result,
      isSelf: currentLang.value?.lang === 1,
      time: (new Date()).valueOf(),
    })
    messageListRef.value.scroll2bottom()
  }
  const _init = async () => {
    const localMsgList = await storage.getLocalStoregeSync<Array<IMessageItem>>('message-list')
    if (localMsgList) {
      messageList.value = localMsgList as Array<IMessageItem>
      messageListRef.value.scroll2bottom()
    }
  }
  onMounted(() => {
    store.state.user.dataPromise?.then(() => {
      console.log('index promise')
    })
    _init()
  })
  onHide(() => {
    console.log('App Hide')
    storage.setLocalStoregeSync<Array<IMessageItem>>('message-list', messageList.value)
  })
  return {
    title,
    messageListHeight,
    messageList,
    messageListRef,

    onShareAppMessage,
    onShareTimeline,
    onChangeLang,
    onSendMessage,
  }
}

export default defineComponent({
  components: {

    'home-header': HomeHeader,
    'message-list': MessageList,
    'chat-input': ChatInput,
  },
  setup () {
    return {
      ...useHomePage(),

    }
  },
})
</script>

<style>
.content {
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
}

</style>
