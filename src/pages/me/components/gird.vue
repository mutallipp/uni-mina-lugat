<template>
  <div class="gird-container">
    <template
      v-for="(item,index) in gridList"
      :key="index"
    >
      <button
        v-if="item.name === 'contact'"
        class="gird-item"
        open-type="contact"
        style="border: none;"
      >
        <div class="icon m-t-5">
          <van-icon
            size="40px"
            :name="item.icon"
          />
        </div>
        <div class="name">
          {{ item.title }}
        </div>
      </button>
      <div
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
          {{ item.title }}
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from 'vue'
import * as utils from '@utils/index'

interface IDataSourseItem {
  name:string,
  title:string,
  icon:string,
  to?:string,
}
// <van-icon name="info-o" />
// interface IGirdProps {
//   dataSourse:Array<IDataSourseItem>
// }
function useGird () {
  const gridList:IDataSourseItem[] = [
    {
      icon: 'info-o',
      title: 'كىچىك پروگرامما توغرىسىدا',
      name: 'mina',
      to: '/pages/me/info',
    },
    {
      icon: 'service-o',
      title: '联系我们',
      name: 'contact',
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
    } else {
      utils.toast('此功能还没开发', 'error')
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
  setup () {
    return {
      ...useGird(),
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
