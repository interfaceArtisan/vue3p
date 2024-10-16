<template>
  <div class="project">
    <el-collapse accordion v-model="activename">
      <el-collapse-item
        v-for="(item, key) in props.projectInfo"
        ref="collapseItem"
        :name="item.title"
        :key="item.title"
        :title="item.title"
      >
        <template #title>
          <div class="custom-title">{{ item.title }}</div>
        </template>
        <el-tree
          ref="tree"
          highlight-current
          show-checkbox
          check-on-click-node
          :data-index="key"
          :data="item.files"
          @node-click="handleNodeClick(arguments)"
          @node-contextmenu="onClickRight"
        >
          <template #default="scope">
            <div class="custom-node">
              <i
                class="tree-icon"
                :class="{
                  'tree-icon-expanded': scope.node.expanded,
                  'tree-icon-collapse': !scope.node.expanded,
                  'tree-icon-leaf': scope.node.isLeaf,
                }"
              ></i>
              <span style="margin-left: 8px">{{ scope.node.label }}</span>
            </div>
          </template>
        </el-tree>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  projectInfo: Object,
})
const activename = ref('')

const handleNodeClick = () => {}

const onClickRight = () => {}
</script>

<style lang="less">
@imgPath: '@assets/images/manageSystem';
.project {
  .custom-title {
    position: relative;
    padding-left: 20px;
    width: 100%;
    height: 37px;
    background-image: url('@{imgPath}/file_frame.png');
    background-size: contain;
    background-repeat: no-repeat;
    font-size: 16px;
    line-height: 37px;
    color: #fff;
  }
  .el-collapse-item__header > .custom-title::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 12px;
    right: 20px;
    width: 13px;
    height: 13px;
    background-image: url('@{imgPath}/collapse.png');
    background-repeat: no-repeat;
    background-size: contain;
  }

  .el-icon.el-collapse-item__arrow {
    display: none;
  }
  .el-collapse-item__header.is-active > .custom-title::after {
    background-image: url('@{imgPath}/expand.png');
  }
}
</style>
