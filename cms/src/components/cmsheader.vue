<template>
    <el-row class="cms_header" style="margin-left:235px">
        <div class="font-weight-bold">亲宝后台管理系统</div>
        <div class="login-show">
          <img class="user-pic" src="https://picsum.photos/id/66/30/30" alt="" />
          <span>username</span>
        </div>
    </el-row>
  
</template>

<script>
import { ref } from "vue";
export default {
  name: "cmsHeader",
  setup() {
    return {};
  },
};
</script>

<style scoped>
.cms_header{
    background-color:#1890FF;
    height: 50px;
    line-height: 50px;
    display: flex;
    color:#fff;
    justify-content: space-between;
    padding: 0 1rem;
    font-size: 14px;
}
.login-show{
    display: flex;
    align-items: center;
}
.user-pic{
    margin-right:12px;
    border-radius: 50%;
}
.font-weight-bold{
    font-weight:700;
}
</style>
