<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';


</script>

<template>
  <nav>
    <RouterLink to="/chinamap">中国地图</RouterLink>
    <RouterLink to="/testcrossorigin">测试跨域</RouterLink>
    <RouterLink to="/testbem">测试bem</RouterLink>
    <RouterLink to="/largescreen">大屏展示echarts</RouterLink>

  </nav>

  <main>
    <RouterView></RouterView>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  height: 100%;
}

nav {
  display: flex;
  justify-content: center;
  border: 1px solid pink;
  border-radius: 5px;
  color: cc(G01);

  a {
    display: inline-block;
    margin: 10px;
    text-decoration: none;
  }
}
</style>
