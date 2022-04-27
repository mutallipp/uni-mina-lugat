<template>
  <div>
    <div>{{ name }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

function useTest () {
  const name = ref('tenst')
  return {
    name,
  }
}
export default defineComponent({
  name: 'test',
  components: {},
  props: {},
  setup () {
    return {
      ...useTest(),
    }
  },
})

</script>

<style lang="scss" scoped>

</style>
