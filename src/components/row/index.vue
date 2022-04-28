<template>
  <div
    :class="rowClassName"
    :style="style"
  >
    <!-- <div class="children"> -->
    <slot />
    <!-- </div> -->
  </div>
</template>

<script lang="ts">
import { getPrefixCls } from '@/utils'
import {
  computed, defineComponent, PropType, toRefs,
} from 'vue'
import {
  AlignType, DisplayType, IRowProps, JustifyType,
} from './types/index'

function useRow (props:IRowProps) {
  const {
    type, justify, align,
  } = toRefs(props)
  const style = {}
  const prefixCls = getPrefixCls('row')
  const rowClassName = computed<Array<string>>(() => {
    const overlayClassName = [prefixCls, `${prefixCls}-${type?.value}`]
    if (type?.value === 'flex') {
      overlayClassName.push(`is-justify-${justify?.value}`, `is-align-${align?.value}`)
    }
    return overlayClassName
  })
  return {
    rowClassName,
    style,
  }
}
export default defineComponent({
  components: {},
  props: {
    type: {
      type: String as PropType<DisplayType>,
      default: 'inlene',
    },
    justify: {
      type: String as PropType<JustifyType>,
      default: 'center',
    },
    align: {
      type: String as PropType<AlignType>,
      default: 'top',
    },
  },
  setup (props) {
    return {
      ...useRow(props),
    }
  },
})

</script>

<style lang="scss" scoped>
.children{
  width: auto;
}
.#{$pixel}-row {
  position: relative;
  box-sizing: border-box;
  text-align: center;
  &-flex{
    display: flex;
  }
  // 横向对齐
  &-flex.is-justify-start{
    justify-content: flex-start;
  }
  &-flex.is-justify-end{
    justify-content: flex-end;
  }
  &-flex.is-justify-center{
    justify-content: center;
  }
  &-flex.is-justify-space-around{
    justify-content: space-around;
  }
  &-flex.is-justify-space-between{
    justify-content: space-between;
  }
  // 纵向对齐
  &-flex.is-align-top{
    -webkit-box-align: start;
    align-items: flex-start;
  }
  &-flex.is-align-middle{
    -webkit-box-align: start;
    align-items: center;
  }
  &-flex.is-align-bottom{
    -webkit-box-align: start;
    align-items: flex-end;
  }
  &::after,
  &::before {
    clear: both;
    content: "";
    display: table;
  }
}
</style>
