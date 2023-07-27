<script>
import ownInfo from "@/assets/ownInfo.json";
import {Edit} from "@element-plus/icons-vue";

export default {
  name: 'workExp',
  computed: {
    Edit() {
      return Edit
    }
  },
  data(){
    return{
      workExp: ownInfo.workExp
    }
  }
}
</script>

<template>
  <div>
    <el-divider content-position="center"><h1>工作经历</h1></el-divider>
    <div style="width: 40%; margin: auto">
      <el-timeline>
        <el-timeline-item
            v-for="(work, index) in workExp"
            :key="index"
            :icon="work.icon"
            :type="work.type"
            :color="work.color"
            :size="work.size"
            :timestamp="work.timestamp"
            placement="top"
        >
          <el-card>
            <h2>{{work.name}}</h2>
            <h4>{{work.detail}}</h4>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<style scoped>

</style>
