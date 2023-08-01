<script>
import ownInfo from '@/assets/ownInfo.json'
export default {
  name: 'projectExp',
  data() {
    return {
      projectExp: ownInfo.projectExperience,
    };
  }
}
</script>

<template>
  <div>
    <el-divider content-position="center"><h1>项目经验</h1></el-divider>
    <el-row>
      <el-col>
        <el-card class="box-card">
          <div class="text item">
            <h3>项目名称：{{ projectExp.projectName }}</h3>
            <p>项目描述：{{ projectExp.projectDescription }}</p>
            <p>项目职责：{{ projectExp.projectDuty }}</p>
            <p>项目技术：{{ projectExp.projectSkill }}</p>
            <p>项目时间：{{ projectExp.projectTime }}</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>

</style>
