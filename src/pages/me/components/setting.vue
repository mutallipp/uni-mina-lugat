<template>
  <div class="popup">
    <van-popup
      :show="visible"
      position="right"
      custom-style="height: 100%;width:60%;"
      :overlay="false"
      :z-index="13"
    >
      <van-cell-group inset>
        <div @click.stop="clickClearCash('message')">
          <van-cell
            :title="$t('me.setting.clearTranslateCash')"
            is-link
            arrow-direction="right"
          />
        </div>
        <div @click.stop="clickClearCash('all')">
          <van-cell
            :title="$t('me.setting.clearAllCash')"
            is-link
            arrow-direction="right"
          />
        </div>
        <div @click.stop="clickClearCash('changeLang')">
          <van-cell
            :title="$t('me.setting.changeLang')"
            is-link
            arrow-direction="right"
          />
        </div>
      </van-cell-group>
    </van-popup>
    <div
      v-if="visible"
      class="mask"
      @click.stop="onClose"
    />
    <!-- 切换语言 -->
    <change-lang
      v-model:visible="changeLangVisible"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import * as storage from '@utils/storage'
import * as utils from '@utils/index'
import { LocalStorageKeyType } from '@utils/constanst/storage'
import { useI18n } from '@lang/index'
import { useStore } from '@/store'
import { SettingActionTypes } from '@/store/modules/setting/constants/action'
import ChangeLange from './change-lang.vue'
import { ISettingEmit } from './types/setting'

function useSetting (props:any, { emit }:ISettingEmit) {
  const { t } = useI18n()
  const store = useStore()
  const settingVisible = ref(true)
  const changeLangVisible = ref(false)

  const onClose = () => {
    emit('update:visible', false)
  }
  const clickClearCash = async (key:'message'|'all'|'changeLang') => {
    let flag = -100
    switch (key) {
      case 'message': {
        const { code } = await storage.removeStorage(LocalStorageKeyType.MESSAGE_LIST)
        store.dispatch(SettingActionTypes.SET_MESSAGE_LIST, { messageList: [] })
        flag = code
        break
      }
      case 'all': {
        const { code } = await storage.clearStorage()
        flag = code
        break
      }
      case 'changeLang': {
        changeLangVisible.value = true
        break
      }
      default:
        break
    }
    if (['message', 'all'].includes(key)) {
      if (flag === 200) {
        utils.toast(t('me.setting.cashSeccses'), 'success')
      } else {
        utils.toast(t('me.setting.cashFail'), 'error')
      }
    }

    // emit('click', key)
    emit('update:visible', false)
  }
  return {
    settingVisible,
    changeLangVisible,

    onClose,
    clickClearCash,
  }
}
export default defineComponent({
  components: {
    'change-lang': ChangeLange,

  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  setup (props, context) {
    return {
      ...useSetting(props, context),
    }
  },
})

</script>

<style lang="scss" scoped>
.mask{
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: $black;
  opacity: 0.5;
  z-index: 12;
}
</style>
