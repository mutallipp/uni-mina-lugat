<template>
  <div>
    <div class="popup">
      <van-popup
        :show="visible"
        :overlay="false"
        :z-index="13"
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
    <div
      v-if="visible"
      class="mask"
      @click="$emit('update:visible',false)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SelectLang from '@components/select-lang/index.vue'

function useChangeLanguage () {
  return {
  }
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
