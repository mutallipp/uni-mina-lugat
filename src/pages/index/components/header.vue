<template>
  <div
    class=""
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
    <van-dropdown-menu>
      <van-dropdown-item
        :value="currentLang"
        :options="langList"
        @change="changeLang"
      />
    </van-dropdown-menu>
  </div>
</template>

<script lang="ts">
import {
  computed, defineComponent,
} from 'vue'
import { useStore } from '@/store'
import { SettingGetterType } from '@/store/modules/setting/constants/getter'
import { IHomeHeaderEmit } from './types/header'
import { langList } from './constants/header'

function useHomeHeader (props:any, { emit }:IHomeHeaderEmit) {
  const store = useStore()

  const baseColor = computed(() => store.getters[SettingGetterType.BASE_COLOR])
  // const currentLang = computed<ILangItem>(() => langList[activeIndex.value])
  // const currentLang = ref(1)
  const headerStyle = computed(() => {
    return {
      color: baseColor.value,
    }
  })

  const changeLang = ():void => {
    emit('onChange', 1)
  }
  return {
    baseColor,
    headerStyle,
    // currentLang,
    langList,

    changeLang,
  }
}
export default defineComponent({
  components: {
  },
  props: {
    currentLang: {
      type: Number,
      default: 1,
    },
  },
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
