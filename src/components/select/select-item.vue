<template>
  <div @click="onClick">
    <div>{{ $t(label) }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import { ISelectItemProps, ISelectItemEmit } from './types/select-item'

function useSelectItem (props:ISelectItemProps, { emit }:ISelectItemEmit) {
  const { value } = toRefs(props)
  const onClick = () => {
    emit('onClick', value.value)
  }
  return {
    onClick,
  }
}
export default defineComponent({
  components: {},
  props: {
    label: {
      type: String,
      required: true,
      default: '',
    },
    value: {
      type: [String, Number],
      required: true,
      default: '',
    },
  },
  emits: ['onClick'],
  setup (props, contenxt) {
    return {
      ...useSelectItem(props, contenxt),
    }
  },
})

</script>

<style lang="scss" scoped>

</style>
