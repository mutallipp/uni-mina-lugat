<script lang="ts">
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app'
import { defineComponent, ref } from 'vue'
import { useStore } from '@store/index'
import { UserActionTypes } from './store/modules/user/constants/action'
// import { useSharePage } from './hooks/share'

function useApp () {
  // const { onShareAppMessage, onShareTimeline } = useSharePage()

  const title = ref('')
  onLaunch(async () => {
    const store = useStore()
    console.log('store:', store)
    store.dispatch(UserActionTypes.LOGIN)
    store.dispatch(UserActionTypes.GET_MEMBER_INFO)

    console.log('App Launch')
  })
  onShow(() => {
    console.log('App Show')
    title.value = 'hello uni-app-vue3 setup'
  })
  onHide(() => {
    console.log('App Hide')
    title.value = 'see you'
  })
  return {
    // onShareAppMessage,
    // onShareTimeline,
  }
}
export default defineComponent({
  components: {},
  props: {},
  setup () {
    return {
      ...useApp(),
    }
  },
})

</script>

<style lang="scss" scoped>

</style>
