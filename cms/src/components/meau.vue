<template>
  <!-- <el-row class="tac"> -->
  <el-col class="meau" id="meau">
    <el-row class="meau_title" align="middle">
      <img class="user-pic" src="https://picsum.photos/id/66/200/200" alt="" />
      <div class="text_left">
        <div class="mb-2">admin</div>
        <el-row align="middle"
          ><span class="green-circle"></span
          ><span class="font-12">超级管理员</span></el-row
        >
      </div>
    </el-row>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="1"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1">
        <router-link to="/" class="index_page">
          <el-icon><House /></el-icon>
          <span>主页</span>
        </router-link>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><Folder /></el-icon>
          <span>内容管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1"
            ><router-link to="/upload_content">已上传内容</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <el-icon><Document /></el-icon>
          <span>剧本管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1"
            ><router-link to="/text_list">项目列表</router-link></el-menu-item
          >
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>
          <el-icon><Headset /></el-icon>
          <span>音频管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1"
            ><router-link to="/voice_list">项目列表</router-link></el-menu-item
          >
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="5">
        <template #title>
          <el-icon><VideoPlay /></el-icon>
          <span>视频管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1"
            ><router-link to="/vedio_list"></router-link>项目列表</el-menu-item
          >
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="6">
        <template #title>
          <el-icon><Picture /></el-icon>
          <span>设计管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="6-1"
            ><router-link to="/design_list">项目列表</router-link></el-menu-item
          >
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="7">
        <template #title>
          <el-icon><User /></el-icon>
          <span>权限设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="7-1"
            ><router-link to="/admin_list"
              >管理员列表</router-link
            ></el-menu-item
          >
          <el-menu-item index="7-1"
            ><router-link to="/user_permission"
              >角色权限</router-link
            ></el-menu-item
          >
          <el-menu-item index="7-1"
            ><router-link to="/about_outside"
              >外包相关</router-link
            ></el-menu-item
          >
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="8">
        <template #title>
          <el-icon><SuccessFilled /></el-icon>
          <span>发布管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="8-1"
            ><router-link to="/specialSend">专题发布</router-link></el-menu-item
          >
          <el-menu-item index="8-1"
            ><router-link to="/special_write"
              >专辑编辑</router-link
            ></el-menu-item
          >
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="9">
        <template #title>
          <el-icon><Stamp /></el-icon>
          <span>客户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="9-1"
            ><router-link to="/customer_list"></router-link
            >客户列表</el-menu-item
          >
          <el-menu-item index="9-1"
            ><router-link to="/agreementManage"></router-link
            >合同管理</el-menu-item
          >
        </el-menu-item-group>
      </el-sub-menu>
      <el-sub-menu index="10">
        <template #title>
          <el-icon><Flag /></el-icon>
          <span>外包管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="10-1"
            ><router-link to="/outbag_list"></router-link>外包列表</el-menu-item
          >
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </el-col>
  <!-- </el-row> -->
</template>

<script>
import { ref } from "vue";

export default {
  name: "meau",
  setup() {
    return {};
  },
  components: {},
};
</script>

<style scoped>
.meau {
  position: fixed;
  width: 235px;
  height: 100%;
  bottom: 0;
  background-color: #545c64;
  z-index: 1000;
}
.mb-2 {
  margin-bottom: 8px;
}
.meau_title {
  color: #fff;
  padding: 12px 20px;
  border-bottom: 1px solid #666;
  border-right: solid 1px #dcdfe6;
}
.user-pic {
  width: 45px;
  margin-right: 12px;
  border-radius: 50%;
}
.text_left {
  text-align: start;
}
.green-circle {
  width: 10px;
  height: 10px;
  background-color: #28d17c;
  border-radius: 50%;
  margin-right: 4px;
}
.font-12 {
  font-size: 12px;
}
.meau .el-menu-item a {
  color: #fff;
  width: 100%;
  padding:0 20px;
  text-align: start;
}
.meau .el-sub-menu .el-menu-item a{
  padding:0 50px;
}
#meau .el-menu-item{
  padding:0
}
.meau .el-menu-item.is-active a {
  color: #ffd04b;
}
.index_page{
  display: flex;
  align-items: center;
}
</style>
