<template>
  <el-button @click="testReq" type="primary">测试跨域服务端是否会接收到请求</el-button>
  <el-button @click="cancelReq" type="primary">取消请求</el-button>

  <h2>请求回来的值：</h2>
  <div>user1: {{ users.user1 }}</div>
  <div>user2: {{ users.user2 }}</div>
  <div>user3: {{ users.user3 }}</div>


</template>

<script setup lang="ts">
import { httpRequest1 } from '../utils/http';

import type { User, Userskey } from '../types/user'
import { ref } from 'vue'

const users = ref({} as Record<Userskey, User>)

let abort: () => void = () => {}

const testReq = async () => {
  try {
    const request = httpRequest1<Record<Userskey, User>>({
      url: '/api/getUserList',
      method: 'get',
   
    })
    abort = request.abort
    console.log(await request.http)
    users.value = await request.http
  } catch (error) {
    console.log(error)
  }
}

// 在这里，abort每次取的值都是上一次请求返回的结果，因此如果多次发送请求后，再点击取消，那么取消的是最近一次发送请求的那个
const cancelReq = () => {
  abort()
}
</script>


<style scoped lang='less'>
</style>