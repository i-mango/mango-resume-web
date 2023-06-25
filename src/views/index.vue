<script setup lang='ts'>
import {onBeforeMount, ref} from "vue";
import ownInfo from "../assets/ownInfo.json";

const circleUrl = ref("")
const {own,detail,contractInfo} = ownInfo
const height = ref("");
onBeforeMount(()=>{
  const h=`${document.documentElement.clientHeight}`
  console.log("高度",h)
  height.value=h
})
</script>

<template>
  <div class="content" :style="{height:height}">
    <!--    左侧-->
    <div class="content-left">
      <el-aside class="aside">
        <el-avatar :size="200" :src="circleUrl"/>
        <ul>
          <li>{{detail.first}}</li>
          <li>{{detail.second}}</li>
          <li>{{detail.third}}</li>
          <li>{{detail.fourth}}</li>
          <li>{{detail.fifth}}</li>
        </ul>
      </el-aside>
    </div>
    <!--    右侧-->
    <div class="content-right">
      <el-tabs>
        <el-tab-pane label="我的信息">
          <ul>
            <li>姓名：{{ own.name }}</li>
            <li>年龄：{{ own.age }}</li>
            <li>职业：{{ own.excpect_work }}</li>
            <li>手机号：{{ own.phoneNumber }}</li>
            <li>邮箱：{{ own.email }}</li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="项目经验"></el-tab-pane>
        <el-tab-pane label="工作经验"></el-tab-pane>
        <el-tab-pane label="联系方式">
          <div>
            <div></div>
            <div>
              <div>
                <h3>联系方式</h3>
                <span>一段介绍</span>
                <el-form>
                  <el-form-item><el-icon></el-icon>{{contractInfo.qq}}</el-form-item>
                  <el-form-item><el-icon></el-icon>{{contractInfo.weixin}}</el-form-item>
                  <el-form-item><el-icon></el-icon>{{own.phoneNumber}}</el-form-item>
                  <el-form-item><el-icon></el-icon>{{own.email}}</el-form-item>
                  <el-form-item><el-icon></el-icon>{{contractInfo.github}}</el-form-item>
                  <el-form-item><el-icon></el-icon>{{contractInfo.blog}}</el-form-item>
                  <el-form-item><el-icon></el-icon>{{contractInfo.address}}</el-form-item>

                </el-form>
              </div>
              <div>
                <h3>聊一聊</h3>
                <el-form>
                  <el-form-item></el-form-item>
                  <el-form-item></el-form-item>
                  <el-form-item></el-form-item>
                  <el-form-item></el-form-item>
                </el-form>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style scoped>
ul li{
  list-style: none;
}
.content{
  display: flex;
  position: relative;
}
.content-left{
  float: left;
  height: 100%;
}
.aside {
  background: #b4dcef;
}
.content-right {
  float: left;
}
</style>
