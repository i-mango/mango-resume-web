<template>
  <div class="skills">
    <div class="title">
      <el-divider content-position="center"><h1>个人技能</h1></el-divider>
      <p><el-tag>{{ skills.skill }}</el-tag><el-tag >{{ skills.language2 }}</el-tag><el-tag>{{ skills.language3 }}</el-tag></p>
    </div>
    <div class="skill">
      <span class='language1'>{{skills.language1}}</span>
      <span class='language2'>{{skills.language2}}</span>
      <span class='language3'>{{skills.language3}}</span>
      <span class='language4'>{{skills.language4}}</span>
      <span class='language5'>{{skills.language5}}</span>
      <span class='language6'>{{skills.language6}}</span>
      <span class='language7'>{{skills.language7}}</span>
    </div>
  </div>
</template>
<style>
.skills .title p .el-tag{
  margin: 0 5px;
  cursor: pointer;
}
.skills .box-card .text{
  text-align: left;
}
</style>
<style scoped>
.skills{
  font-size: 14px;
  padding: 0 100px;
  text-align: center;
}
.title p{
  color: #8c8888;
  font-size: 15px;
  margin-bottom: 80px;
}
.content p{
  font-size: 20px;
  color: #8c8888;
}
.skill{
  margin: 150px 0;
  position: relative;
}
.skill span{
  display: inline-block;
  color: #fff;
  border-radius: 50%;
}
span.language1{
  background-color: rgba(102,153,204,1) ;
  width: 300px;
  height: 300px;
  line-height: 300px;
  font-size: 50px;
//margin-left: 15%;
}
span.language2{
  background-color: rgba(255,153,102,0.5);
  width: 200px;
  height: 200px;
  line-height: 200px;
  font-size: 26px;
  position: absolute;
  left: 40%;
  bottom: 230px;
  z-index: 0;
}
span.language3{
  background-color: rgba(102,204,204,0.8);
  width: 130px;
  height: 130px;
  line-height: 130px;
  font-size: 26px;
  position: absolute;
  left: 28%;
  bottom: 20px;
  z-index: 0;
}
span.language4{
  background-color: rgba(255,153,153,0.7) ;
  width: 160px;
  height: 160px;
  line-height: 160px;
  font-size: 24px;
  position: absolute;
  left: 70%;
  bottom: 60px;
  z-index: 0;
}
span.language5{
  background-color: rgba(255,204,51,0.8);
  width: 100px;
  height: 100px;
  line-height: 100px;
  font-size: 20px;
  position: absolute;
  left: 21%;
  top: 20px;
  z-index: 0;
}
span.language6{
  background-color: rgba(204,102,102,0.5) ;
  width: 110px;
  height: 110px;
  line-height: 110px;
  font-size: 21px;
  position: absolute;
  left: 50%;
  bottom: -20px;
  z-index: 0;
}
span.language7{
  background-color: rgba(153,153,255,0.8) ;
  width: 80px;
  height: 80px;
  line-height: 80px;
  font-size: 18px;
  position: absolute;
  left: 65%;
  top: -70px;
  z-index: 0;
}
</style>
<script>
import ownInfo from "@/assets/ownInfo.json";
export default {
  name: 'Skills',
  data(){
    return {
      skills:ownInfo.skills
    }
  }
}
</script>
