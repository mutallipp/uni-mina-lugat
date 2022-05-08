<template>
  <div
    class="header-container"
    :style="headerStyle"
  >
    <!-- <div
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
    </div> -->
    <m-select
      v-model:value="lang"
      :data="langList"
      :option="{label:'text',value:'value'}"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue'
import { useStore } from '@/store'
import { SettingGetterType } from '@/store/modules/setting/constants/getter'
import Select from '@components/select/index.vue'
import { IHomeHeaderEmit, IHomeHeaderProps } from './types/header'
import { langList } from './constants/header'

function useHomeHeader (props:IHomeHeaderProps, { emit }:IHomeHeaderEmit) {
  const store = useStore()
  const { currentLang } = toRefs(props)
  const baseColor = computed(() => store.getters[SettingGetterType.BASE_COLOR])
  // const currentLang = computed<ILangItem>(() => langList[activeIndex.value])
  const lang = computed({
    get () {
      return currentLang.value
    },
    set (val:number) {
      emit('update:currentLang', val)
    },
  })
  // const currentLang = ref(1)
  const headerStyle = computed(() => {
    return {
      color: baseColor.value,
    }
  })
  // const changeLang = ():void => {
  //   activeIndex.value = activeIndex.value === 0 ? 1 : 0
  //   emit('onChange', currentLang.value)
  // }
  return {
    baseColor,
    headerStyle,
    currentLang,
    langList,
    lang,

    // changeLang,
  }
}
export default defineComponent({
  components: {
    'm-select': Select,
  },
  props: {
    currentLang: {
      type: Number,
      default: 1,
    },
  },
  emits: ['update:currentLang'],
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
