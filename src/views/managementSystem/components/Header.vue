<template>
    <div class="header">
        <div class="title">xxxx云服务平台</div>
        <ToolBar
            :bg-color="bgColor"
            @click-item="key => $emit('click-item', key)"
            @change-color="c => $emit('change-color', c)"
        />
    </div>
</template>

<script setup lang="ts">
import ToolBar from './ToolBar.vue'
defineProps<{
    bgColor: string
}>()

</script>

<style lang="less">
.header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex: none;
    height: 120px;
    background-color: #1e63bb;
    .title {
        padding-left: 20px;
        height: 65px;
        font-size: 29px;
        line-height: 65px;
        color: #fff;
        background-size: cover;
        background-repeat: no-repeat;
    }
}
</style>