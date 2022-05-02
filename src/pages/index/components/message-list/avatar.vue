<template>
  <div>
    <van-image
      v-if="avatarUrl"
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
    <van-icon
      v-else
      name="manager"
      size="50px"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@store/index'
import { UserGetterType } from '@store/modules/user/constants/getter'

function useAvatar () {
  const store = useStore()
  const avatarUrl = computed(() => {
    return store.getters[UserGetterType.AVATAR_URL]
  })
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
