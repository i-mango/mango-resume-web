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
