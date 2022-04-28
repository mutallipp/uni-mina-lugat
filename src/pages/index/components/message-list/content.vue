<template>
  <div
    :class="`content
    ${msgItem.isSelf&&'right'||'left'}
    `"
  >
    <div>
      {{ msgItem.fromContent }}
    </div>
    <div>
      {{ msgItem.toContent }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IMessageItem } from '../types/message-list'

function useContent () {
  return {}
}
export default defineComponent({
  components: {},
  props: {
    msgItem: {
      type: Object as PropType<IMessageItem>,
      default: () => {},
    },
  },
  setup () {
    return {
      ...useContent(),
    }
  },
})

</script>

<style lang="scss" scoped>
.content{
  position: relative;
  background-color: #3366ff;
  color: white;
  margin: 0 20px;
  padding: 20px;
  border-radius: 5px;
  &.left{
    @include create-triangle('left');
  }
  &.right{
    @include create-triangle('right');
  }
}
</style>
