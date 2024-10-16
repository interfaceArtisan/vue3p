<template>
  <div class="project-manage-index">
    <div style="width: 100%; height: 100%">
      <el-tabs v-model="activeName" type="border-card">
        <el-tab-pane
          v-for="(item, index) in projectArr"
          :key="item.brand"
          :label="item.brand"
          :name="item.name"
        >
          <ProjectInfo
            ref="content"
            :project-info="item.projectInfo"
            @click-right="onPopupMenu"
          />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projectArr } from '@/mockData/projectManageMenu.js'
import ProjectInfo  from './ProjectInfo.vue'
import { ref } from 'vue'

const activeName = ref(projectArr[0].name)
const onPopupMenu = () => {

}
</script>

<style lang="less">
.project-manage-index {
  width: 280px;
  height: calc(100vh - 120px);

  .el-tabs--border-card {
    height: 100%;
    background-size: 100%;
    background-image: url(../../../assets/images/manageSystem/file_list_bg.png);
  }

  .collapse {
    position: absolute;
    top: 50%;
    right: 5px;
    width: 16px;
    height: 16px;
    cursor: pointer;
    background-size: 100%;
    background-image: url(../../../assets/images/manageSystem/left.png);
  }
}
</style>
