<script>
import ownInfo from "@/assets/ownInfo.json";

export default {
  name: 'profile ',
  data(){
    return {
      own:ownInfo.own
    }
  }
}
</script>

<template>
  <div class="profile-page">
    <el-divider content-position="center"><h1>个人简介</h1></el-divider>
    <el-card style="width: 50%;margin: auto">
      <el-descriptions
          :column="2"
          :border="false"
          :size="'mini'"
          style="width: 100%;margin: auto"
      >
        <el-descriptions-item align="center" span="2"><el-avatar src="src/assets/cute.jpg" class="avatar"/></el-descriptions-item>
        <el-descriptions-item label="姓名：">{{own.name}}</el-descriptions-item>
        <el-descriptions-item label="年龄：">{{own.age}}</el-descriptions-item>
        <el-descriptions-item label="性别：">{{own.sex}}</el-descriptions-item>
        <el-descriptions-item label="电话：">{{own.phoneNumber}}</el-descriptions-item>
        <el-descriptions-item label="QQ：">
          <div id="box">
            <!-- 用于显示qq图标 -->
            <div id="qq">
              <!-- 用于显示，隐藏二维码图片 -->
              <div id="qq-code"></div>
            </div>
          </div>
        </el-descriptions-item>
        <el-descriptions-item label="微信：">
          <div id="box">
            <!-- 用于显示qq图标 -->
            <div id="wechat">
              <!-- 用于显示，隐藏二维码图片 -->
              <div id="code"></div>
            </div>
          </div>
        </el-descriptions-item>
        <el-descriptions-item label="Github："><a :href=own.github target="_blank"><img src="src/assets/github.svg" alt="" class="icon-size"></a></el-descriptions-item>
        <el-descriptions-item label="博客："><a :href=own.blog target="_blank"><img src="src/assets/blog.ico" alt="" class="icon-size"></a></el-descriptions-item>
        <el-descriptions-item label="Gitee："><a :href=own.gitee target="_blank"><img src="src/assets/gitee.png" alt="" class="icon-size"></a></el-descriptions-item>
        <el-descriptions-item label="总网站："><a :href=own.resume target="_blank"><img src="src/assets/favicon.ico" alt="" class="icon-size"></a></el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>

<style scoped>
.avatar{
  width: 200px;
  height: 200px;
}
.icon-size{
  width: 50px;
  height: 50px;
}

#box {
  width: 32px;
  height: 32px;
  display: inline-block;
  position: relative;
}

#wechat {
  width: 32px;
  height: 32px;
  background-image: url("src/assets/Wechart.png");
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
}
#qq{
  width: 32px;
  height: 32px;
  background-image: url("src/assets/q.png");
  background-repeat: no-repeat;
  background-size: 100%;
  margin-left: 40px;
  position: relative;
}
#code {
  display: none;
  width: 180px;
  height: 180px;
  background-color: white;
  background-image: url("src/assets/weichart.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;
  left: -66px;
  bottom: 70px;
}
#qq-code{
  display: none;
  width: 180px;
  height: 180px;
  background-color: white;
  background-image: url("src/assets/qq.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;
  left: -66px;
  bottom: 70px;
}
#wechat:hover {
  background-image: url("src/assets/Wechat.png");
}

#wechat:hover>#code{
  display: block;
}
#qq:hover {
  background-image: url("src/assets/QQ.png");
}

#qq:hover>#qq-code{
  display: block;
}


</style>
