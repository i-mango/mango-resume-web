<script>
import {ref, nextTick} from 'vue';
import ownInfo from '@/assets/ownInfo.json'
export default {
  name: 'topMenu',
  data () {
    return {
      activeIndex: '1',
      targetEle: null,
      own: ownInfo.own
    }
  },
  methods: {
    // 点击菜单栏的选择，自动滚动到对应的视图
    async handleSelect(index) {
      let name = ''
      if (index === '1') name = 'homepage'
      if (index === '4') name = 'word-exp'
      if (index === '3') name = 'skills'
      if (index === '2') name = 'profile'
      if (index === '5') name = 'project-exp'
      await nextTick(); // Wait for the next DOM update

      const targetEle = document.querySelector('.' + name);
      this.targetEle = ref(targetEle);
      const offsetTop = this.targetEle.value.offsetTop;
      document.documentElement.scrollTop = offsetTop - 150;
    }
  }
}
</script>

<template>
  <div class="menuPage">
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
    >
      <el-menu-item>
        <img src="../../assets/favicon.ico" alt="" class="logo-img">
        <img src="src/assets/mango-logo.png" alt="" class="logo-iamge">
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">个人简介</el-menu-item>
      <el-menu-item index="3">个人技能</el-menu-item>
      <el-menu-item index="4">工作经历</el-menu-item>
      <el-menu-item index="5">项目经历</el-menu-item>
    </el-menu>
  </div>
</template>

<style>
.menuPage{
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
}
.el-menu--horizontal{
  height: 100px;
}
.el-menu--horizontal > .el-menu-item {
  font-size: 25px;
}
.logo-img{
  width: 60px;
  outline:none;
  vertical-align: middle;
  padding: 5px;
}
.logo-iamge{
  width: 200px;
  outline:none;
  vertical-align: middle;
  padding: 5px;
}
.flex-grow {
  flex-grow: 1;
}
</style>
