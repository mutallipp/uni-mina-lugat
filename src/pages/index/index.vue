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
    />
    <!--    聊天输入框-->
    <div class="chat-input">
      <chat-input @send-message="onSendMessage" />
    </div>
  </m-layout>
</template>

<script lang="ts">
import {
  computed,
  defineComponent, onMounted, ref,
} from 'vue'
import { useStore } from '@/store'
import * as storage from '@utils/storage'
import * as utils from '@utils/index'
import { useSharePage } from '@hooks/share'
import { onHide } from '@dcloudio/uni-app'
import { translateTextApi } from '@api/IIndex/index'
import { LocalStorageKeyType } from '@/utils/constanst/storage'
import { IMessageItem } from '@store/modules/setting/types/state'
import { SettingGetterType } from '@/store/modules/setting/constants/getter'
import { SettingActionTypes } from '@/store/modules/setting/constants/action'
import { ILangItem } from './components/types/header'
import HomeHeader from './components/header.vue'
import MessageList from './components/message-list/message-list.vue'
import ChatInput from './components/chat-input.vue'
import { langList } from './components/constants/header'

function useHomePage () {
  const store = useStore()
  const { onShareAppMessage, onShareTimeline } = useSharePage()

  const title = ref('muzat')

  const currentLang = ref<ILangItem>(langList[0])

  const messageListRef = ref<any>()

  const messageList = computed<Array<IMessageItem>>(() => {
    return store.getters[SettingGetterType.MESSAGE_LIST]
  })

  const onChangeLang = (lang:ILangItem):void => {
    currentLang.value = lang
  }
  const onSendMessage = async (currentMsg:string):Promise<void> => {
    const data = await translateTextApi<any>({
      convert: currentLang.value.lang,
      content: currentMsg,
    })

    if (!data.result || data.status === 1) {
      utils.toast(data.result)
      return
    }

    const messageItem:IMessageItem = {
      _id: (new Date()).valueOf(),
      fromContent: currentMsg,
      toContent: data.result,
      isSelf: currentLang.value?.lang === 1,
      // isSelf: false,
      time: (new Date()).valueOf(),
    }
    store.dispatch(SettingActionTypes.SET_MESSAGE_LIST, { messageList: [messageItem], isReload: false })
    console.log('messageList', messageList.value)

    messageListRef.value.scroll2bottom()
  }
  const _init = async () => {
    const localMsgList = await storage.getLocalStorageSync<Array<IMessageItem>>(LocalStorageKeyType.MESSAGE_LIST)
    if (localMsgList.code === 200) {
      store.dispatch(SettingActionTypes.SET_MESSAGE_LIST, { messageList: localMsgList.data })
      await utils.sleep()
      messageListRef.value.scroll2bottom()
    }
  }
  onMounted(() => {
    store.state.user.dataPromise?.then(() => {
    })
    _init()
  })
  onHide(() => {
    storage.setLocalStorageSync<Array<IMessageItem>>(LocalStorageKeyType.MESSAGE_LIST, messageList.value)
  })
  return {
    title,
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
