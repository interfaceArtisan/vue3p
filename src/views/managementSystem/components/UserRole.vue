<template>
  <el-dialog
    v-model="showDialog"
    has-close-icon
    draggable
    title="用户角色配置管理"
    :title-style="{ 'padding-left': '20px' }"
    class="user-role"
    @close="onClose"
  >
    <el-tabs v-model="activeName" type="card" @tab-click="onTabClick">
      <el-tab-pane label="角色管理" name="role">
        <el-table
          ref="roleTable"
          :data="roleData"
          style="width: 100%"
          max-height="340"
        >
          <el-table-column type="selection" width="55" />
          <el-table-column property="name" label="角色名称" width="120">
            <template #default="scope">
              <el-select
                v-model="scope.row.name"
                :placeholder="scope.row.name"
                :disabled="!scope.row.isEdit"
              >
                <el-option
                  v-for="(roleName, index) in roles"
                  :key="index"
                  :label="roleName"
                  :value="roleName"
                />
              </el-select>
            </template>
          </el-table-column>
          <el-table-column property="desc" label="描述" width="120">
            <template #default="scope">
              <el-input
                v-model="scope.row.desc"
                :placeholder="scope.row.desc"
                :disabled="!scope.row.isEdit"
              />
            </template>
          </el-table-column>
          <el-table-column property="operate" label="操作" width="200">
            <template #default="scope">
              <el-button
                size="small"
                @click="onRoleEdit(scope.$index)"
                >编辑</el-button
              >
              <el-button
                size="small"
                type="danger"
                @click="onRoleDelete(scope.$index)"
                >删除</el-button
              >
              <el-button
                size="small"
                type="success"
                @click="onRoleRights()"
                >权限</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="用户管理" name="user">
        <el-table
          ref="userTable"
          :data="userData"
          style="width: 100%"
          max-height="340"
        >
          <el-table-column type="selection" width="55" />
          <el-table-column property="role" label="角色名称" width="120">
            <template #default="scope">
              <el-input
                v-model="scope.row.value"
                :placeholder="scope.row.role"
                :disabled="!scope.row.isEdit"
              />
            </template>
          </el-table-column>
          <el-table-column property="userName" label="用户名" width="120">
            <template #default="scope">
              <el-input
                v-model="scope.row.userName"
                :placeholder="scope.row.userName"
                :disabled="!scope.row.isEdit"
              />
            </template>
          </el-table-column>
          <el-table-column property="status" label="状态" width="120">
            <template #default="scope">
              <el-check-tag
                :class="{ 'no-edit': !scope.row.isEdit }"
                :checked="scope.row.status ? true : false"
                @change="onChangeStatus($event, scope.$index)"
                >{{ scope.row.status ? '在线' : '过期' }}</el-check-tag
              >
            </template>
          </el-table-column>
          <el-table-column label="操作" width="300">
            <template #default="scope">
              <el-button
                size="small"
                @click="onUserEdit(scope.$index, scope.row)"
                >编辑</el-button
              >
              <el-button
                size="small"
                type="danger"
                @click="onUserDelete(scope.$index)"
                >删除</el-button
              >
              <el-button
                size="small"
                type="danger"
                @click="onUserReset()"
                >重置密码</el-button
              >
              <el-button
                size="small"
                type="success"
                @click="onUserRights()"
                >权限</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <el-button class="btn" @click="onAdd"
      >+添加{{ activeName === 'role' ? '角色' : '用户' }}</el-button
    >
  </el-dialog>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const activeName = ref('role')
const showDialog = ref(true)

const roleData = reactive([
  {
    name: 'admin',
    desc: '管理员',
    isEdit: false,
  },
  {
    name: 'user',
    desc: '普通用户',
    isEdit: false,
  },
])
const roles = roleData.map((role) => role.name)

const userData = reactive([
  {
    role: 'admin',
    userName: '张三',
    status: 0,
    isEdit: false,
  },
  {
    role: 'user',
    userName: '张三2号',
    status: 1,
    isEdit: false,
  },
])


const onRoleEdit = (index: number) => {
  roleData[index].isEdit = true
}
const onRoleDelete = (index: number) => {
  roleData.splice(index, 1)
}
const onRoleRights = () => {}
const onUserEdit = (index: number, row: any) => {
  userData[index].isEdit = true
  console.log('index:', index, 'row:', row)
}
const onUserDelete = (index: number) => {
  userData.splice(index, 1)
}
const onUserReset = () => {}
const onUserRights = () => {}
const onChangeStatus = (status: any, index: number) => {
  console.log('status:', status)
  userData[index].status = status
}
const onTabClick = (val: any) => {
  console.log('val:', val)
}
const onAdd = () => {
  activeName.value === 'role' ? addRole() : addUser()
}
const addUser = () => {
  userData.push({
    role: 'admin',
    userName: '用户名',
    status: 1,
    isEdit: false,
  })
}
const addRole = () => {
  roleData.push({
    name: '名字',
    desc: '功能描述',
    isEdit: false,
  })
}

const emit = defineEmits(['close'])
const onClose = () => {
  emit('close', 'userRole')
}
</script>

<style lang="less" scoped>
.btn {
  position: absolute;
  top: 45px;
  right: 50px;
}
.no-edit {
  pointer-events: none;
}
</style>
