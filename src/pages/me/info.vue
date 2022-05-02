<template>
  <m-layout
    navigation-bar-title-text="关于小程序"
  >
    <div class="wrap">
      <div class="text-center f-s-24">
        关于小程序
      </div>
      <div class="content m-t-10">
        1.此小程序翻译的内容为机器翻译，望用户不要翻译敏感词汇，政治词汇，违法国家利益的词汇，违规者承担一切法律责任。<br>
        2.望用户不要用来需要严格的翻译文件或者工作内容，翻译内容仅供参考。
      </div>
    </div>
  </m-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

function mutallip () {
  return {}
}
export default defineComponent({
  components: {},
  props: {},
  setup () {
    return {
      ...mutallip(),
    }
  },
})

</script>

<style lang="scss" scoped>
.wrap{
  margin:10px
}
</style>
