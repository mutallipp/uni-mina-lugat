<template>
  <div class="popover-wrap">
    <div class="popover-tag">
      <slot />
    </div>
    <div class="popover-content">
      <popover-content>
        content
        <slot name="content" />
      </popover-content>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PopoverContent from './content.vue'

function usePopover () {
  return {}
}
export default defineComponent({
  components: {
    'popover-content': PopoverContent,
  },
  props: {},
  setup () {
    return {
      ...usePopover(),
    }
  },
})

</script>

<style lang="scss" scoped>
.popover-wrap{
  position: relative;
}
</style>
