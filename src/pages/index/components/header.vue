<template>
  <div
    class="header-container"
    :style="headerStyle"
  >
    <div
      class="left"
      @click="changeLang"
    >
      {{ $t(currentLang.textLeft) }}
    </div>
    <div
      class="center"
      @click="changeLang"
    >
      <van-icon name="minus" />
      <van-icon name="arrow" />
    </div>
    <div
      class="right"
      @click="changeLang"
    >
      {{ $t(currentLang.textRight) }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from '@/store'
import { SettingGetterType } from '@/store/modules/setting/constants/getter'
import { IHomeHeaderEmit, ILangItem } from './types/header'
import { langList } from './constants/header'

function useHomeHeader (props:any, { emit }:IHomeHeaderEmit) {
  const store = useStore()
  const activeIndex = ref(0)

  const baseColor = computed(() => store.getters[SettingGetterType.BASE_COLOR])
  const currentLang = computed<ILangItem>(() => langList[activeIndex.value])
  const headerStyle = computed(() => {
    return {
      color: baseColor.value,
    }
  })

  const changeLang = ():void => {
    activeIndex.value = activeIndex.value === 0 ? 1 : 0
    emit('onChange', currentLang.value)
  }
  return {
    baseColor,
    headerStyle,
    currentLang,

    changeLang,
  }
}
export default defineComponent({
  components: {
  },
  props: {},
  emits: ['onChange'],
  setup (props, context) {
    return {
      ...useHomeHeader(props, context),
    }
  },
})

</script>

<style lang="scss" scoped>
.header-container{
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: white;
  // margin:10px;
  padding: 10px 10px;
  border-radius: 5px;
  .left{
    width: 45%;
  }
  .center{
    display: flex;
    color: $black;
  }
  .right{
    width: 45%;
  }
}
</style>
