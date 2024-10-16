<template>
    <div class="toolbar">
        <el-row :gutter="20" align="middle" style="height: 100%;">
            <el-col
                v-for="(item, key) in toolbarMap"
                :span="2"
                :key="key"
            >
                <el-color-picker
                    v-if="item.key === 'changeBg'"
                    v-model="color"
                    show-alpha
                    @active-change="onActiveColorChange"
                />
                <RouterLink
                    v-else-if="item.tag === 'a'"
                    :to="item.path"
                    :style="{'background-image': `url(${item.imgSrc})`}"
                    style="display: block;"
                    class="toolbar-item"
                    :title="item.text"
                >
                </RouterLink>
                <div
                    v-else
                    class="toolbar-item"
                    :style="{'background-image': 'url(' + item.imgSrc + ')'}"
                    :title="item.text"
                    @click="onClickItem(item.key)"
                ></div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
    bgColor: String
})

const color = ref(props.bgColor)
const imgPath = `/vue3p/src/assets/images/manageSystem`
const toolbarMap = [{
    text: '组织项目管理',
    key: 'addProject',
    imgSrc: `${imgPath}/add_project.png`
}, {
    text: '加载项目',
    key: 'loadProject',
    imgSrc: `${imgPath}/load_project.png`,
    tag: 'a',
    path: '/managesystem/loadproject'
}, {
    text: '打开文件',
    key: 'openFile',
    imgSrc: `${imgPath}/open_file.png`
}, {
    text: '参数设置',
    key: 'setParams',
    imgSrc: `${imgPath}/set_params.png`
}, {
    text: '修改背景色',
    key: 'changeBg',
    imgSrc: `${imgPath}/change_bg.png`
}, {
    text: '俯视图',
    key: 'downView',
    imgSrc: `${imgPath}/down_view.png`
}, {
    text: '侧视图',
    key: 'sideView',
    imgSrc: `${imgPath}/side_view.png`
}, {
    text: '距离量测',
    key: 'distance',
    imgSrc: `${imgPath}/distance.png`
}, {
    text: '人工分类',
    key: 'classify',
    imgSrc: `${imgPath}/classify.png`
}, {
    text: '后台任务查看',
    key: 'monitor',
    imgSrc: `${imgPath}/monitor.png`
}, {
    text: '用户管理',
    key: 'userRole',
    imgSrc: `${imgPath}/user_role.png`
}]


const emit = defineEmits(['click-item', 'change-color'])
const onClickItem = (key: string) => {
    emit('click-item', key);
}

const onActiveColorChange = (c: string) => {
    emit('change-color', c);
}
</script>

<style lang="less">
.toolbar {
    width: 50%;
    height: 55px;
    padding-left: 20px;

    .toolbar-item {
        width: 38px;
        height: 38px;
        cursor: pointer;
        background-size: 38px;
        background-repeat: no-repeat;
    }
}
</style>