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
        custom-style="height: 100%;width:40%;"
        :close="onClose"
        :click-overlay="onClose"
      >
        <van-cell-group inset>
          <div @click.stop="clickClearCash('message')">
            <van-cell
              title="清除翻译缓存"
              is-link
              arrow-direction="right"
            />
          </div>
          <div @click.stop="clickClearCash('all')">
            <van-cell
              title="清除全部缓存"
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
import { ISettingEmit } from './types/setting'

function useSetting (props:any, { emit }:ISettingEmit) {
  const settingVisible = ref(true)

  const onClose = () => {
    console.log('onClose')
    emit('update:visible', false)
  }
  const clickClearCash = async (key:'message'|'all') => {
    let flag = -100
    switch (key) {
      case 'message': {
        const { code } = await storage.removeStorage(LocalStorageKeyType.MESSAGE_LIST)
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
    if (flag === 200) {
      utils.toast('清除成功', 'success')
    } else {
      utils.toast('清除失败', 'error')
    }
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
