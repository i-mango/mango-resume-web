<script setup lang='ts'>
import {onMounted, ref} from "vue";
import ownInfo from "../assets/ownInfo.json";
import TypeIt from "@/components/typeit";

onMounted(() => {
  getHeight()
})
const {own, detail, contractInfo} = ownInfo
const GetWindowHeight = ref({
  height: ""
});
const GetTabsHeight =ref({
  height:""
})
const GetWindowWidth = ref({
  width: ""
});
const getHeight = () => {
  // 获取浏览器高度
  GetWindowHeight.value.height = window.innerHeight + 'px';
  //获取tabs-pane高度
  GetTabsHeight.value.height = window.innerHeight - 54 + 'px';
  // 获取浏览器宽度
  GetWindowWidth.value.width = window.innerWidth - 400 - 8 + 'px';
}
</script>

<template>
  <div class="content">
    <!--    左侧-->
    <div class="content-left">
      <el-aside class="aside" :style="GetWindowHeight">
        <div class="title">{{ own.title }}</div>
        <div class="img">
          <img src="../assets/cute.jpg" alt="" class="avatar">
        </div>
        <ul style="margin-top: 30px;margin-right: 10px">
          <li class="motto">
            <TypeIt :values="[detail.motto]" :cursor="false" :speed="150"/>
          </li>
        </ul>
      </el-aside>
    </div>
    <!--    中间-->
    <div style="width: 8px;height: 100%;background: #eeeeee;display: flex"></div>
    <!--    右侧-->
    <div class="content-right" animated :style="GetWindowWidth">
      <el-tabs style="margin-left: 10px" class="el-tabs">
        <el-tab-pane label="首页" :style="GetTabsHeight">
          <div class="user-info homepage">
            <div class="control">
              <div class='box' id='box1'></div>
              <div class='box' id='box2'> </div>
              <p>专注{{own.excpect_work}}</p>
              <div class='box' id='box3'></div>
              <div class='box' id='box4'></div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="我的信息">
          <div class="project-experience">
            <div
                style="width:150px;height: 40px;background-image:linear-gradient(0deg,#fad0c4 0%, #fad0c4 1%, #ffd1ff 100%);text-align: center;color: rgba(255, 255, 255, 0.88)">
              <p style="vertical-align: middle;">我的信息</p>
            </div>
            <ul>
              <li>姓名：{{ own.name }}</li>
              <li>年龄：{{ own.age }}</li>
              <li>职业：{{ own.excpect_work }}</li>
              <li>手机号：{{ own.phoneNumber }}</li>
              <li>邮箱：{{ own.email }}</li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="项目经验">
          <div class="work-experience"></div>
        </el-tab-pane>
        <el-tab-pane label="工作经验">
          <div class="contract"></div>
        </el-tab-pane>
        <el-tab-pane label="联系方式">
          <div class="user-info">
            <div></div>
            <div>
              <div>
                <h3>联系方式</h3>
                <span>一段介绍</span>
                <el-form>
                  <el-form-item>
                    <el-icon></el-icon>
                    {{ contractInfo.qq }}
                  </el-form-item>
                  <el-form-item>
                    <el-icon></el-icon>
                    {{ contractInfo.weixin }}
                  </el-form-item>
                  <el-form-item>
                    <el-icon></el-icon>
                    {{ own.phoneNumber }}
                  </el-form-item>
                  <el-form-item>
                    <el-icon></el-icon>
                    {{ own.email }}
                  </el-form-item>
                  <el-form-item>
                    <el-icon></el-icon>
                    {{ contractInfo.github }}
                  </el-form-item>
                  <el-form-item>
                    <el-icon></el-icon>
                    {{ contractInfo.blog }}
                  </el-form-item>
                  <el-form-item>
                    <el-icon></el-icon>
                    {{ contractInfo.address }}
                  </el-form-item>
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
ul li {
  list-style: none;
}

.content {
  display: flex;
  position: relative;
  margin: 0 -50px;
}

.content-left {
  float: left;
  background-image:linear-gradient(0deg,#fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)
}

.aside {
  width: 400px;
  color: rgba(255, 255, 255, 0.88);
  text-align: center;
}

.title {
  font-size: 40px;
}

.avatar {
  margin-top: 100px;
  width: 200px;
  height: 200px;
  border-radius: 100px;
}

.motto {
  color: rgba(255, 255, 255, 0.88);
}

.motto::after {
  position: relative;
  top: 5px;
  display: inline-block;
  height: 20px;
  margin-left: 5px;
  content: " ";
  -webkit-animation: blink .5s step-end infinite alternate;
  animation: blink .5s step-end infinite alternate;
  border-right: 2px solid;
}

.content-right {
  float: left;
  padding-right: -32px;
  text-align: center;
  position: relative;
}
.el-tabs{

}
.homepage{
  width: 100%;
  height: 100%;
  background: url(../assets/pink.jpg) no-repeat;
  opacity: 0.7;
  background-size: 100% 120%;
  color: #fff;
  font-size: 32px;
  animation: bg infinite 100s linear alternate;
}
@keyframes bg {
  0% {background-size: 110% 130%; }
  10% {background-size: 111% 131%; }
  20% {background-size: 112% 132%; background-position: bottom;}
  30% {background-size: 113% 133%; }
  40% {background-size: 114% 134%;}
  50% {background-size: 115% 135%;background-position: left;}
  60% {background-size: 116% 136%;}
  70% {background-size: 117% 137%;}
  80% {background-size: 118% 138%;background-position: right;}
  90% {background-size: 119% 139%;}
  100% {background-size: 120% 140%;}
}
.control{
  display: inline-block;
  position: relative;
  top: 40%;
}
p{
  text-shadow: 0px 0px 10px rgba(255,255,255,0.5);
  letter-spacing: 10px;
}
.box{
  display: inline-block;
  width: 100px;
  height: 20px;
}
#box1{
  border-left:8px solid;
  border-top: 8px solid;
  position: relative;
  right: 150px;
  bottom: 20px;
}
#box2{
  border-top: 8px solid;
  border-right: 8px solid;
  position: relative;
  left: 150px;
  bottom: 20px;
}
#box3{
  border-left: 8px solid;
  border-bottom: 8px solid;
  position: relative;
  right: 150px;
  top: 20px;
}
#box4{
  border-right: 8px solid;
  border-bottom: 8px solid;
  position: relative;
  left: 150px;
  top: 20px;
}
.user-info {
  animation: slideInRight 1s 0.02s ease backwards;
}
.project-experience {
  animation: slideInLeft 1s 0.02s ease backwards;
}
.work-experience {
  animation: slideInUp 1s 0.02s ease backwards;
}
.contract {
  animation: slideInDown 1s 0.02s ease backwards;
}
</style>
