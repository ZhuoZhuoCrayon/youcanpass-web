<template>
  <div class="footer">
    <div class="container">
      <div class="footer-main">
        <h4 class="footer-main-title">Quick access</h4>
        <a class="footer-main-link" target="_blank" href="http://www1.szu.edu.cn/szu.asp">Shenzhen University intranet</a>
        <a class="footer-main-link" target="_blank" href="https://www.szu.edu.cn/">Shenzhen University official website</a>
        <a class="footer-main-link" target="_blank" href="http://csse.szu.edu.cn/cn/index.html">Shenzhen University School of Computer and Software Official Website</a>
        <a class="footer-main-link" target="_blank" href="https://www1.szu.edu.cn/board/">Shenzhen University Official Communication</a>
      </div>
      <div class="footer-main">
        <h4 class="footer-main-title">Development related</h4>
        <a class="footer-main-link" target="_blank" href="https://spring.io/projects/spring-boot">Back-end framework: SpringBoot</a>
        <a class="footer-main-link" target="_blank" href="https://www.mysql.com/">Database: MySQL</a>
        <a class="footer-main-link" target="_blank" href="https://cn.vuejs.org/">Frontend: Vue.js</a>
        <a class="footer-main-link" target="_blank" href="https://element.eleme.cn/2.0/#/zh-CN">Website rapid prototyping tool: Element-UI</a>
        <a class="footer-main-link" target="_blank" href="https://git-scm.com/">Version control: Git</a>
        <a class="footer-main-link" target="_blank" href="https://github.com/explore">Remote: GitHub</a>
      </div>

      <div class="footer-contact">
        <h4 class="footer-contact-title">BikeSharing v1.0</h4>
        <a class="footer-contact-method" target="_blank" href="https://github.com/ZhuoZhuoCrayon/YoucanPass">
          <img src="static/icon/github.png" style="transform:scale(0.5)">
        </a>
        <el-tooltip placement="top" effect="light">
          <a class="footer-contact-method" target="_blank" href="https://github.com/explore">
            <img src="static/icon/wechat.png" style="transform:scale(0.5)">
          </a>
          <div slot="content" id="qr-code">
            <img src="static/img/qrcode.png" style="width: 150px;">
          </div>
        </el-tooltip>
      </div>
      <div class="footer-feedback">
        <h4 class="footer-feedback-title">Contact us</h4>
        <p>Platform feedback: 873217631@qq.com</p>
        <p>Cycling feedback: csse824@szu.edu.cn</p>
        <p style="border: solid 1px white;width: 275px">Copyright©2017151019 - Caixiaoxin</p>
        <p>Address: Shenzhen University, Nanshan District, Shenzhen, Guangdong, China</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped lang="scss">
  .footer{
    /*解决缩放错位*/
    min-height: 200px;
    height: auto;
    /*----------*/
    padding: 40px 120px;
    background: #303133;
    text-align: left;
    color: white;
    .container{
      padding: 0;
      margin: 0;
    }
    .footer-main{
      vertical-align: top;
      /*设置内联块状，不会单独占行，从而可靠左*/
      display: inline-block;
      margin-right: 110px;
      padding: 0;
      .footer-main-title{
        margin: 0 0 15px;
        font-size: 18px;
      }
      .footer-main-link {
        font-size: 14px;
        line-height: 2;
        display: block;
        text-decoration: none;
        color: #fff;
      }
    }
    .footer-contact{
      display: inline-block;
      float: right;
      .footer-contact-title{
        margin: 0;
        font-size: 18px;
      }
    }
    .footer-feedback{
      display: inline-block;
      .footer-feedback-title{
        margin: 0 0 15px;
        font-size: 18px;
      }
    }
  }
</style>
