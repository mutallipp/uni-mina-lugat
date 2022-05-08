<template>
  <div class="popover-content-wrap">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

function usePopoverContent () {
  return {}
}
export default defineComponent({
  components: {},
  props: {},
  setup () {
    return {
      ...usePopoverContent(),
    }
  },
})

</script>

<style lang="scss" scoped>
.popover-content-wrap{
  background-color: $white;
}
</style>
