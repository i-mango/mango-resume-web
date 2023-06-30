<script setup lang='ts'>
import {onMounted, ref} from "vue";
import ownInfo from "../assets/ownInfo.json";
import TypeIt from "@/components/typeit";
import {School,Monitor,Headset,MessageBox} from "@element-plus/icons-vue";

onMounted(() => {
  getHeight()
})
const {own, detail, contractInfo,university,partTimeJob,officialWork} = ownInfo
const GetWindowHeight = ref({
  height: ""
});
const GetTabsHeight =ref({
  height:""
})
const GetMainHeight =ref({
  height:""
})
const GetTabsWidth = ref({
  width: ""
});
const GetWindowsWidth = ref({
  width: ""
});
const getHeight = () => {
  // 获取浏览器高度
  GetWindowHeight.value.height = window.innerHeight + 'px';
  console.log(GetWindowHeight);
  //获取主体高度
  GetMainHeight.value.height = window.innerHeight - 80 + 'px';
  //获取tabs-pane高度
  GetTabsHeight.value.height = window.innerHeight - 134 + 'px';
  //获取浏览器宽度
  GetWindowsWidth.value.width = window.innerWidth-10 + 'px';
  // 获取tabs宽度
  GetTabsWidth.value.width = window.innerWidth - 400 - 16 + 'px';
}
</script>

<template>
  <el-container style="margin-left: -50px;padding: 0 ">
    <el-main :style="GetWindowsWidth" style="padding: 0">
      <div class="content">
        <!--    左侧-->
        <div class="content-left">
          <el-aside class="aside" :style="GetMainHeight">
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
        <div class="content-right" animated :style="GetTabsWidth">
          <el-tabs class="el-tabs">
            <el-tab-pane label="首页" :style="GetTabsHeight">
              <div class="project-experience homepage">
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
              <div class="user-info">
                <el-card class="own-info">
                  <el-card class="info-border">
                    <h1 style="text-align: center">教育经历</h1>
                    <div>
                      <h3>{{university.name}}</h3>
                      <h5>{{university.time}}</h5>
                      {{university.detail}}
                    </div>
                    <div v-for="item in detail.construction" :key="item">{{item}}</div>
                  </el-card>
                  <el-card class="info-border">
                    <h1 style="text-align: center">基本信息</h1>
                    <ul>
                      <li>姓名：<span style="padding-left: 50px">{{own.name}}</span></li>
                      <li>性别：<span style="padding-left: 50px">{{own.sex}}</span></li>
                      <li>年龄：<span style="padding-left: 50px">{{own.age}}</span></li>
                      <li>电话：<span style="padding-left: 50px">{{own.phoneNumber}}</span></li>
                      <li>邮箱：<span style="padding-left: 50px">{{own.email}}</span></li>
                      <li>地址：<span style="padding-left: 50px">{{contractInfo.address}}</span></li>
                      <li>期待岗位：<span style="padding-left: 50px">{{own.excpect_work}}</span></li>
                    </ul>
                  </el-card>
                </el-card>

              </div>
            </el-tab-pane>
            <el-tab-pane label="工作经验">
              <div class="work-experience" :style="GetTabsHeight">
                <el-steps direction="vertical" :active="4">
                  <el-step
                      :icon="Monitor"
                      :title="partTimeJob.name+partTimeJob.time"
                      :description="partTimeJob.detail"/>
                  <el-step
                      :icon="Headset"
                      :title="partTimeJob.nameAnother+partTimeJob.timeAnother"
                      :description="partTimeJob.detailAnother"/>
                  <el-step
                      :icon="MessageBox"
                      :title="officialWork.name+officialWork.time"
                      :description="officialWork.detail"/>
                </el-steps>
              </div>
            </el-tab-pane>
            <el-tab-pane label="项目经验">
              <div class="contract">

              </div>
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
    </el-main>
    <el-footer :style="GetWindowsWidth" style="height: 70px;text-align: center;border-top: 1px #b6b6b6 solid">
      <div>Copyright © 2020-2023 沐风 & 芒果 manggo.cn All Rights Reserved.</div>
      <div>备案号： 陇ICP备2021003158号-1<span>渝公网安备 50011802010624号</span></div>
    </el-footer>
  </el-container>
</template>

<style scoped>
ul li {
  list-style: none;
}

.content {
  display: flex;
  position: relative;
//margin: 0 -50px;
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
  margin-top: 60px;
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
  position: relative;
}
.homepage{
  width: 100%;
  height: 100%;
  background: url(../assets/pink.jpg) no-repeat;
  text-align: center;
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
.own-info{
  display: flex;
}
.info-border {
  width: 50%;
  height: 400px;
  float: left;
}
.user-info {
  animation: slideInRight 1s 0.02s ease backwards;
}
.project-experience {
  animation: slideInLeft 1s 0.02s ease backwards;
}
.work-experience {
  animation: slideInUp 3s 0.02s ease backwards;
}
.contract {
  animation: slideInDown 1s 0.02s ease backwards;
}
</style>
