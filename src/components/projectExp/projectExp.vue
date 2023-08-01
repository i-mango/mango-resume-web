<script>
import ownInfo from '@/assets/ownInfo.json'
export default {
  name: 'projectExp',
  data() {
    return {
      projectExpList: ownInfo.projectExperience,
    };
  }
}
</script>

<template>
  <div>
    <el-divider content-position="center"><h1>项目经验</h1></el-divider>
    <el-row>
      <el-col v-for="(project,index) in projectExpList" :key="index" :span="6">
        <el-card class="box-card">
          <h3>项目名称：{{ project.name }}</h3>
          <p>项目时间：{{ project.time }}</p>
          <p>项目职责：{{ project.duty }}</p>
          <p>项目技术：{{ project.skill }}</p>
          <p>项目描述：{{ project.detail }}</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.box-card{
  width: 80%;
}
</style>
