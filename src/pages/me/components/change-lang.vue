<template>
  <div
    class="popup-wrap"
    @click="$emit('update:visible',false)"
  >
    <van-popup
      :show="visible"
      :close="onClose"
      custom-style="height: 20%; width:80%"
    >
      <div
        class="select-lang"
        @click.stop="()=>{}"
      >
        <div>{{ $t('me.changeLang.choseLang') }}</div>
        <select-lang @changeLang="$emit('update:visible',false)" />
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SelectLang from '@components/select-lang/index.vue'

function useChangeLanguage () {
  return {}
}
export default defineComponent({
  components: {
    'select-lang': SelectLang,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:visible'],
  setup () {
    return {
      ...useChangeLanguage(),
    }
  },
})

</script>

<style lang="scss" scoped>
.select-lang{
  margin-left: 10px;
  margin-top: 20px;
}
.popup-wrap{
  position: absolute;
  width: 100vw;
  height: 100vh;
}
</style>
