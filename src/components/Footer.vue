<template>
  <div class="footer">
    <div class="container">
      <div class="footer-main">
        <h4 class="footer-main-title">快捷访问</h4>
        <a class="footer-main-link" target="_blank" href="http://www1.szu.edu.cn/szu.asp">深圳大学内部网</a>
        <a class="footer-main-link" target="_blank" href="https://www.szu.edu.cn/">深圳大学官网</a>
        <a class="footer-main-link" target="_blank" href="http://csse.szu.edu.cn/cn/index.html">深圳大学计算机与软件学院官网</a>
        <a class="footer-main-link" target="_blank" href="https://www1.szu.edu.cn/board/">深圳大学公文通</a>
      </div>
      <div class="footer-main">
        <h4 class="footer-main-title">开发相关</h4>
        <a class="footer-main-link" target="_blank" href="https://spring.io/projects/spring-boot">后端框架：SpringBoot</a>
        <a class="footer-main-link" target="_blank" href="https://www.mysql.com/">数据库：MySQL</a>
        <a class="footer-main-link" target="_blank" href="https://cn.vuejs.org/">前端：Vue.js</a>
        <a class="footer-main-link" target="_blank" href="https://element.eleme.cn/2.0/#/zh-CN">网站快速成型工具：Element-UI</a>
        <a class="footer-main-link" target="_blank" href="https://git-scm.com/">版本管理：Git</a>
        <a class="footer-main-link" target="_blank" href="https://github.com/explore">远程仓库：GitHub</a>
      </div>

      <div class="footer-contact">
        <h4 class="footer-contact-title">YoucanPass v1.0</h4>
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
        <h4 class="footer-feedback-title">联系我们</h4>
        <p>平台问题反馈：873217631@qq.com</p>
        <p>选课问题反馈：csse824@szu.edu.cn</p>
        <p style="border: solid 1px white;width: 275px">参与项目：右侧 GitHub / Wechat 联系</p>
        <p>地址：中国 广东省 深圳市 南山区 深圳大学 沧海校区 计算机与软件学院</p>
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
