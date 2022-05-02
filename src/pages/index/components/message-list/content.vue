<template>
  <div
    :class="`content
    ${msgItem.isSelf&&'right'||'left'}
    `"
  >
    <div
      :class="`copy ${msgItem.isSelf&&'right'||'left'}`"
      @click="copyText"
    >
      <van-icon name="orders-o" />
    </div>
    <div>
      {{ msgItem.fromContent }}
    </div>
    <div>
      {{ msgItem.toContent }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from 'vue'
import { IMessageItem } from '../types/message-list'

function useContent (props:{msgItem:IMessageItem}) {
  const { msgItem } = toRefs(props)
  const copyText = () => {
    uni.setClipboardData({
      data: msgItem.value.toContent,
      success (res) {
        console.log(res)
      },
      fail (err) {
        console.log(err)
      },
    })
  }
  return {
    copyText,
  }
}
export default defineComponent({
  components: {},
  props: {
    msgItem: {
      type: Object as PropType<IMessageItem>,
      default: () => {},
    },
  },
  setup (props) {
    return {
      ...useContent(props),
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
  .copy{
    position: absolute;
    top: 5px;
    &.left{
      left: 5px
    }
    &.right{
      right: 5px
    }
  }
  &.left{
    @include create-triangle('left');
  }
  &.right{
    @include create-triangle('right');
  }
}
</style>
