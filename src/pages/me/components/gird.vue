<template>
  <div class="gird-container">
    <template
      v-for="(item,index) in gridList"
      :key="index"
    >
      <button
        class="gird-item"
        :open-type="item.name === 'contact'&&'contact'|| ''"
        style="border: none;"
        @click="handleClick(item)"
      >
        <div class="icon m-t-5">
          <van-icon
            size="40px"
            :name="item.icon"
          />
        </div>
        <div class="name">
          {{ $t(item.title) }}
        </div>
      </button>
      <!-- <div
        v-else
        class="gird-item"
        @click="handleClick(item)"
      >
        <div class="icon m-t-5">
          <van-icon
            size="40px"
            :name="item.icon"
          />
        </div>
        <div class="name">
          {{ $t(item.title) }}
        </div>
      </div> -->
    </template>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, SetupContext,
} from 'vue'
import * as utils from '@utils/index'
import { useI18n } from '@lang/index'

interface IDataSourseItem {
  name:string,
  title:string,
  icon:string,
  to?:string,
}
function useGird (props:any, { emit }:SetupContext<Array<'onClick'>>) {
  const { t } = useI18n()
  const gridList:IDataSourseItem[] = [
    {
      icon: 'info-o',
      title: 'me.grid.mina',
      name: 'mina',
      to: '/pages/me/info',
    },
    {
      icon: 'service-o',
      title: 'me.grid.contact',
      name: 'contact',
      to: '/pages/me/info',
    },
    {
      icon: 'setting-o',
      title: 'me.grid.setting',
      name: 'setting',
      to: '/pages/me/info',
    },
  ]
  const handleClick = (item:IDataSourseItem) => {
    if (item?.name) {
      if (item.name === 'mina' && item.to) {
        uni.navigateTo({
          url: item.to,
        })
      }
      if (item.name === 'setting') {
        emit('onClick', item.name)
      }
    } else {
      utils.toast(t('static.common.doNotDev'), 'error')
    }
  }

  return {
    gridList,

    handleClick,
  }
}
export default defineComponent({
  components: {},
  props: {
  },
  emits: ['onClick'],
  setup (props, context) {
    return {
      ...useGird(props, context),
    }
  },
})

</script>

<style lang="scss" scoped>
.gird-container { // 大盒子
  width: 98%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; // 替代原先的space-between布局方式
}
.gird-item { // 每个item
    flex: 1;
    height: 100px;
    margin: 0 5px 5px 0; // 间隙为5px
    background-color: white!important;
    // border-color:transparent;
    text-align: center;
    width: calc((100% - 10px) / 3);  // 这里的10px = (分布个数3-1)*间隙5px, 可以根据实际的分布个数和间隙区调整
    min-width: calc((100% - 10px) / 3); // 加入这两个后每个item的宽度就生效了
    max-width: calc((100% - 10px) / 3); // 加入这两个后每个item的宽度就生效了
    &:nth-child(3n) { // 去除第3n个的margin-right
      margin-right: 0;
    }
  .icon{
   color: #3366ff;
  }
 }
</style>
