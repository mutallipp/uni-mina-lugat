<template>
  <div>
    <van-radio-group
      :value="language"
      @change="handleSetLanguage"
    >
      <div
        v-for="(item) in languageType"
        :key="item.value"
        class="m-t-10"
      >
        <van-radio

          custom-class="radio-item"
          :name="item.value"
          icon-size="24px"
        >
          {{ $t(item.label) }}
        </van-radio>
      </div>
    </van-radio-group>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, SetupContext } from 'vue'
import { useI18n } from '@lang/index'
import * as utils from '@utils/index'
import { useStore } from '@store/index'
import { languageOptions } from '@lang/constants'
import { IAnyObj } from '@/defineds'
import { SettingActionTypes } from '@/store/modules/setting/constants/action'
import { SettingGetterType } from '@/store/modules/setting/constants/getter'

/**
 * 切换语言组合
 */
function useChangeLanguage (props:any, { emit }:SetupContext<Array<'changeLang'>>) {
  const i18n = useI18n()
  const { t } = useI18n()
  const store = useStore()

  // const store = useStore()

  /**
   * 切换语言
   */
  const handleSetLanguage = (e: IAnyObj): void => {
    const { detail: lang } = e
    i18n.locale.value = lang
    store.dispatch(SettingActionTypes.SET_LANGUAGE, lang)
    utils.toast(t('static.common.changeLang'))
    emit('changeLang', lang)
  }

  return {
    handleSetLanguage,
  }
}

/**
 * 选中的语言组合
 */
function useLanguage () {
  const store = useStore()
  /**
   * 语言种类的编码
   */
  const languageType = languageOptions.filter(item => {
    return ['zh', 'uy'].includes(item.value)
  })

  /**
   * 当前选中的语言
   */
  const language = computed((): string => {
    return store.getters[SettingGetterType.SELECT_LANG]
  })

  return {
    languageType,
    language,
  }
}
export default defineComponent({
  name: 'select-lang',
  components: {},
  props: {},
  emits: ['changeLang'],
  setup (props, context) {
    return {
      ...useChangeLanguage(props, context),
      ...useLanguage(),
    }
  },
})

</script>

<style lang="scss" scoped>
.radio-item{
  margin-top:10px;
}
</style>
