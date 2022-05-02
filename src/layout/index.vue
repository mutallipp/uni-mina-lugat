<template>
  <div
    class="layout page-default"
    :style="{'--footer-height':showFooter&&'50px'||'0px'}"
  >
    <!-- <m-header
      :navigation-bar-title-text="navigationBarTitleText"
    >
    </m-header> -->
    <slot>
    <!-- 我们希望把主要内容放这里 -->
    </slot>
    <slot name="footer" />

    <div
      v-show="showFooter"
      class="m-footer"
    >
      <m-footer />
    </div>
    <get-user-info />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount } from 'vue'
import * as utils from '@utils/index'
import GetUserInfo from '@components/get-user-info/index.vue'
// import Header from './header/index.vue'
import { useStore } from '@/store'
import { SettingGetterType } from '@store/modules/setting/constants/getter'
import Footer from './footer/index.vue'

function useLayout () {
  const store = useStore()

  const tabBarList = computed(() => store.getters[SettingGetterType.TAB_BAR_LIST])

  const showFooter = computed(() => {
    const currPath = utils.getPageUrl(0)
    return tabBarList.value.some(item => item.pagePath === currPath)
  })

  const _init = () => {
    uni.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#3366ff',
    })
  }
  onBeforeMount(() => {
    _init()
  })
  return {
    showFooter,
  }
}
export default defineComponent({
  name: 'Layout',
  components: {
    // 'm-header': Header,
    'm-footer': Footer,
    'get-user-info': GetUserInfo,
  },
  props: {
    navigationBarTitleText: {
      type: String,
      default: 'muzat信息平台',
    },
  },
  setup () {
    return {
      ...useLayout(),
    }
  },
})

</script>

<style lang="scss" scoped>
.layout{
  background-color: $default-background;
  padding: 20px;
  height: calc(100vh - var(--footer-height));

}
</style>
