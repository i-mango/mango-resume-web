<script>
import ownInfo from "@/assets/ownInfo.json";

export default {
  name: 'footer-include',
  data () {
    return {
      record: ownInfo.record,
    }
  }
}
</script>

<template>
  <div class='footer'>
    <span class="scroll"></span>
    <el-divider></el-divider>
    <div>{{ record.copyright }}</div>
    <div>备案号：
      <a target="_blank" href="https://beian.miit.gov.cn/" >{{record.filingNumber}}</a>
    </div>
    <div v-show="record.gonganFilingNumber">
      <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=50011802010624" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="@/assets/gongan.png" style="float:left;"/><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">{{ record.gonganFilingNumber }}</p></a>
    </div>
  </div>
</template>

<style>
.el-divider{
  background-color: rgb(84, 92, 100);
}
</style>
<style scoped>
.footer{
  height: 250px;
  text-align: center;
  font-size: 16px;
  padding: 0px 100px;
  position: relative;
}
.footer{
  cursor: pointer;
}
.copyright{
  font-size: 12px;
}
.info{
  font-size: 14px;
  color: #72767b;
  line-height: 25px;
}
.footer .scroll{
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border:1px solid #448aff;
  background-color: rgba(68,138,255,0.2);
  position: absolute;
  left: 5%;
  top: -25px;
  z-index: 10;
  animation: scrollA infinite 20s linear alternate;
}
@keyframes scrollA {
  0% {left: 5%;transform: rotate(180deg);}
  10% {left: 5%;transform: rotate(270deg);}
  20% {left: 5%;transform: rotate(450deg);}
  25% {left: 10%;transform: rotate(540deg);}
  30% {left: 20%;transform: rotate(720deg);}
  35% {left: 30%;transform: rotate(900deg);}
  40% {left: 40%;transform: rotate(1080deg);}
  45% {left: 50%;transform: rotate(1260deg);}
  50% {left: 60%;transform: rotate(1440deg);}
  55% {left: 70%;transform: rotate(1620deg);}
  60% {left: 80%;transform: rotate(1800deg);}
  80% {left: 90%;transform: rotate(2610deg);}
  90% {left: 90%;transform: rotate(2340deg);}
  100% {left: 90%;transform: rotate(2520deg);}
}
</style>
