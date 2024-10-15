<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';


</script>

<template>
  <nav v-show="$route.meta.showNavBar !== false">
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
  color: cc(G01);

  a {
    display: inline-block;
    margin: 10px;
    text-decoration: none;
  }
}
</style>
