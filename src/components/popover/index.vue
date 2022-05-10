<template>
  <div class="popover-wrap">
    <view
      id="popover-tag"

      class="popover-tag"
      @click.stop="clickTag"
    >
      <slot />
    </view>
    <div
      :class="contentClassNames"
      :style="currentContentStyle"
    >
      <popover-content>
        <slot name="content" />
      </popover-content>
      <div
        class="mask"
        @click.stop="onClickMask"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed, CSSProperties, defineComponent, PropType, toRefs,
} from 'vue'
import { IPopverProps, IPopverEmit } from './types'
import PopoverContent from './content.vue'

function usePopover (props:IPopverProps, { emit }:IPopverEmit) {
  const { visible, contentStyle } = toRefs(props)
  // const show = ref<boolean>(true)

  const currentContentStyle = computed<CSSProperties>(() => {
    return {
      width: '100%',
      // left: '0px',
      textAlign: 'left',
      ...contentStyle.value,
    }
  })

  const contentClassNames = computed<Array<string>>(() => {
    return [
      'popover-content',
      visible.value && 'show' || 'hidden',
    ]
  })
  const clickTag = () => {
    if (visible.value) {
      // visible.value = false
      emit('update:visible', false)
      return
    }
    emit('update:visible', true)
    // show.value = true
  }
  const onClickMask = () => {
    console.log('handleCloseContent')

    // show.value = false
    emit('update:visible', false)
  }

  return {
    contentClassNames,
    currentContentStyle,

    clickTag,
    onClickMask,
  }
}
export default defineComponent({
  components: {
    'popover-content': PopoverContent,
  },
  props: {
    visible: {
      type: Boolean,
      required: true,
      default: false,
    },
    contentStyle: {
      type: Object as PropType<CSSProperties>,
      default: () => {},
    },
  },
  emits: ['update:visible'],
  setup (props, context) {
    return {
      ...usePopover(props, context),
    }
  },
})

</script>

<style lang="scss" scoped>
$index-level-float:11;
// 遮罩透明度
$mask-opacity: 0.5;
// 面板透明度
$panel-opacity: 1;
.popover-wrap{
  position: relative;
  // z-index: $index-level-float;
  .popover-content{
    // width: 100%;
    position: absolute;
    top: 30px;
    z-index: 99;
    border: $black solid 1px;
    background-color: $white;
    &.show{
      visibility: show;
    }
    &.hidden{
      visibility: hidden;
    }
  }

}
.mask{
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  // background-color: $black;
  opacity: $mask-opacity;
  // z-index: $index-level-float+1;
  z-index: -1;
}

</style>
