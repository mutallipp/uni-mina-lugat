<template>
  <div
    id="layout-header-container"
    class="layout-header-container"
    :style="navBarStyle"
  >
    <div class="nav-bar-content">
      <div class="m-l-5">
        <van-icon name="arrow-left" />
      </div>
      <div class="nav-bar-title">
        {{ navigationBarTitleText }}
      </div>
      <van-icon
        name=""
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

function useHeader () {
  // const navBarStyle = `background-color: ${bgColor};`
  const navBarStyle = computed(() => {
    const bgColor = '#3366ff'
    return `background-color: ${bgColor}; color: white;`
  })

  return {
    navBarStyle,
  }
}
export default defineComponent({
  components: {},
  props: {
    navigationBarTitleText: {
      type: String,
      default: 'muzat信息平台',
    },
  },
  setup () {
    return {
      ...useHeader(),
    }
  },
})

</script>

<style lang="scss">
.nav-bar-title{
  // color: black;
}
.nav-bar-content{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  padding-top: 40px;
}
</style>
