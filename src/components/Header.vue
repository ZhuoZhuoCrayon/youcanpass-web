<template>
  <el-menu :default-active="activeIndex" :router="true" @select="handleSelect" class="el-menu-demo" mode="horizontal">
    <div class="re-login" v-if="!user.isLogin">
      <el-divider direction="vertical"/>
      <el-button @click="login" size="small" type="primary">登录</el-button>
      <el-button @click="register" size="small">注册</el-button>
    </div>
    <el-submenu index="/user" v-else>
      <template slot="title">{{ user.name }}</template>
      <el-menu-item @click="gotoInfo">个人信息</el-menu-item>
      <el-menu-item index="/logout">注销</el-menu-item>
    </el-submenu>
    <el-menu-item index="/admin">管理员平台</el-menu-item>
    <el-menu-item index="/teacher">讲师平台</el-menu-item>
    <el-menu-item index="/student">学生平台</el-menu-item>
    <el-menu-item index="/home">主页</el-menu-item>
  </el-menu>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '/home',
        activeIndex2: '/home',
        user: {
          name: '蔡晓鑫',
          id: '1',
          isLogin: false
        }
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      gotoInfo(){
        this.$router.push(`/user/${this.user.id}`);
      },
      login(){
        this.user.isLogin = true;
        console.log('login');
      },
      register(){
        //todo
        console.log('register');
      }
    }
  }
</script>

<style lang="scss">
  .el-menu-demo {
    .el-menu-item{
      float: right;
    }
    .el-submenu {
      float: right;
    }
    .re-login{
      margin-top: 13px;
      margin-right: 10px;
      float: right;
    }
  }
</style>
