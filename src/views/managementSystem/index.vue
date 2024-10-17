<template>
  <div class="layout-container">
    <div ref="layoutRef" class="layout">
      <!-- 头部区域 -->
      <HeaderComp
        ref="header"
        :bg-color="bgColor"
        @click-item="onClickToolbar"
        @change-color="(color) => (bgColor = color)"
      />
      <div
        style="height: 100%"
        :style="{ 'background-color': bgColor }"
        id="content"
      ></div>
      <UserRole v-if="selectToolBarKey === 'userRole'" @close="onCloseDialog"></UserRole>
    </div>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderComp from './components/Header.vue'
import UserRole from './components/UserRole.vue'

let bgColor = ref('#e8e9ea')
const toolbarItem = {
  addProject: false,
  classify: false,
  userRole: false,
  setParams: false,
  loadProject: false,
  monitor: false,
}
type SelectItemKey = keyof typeof toolbarItem
const selectToolBarKey = ref<SelectItemKey>('addProject')

const onClickToolbar = (key: SelectItemKey) => {
  console.log('***********')
  if (key === selectToolBarKey.value) {
    return
  }
  // if (key === 'openFile') {
  //     this.$refs.projectManage.open();
  //     return;
  // }
  if (selectToolBarKey.value in toolbarItem) {
    toolbarItem[selectToolBarKey.value] = false
  }

  if (key in toolbarItem) {
    toolbarItem[key] = true

    selectToolBarKey.value = key
  }
}

const onCloseDialog = () => {
  toolbarItem.userRole = false
  selectToolBarKey.value = 'addProject'
}

// const onChangeColor = (c: string) => {
//     bgColor.value = c
// }
</script>

<style lang="less">
.layout-container {
  position: relative;
  height: 100%;
  .layout {
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .project-manage-btn {
    position: absolute;
    top: 140px;
    left: 10px;
    width: 110px;
    height: 43px;
    line-height: 43px;
    background-size: 100%;
    color: #fff;
    font-size: 16px;
    text-align: center;
    background-image: url(${imgPath}/btn.png);
    cursor: pointer;
  }
}
</style>
