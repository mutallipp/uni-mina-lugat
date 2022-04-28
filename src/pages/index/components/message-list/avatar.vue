<template>
  <van-image
    width="50px"
    height="50px"
    lazy-load
    :src="avatarUrl"
  >
    <template #loading>
      <van-loading
        type="spinner"
        size="20"
        vertical
      />
    </template>
  </van-image>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@store/index'
import { UserGetterType } from '@store/modules/user/constants/getter'

function useAvatar () {
  const store = useStore()
  const avatarUrl = store.getters[UserGetterType.AVATAR_URL]
  return {
    avatarUrl,
  }
}
export default defineComponent({
  components: {},
  props: {},
  setup () {
    return {
      ...useAvatar(),
    }
  },
})

</script>

<style lang="scss" scoped>

</style>
