<template>
  <div
    class="header-container"
  >
    <m-row>
      <m-col :span="23">
        <div
          class="header-lang"
          :style="headerStyle"
        >
          <m-select
            v-model:value="lang"
            :data="langList"
            :option="{label:'text',value:'value'}"
          />
        </div>
      </m-col>
      <m-col :span="1">
        <van-icon
          name="setting-o"
          dot
          @click="onClickSetting"
        />
      </m-col>
    </m-row>
    <m-setting
      v-model:visible="settingVisible"
      @click="clickSettingItem"
    />
  </div>
</template>

<script lang="ts">
import {
  computed, defineComponent, ref, toRefs,
} from 'vue'
import { useStore } from '@/store'
import { SettingGetterType } from '@/store/modules/setting/constants/getter'
import Select from '@components/select/index.vue'
import Setting from '@/pages/me/components/setting.vue'
import { IHomeHeaderEmit, IHomeHeaderProps } from './types/header'
import { langList } from './constants/header'

function useHomeHeader (props:IHomeHeaderProps, { emit }:IHomeHeaderEmit) {
  const store = useStore()
  const { currentLang } = toRefs(props)

  const settingVisible = ref(false)

  const baseColor = computed(() => store.getters[SettingGetterType.BASE_COLOR])
  const lang = computed({
    get () {
      return currentLang.value
    },
    set (val:number) {
      emit('update:currentLang', val)
    },
  })
  const headerStyle = computed(() => {
    return {
      color: baseColor.value,
    }
  })
  const onClickSetting = () => {
    settingVisible.value = true
  }
  return {
    baseColor,
    headerStyle,
    langList,
    lang,
    settingVisible,

    onClickSetting,
  }
}
export default defineComponent({
  components: {
    'm-select': Select,
    'm-setting': Setting,
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
  background-color: white;
    padding: 10px 10px;
  border-radius: 5px;
  .header-lang{
  display: flex;
  justify-content: center;
  text-align: center;

  // margin:10px;

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
}

</style>
