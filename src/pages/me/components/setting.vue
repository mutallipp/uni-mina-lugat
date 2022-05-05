<template>
  <div
    class="setting-popup-wrap"
    @click="onClose"
  >
    <div
      class="popup"
    >
      <van-popup
        :show="visible"
        close-on-click-overlay
        position="right"
        custom-style="height: 100%;width:60%;"
        :close="onClose"
        :click-overlay="onClose"
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
    </div>
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
import { ISettingEmit } from './types/setting'

function useSetting (props:any, { emit }:ISettingEmit) {
  const { t } = useI18n()
  const store = useStore()
  const settingVisible = ref(true)

  const onClose = () => {
    console.log('onClose')
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

    emit('click', key)
    emit('update:visible', false)
  }
  return {
    settingVisible,

    onClose,
    clickClearCash,
  }
}
export default defineComponent({
  components: {},
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
.setting-popup-wrap{
  position: absolute;
  width: 100vh;
  height: 100vh;
  z-index: 9;
  .popup{
    z-index: 10;
  }
}
</style>
