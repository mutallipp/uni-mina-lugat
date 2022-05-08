<template>
  <div class="select-lang">
    <popover v-model:visible="popoverVisible">
      <div>
        {{ currentValue }}
        <van-icon
          v-show="!popoverVisible"
          name="arrow-down"
        />
        <van-icon
          v-show="popoverVisible"
          name="arrow-up"
        />
      </div>
      <template #content>
        <m-select-item
          v-for="(item,index) in data"
          :key="item[option.value]+index"
          :label="item[option.label]"
          :value="item[option.value]"
          @onClick="onClickItem"
        />
      </template>
    </popover>
  </div>
</template>

<script lang="ts">
import {
  computed, defineComponent, PropType, ref, toRefs,
} from 'vue'
import Popover from '@components/popover/index.vue'
import { IAnyObj } from '@/defineds'
import { ISelectEmit, ISelectOption, ISelectProps } from './types'
import SelectItem from './select-item.vue'

function useDropDown (props:ISelectProps, { emit }:ISelectEmit) {
  const { value, data, option } = toRefs(props)
  const popoverVisible = ref(false)
  const currentValue = computed({
    get () {
      return data.value?.find(item => item[option.value.value] === value.value)?.[option.value.label] || '请选择'
    },
    set (value:any) {
      console.log('value', value)
    },
  })
  const onClickItem = (key:string) => {
    emit('update:value', key)
    popoverVisible.value = false
  }
  return {
    currentValue,
    popoverVisible,

    onClickItem,
  }
}
export default defineComponent({
  components: {
    'popover': Popover,
    'm-select-item': SelectItem,
  },
  props: {
    value: {
      type: [String, Number, Boolean, Object, Array],
      default: 'a',
    },
    data: {
      type: Array as PropType<Array<IAnyObj>>,
      required: true,
      default: () => [],
    },
    option: {
      type: Object as PropType<ISelectOption>,
      default: () => {
        return {
          label: 'label',
          value: 'value',
        }
      },
    },
  },
  emits: ['update:value'],
  setup (props, context) {
    return {
      ...useDropDown(props, context),
    }
  },
})

</script>

<style lang="scss" scoped>

</style>
