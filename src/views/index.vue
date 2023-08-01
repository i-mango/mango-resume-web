<script setup lang='ts'>

import TopMenu from "@/components/topMenu/topMenu.vue";
import HomePage from "@/components/homePage/homePage.vue";
import Profile from "@/components/profile/profile.vue";
import Skills from "@/components/skills/skills.vue";
import WorkExp from "@/components/workExp/workExp.vue";
import ProjectExp from "@/components/projectExp/projectExp.vue";
import Footer from "@/components/footer/footer-include.vue";
</script>

<template>
  <div class="page">
    <topMenu></topMenu>
    <!-- 首页 -->
    <HomePage></HomePage>
    <!-- 个人简介 -->
    <profile></profile>
    <!-- 个人技能 -->
    <skills></skills>
    <!-- 工作经历 -->
    <workExp></workExp>
    <!-- 项目经历 -->
    <projectExp></projectExp>
    <!-- 页脚 -->
    <Footer></Footer>
  </div>
</template>

<style scoped>
.page{
  margin-left: -57px;
  margin-right: -57px;
}
</style>
