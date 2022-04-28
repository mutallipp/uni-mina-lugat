<template>
  <div
    :class="colClassName"
    :style="style"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { getPrefixCls } from '@/utils'
import { computed, defineComponent, toRefs } from 'vue'
import { IColProps } from './types/index'

function useCol (props:IColProps) {
  const { span } = toRefs(props)
  const prefixCls = getPrefixCls('col')
  const colClassName = computed<Array<string>>(() => {
    const overlayClassName = [
      prefixCls,
      `${prefixCls}-${span.value}`,
    ]
    return overlayClassName
  })
  return {
    colClassName,
  }
}
export default defineComponent({
  components: {},
  props: {
    span: {
      type: [Number, String],
      default: 0,
      required: true,
    },
  },
  setup (props) {
    return {
      ...useCol(props),
    }
  },
})

</script>

<style lang="scss" scoped>
.#{$pixel}-col {
  float: left;
  box-sizing: border-box;
}

// 生成 .cider-form-col-1 至 .cider-form-col-n 的class
@mixin genrate-col-cls($columns:24) {
  @for $column from 0 to $columns {
    @if $column == 0 {
      .#{$pixel}-col-#{$column}{
        display: none
      }
    } @else{
      .#{$pixel}-col-#{$column}{
        // display: block;
        // box-sizing: border-box;
        width: $column/$columns*100%;
      }
    }

  }
}
// 生成 .cider-form-col-1 至 .cider-form-col-24 的class
@include genrate-col-cls();

</style>
