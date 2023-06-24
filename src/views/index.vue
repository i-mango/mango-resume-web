<script setup lang='ts'>
import {ref} from "vue";
import ownInfo from "../assets/ownInfo.json";

const circleUrl = ref("")
const {name, age, excpect_work, phoneNumber, email} = ownInfo
// 获取浏览器可视区域宽高（兼容性比较好，不包括工具栏和滚动条）
// const browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
// const browserHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
</script>

<template>
  <div class="content">
    <!--    左侧-->
    <div class="content-left">
      <el-aside class="aside">
        <el-avatar :size="50" :src="circleUrl"/>
        <ul>
          <li>姓名：{{ name }}</li>
          <li>年龄：{{ age }}</li>
          <li>职业：{{ excpect_work }}</li>
          <li>手机号：{{ phoneNumber }}</li>
          <li>邮箱：{{ email }}</li>
        </ul>
      </el-aside>
    </div>
    <!--    右侧-->
    <div class="content-right">
      <el-tabs>
        <el-tab-pane label="我的信息"></el-tab-pane>
        <el-tab-pane label="项目经验"></el-tab-pane>
        <el-tab-pane label="工作经验"></el-tab-pane>
        <el-tab-pane label="联系方式"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style scoped>
.content{
  display: flex;
}
.content-left{
  float: left;
}
.aside {
  background: #b4dcef;
}

.content-right {
  float: left;
}
</style>
