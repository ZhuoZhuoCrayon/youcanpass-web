<template>
  <div>
    <el-menu :default-active="activeIndex" :router="true" @select="handleSelect" class="el-menu-demo" mode="horizontal">
      <div class="re-login" v-if="!user.isLogin">
        <el-divider direction="vertical"/>
        <el-button @click="gotoLogin" size="small" type="primary">登录</el-button>
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

    <el-dialog
      title="用户登录"
      style="top: 10%"
      :visible.sync="loginDialogVisible"
      width="480px"
      center>
      <el-form id="login-form" ref="form" :model="form" style="margin-bottom: 40px; margin-top: 20px">
        <el-form-item>
          <el-input v-model="form.username" placeholder="学号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" placeholder="密码" show-password></el-input>
        </el-form-item>
        <el-form-item style="margin-top: 50px;margin-bottom: 0px">
          <el-button style="width: 100%;min-height: 40px"
                     type="primary"
                     @click="login">提交</el-button>
        </el-form-item>
        <el-form-item style="display: inline-block;float: right;">
          <el-button style="width: 100%" type="text"
                     @click="register">还没账号？立即注册</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>

</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '/home',
        activeIndex2: '/home',
        loginDialogVisible: false,
        user: {
          name: '蔡晓鑫',
          id: '1',
          isLogin: false,
          username : '2017151019',
          password : '07124217'
        },
        form: {
          username: null,
          password: null
        }
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      gotoInfo() {
        this.$router.push(`/user/${this.user.id}`);
      },
      gotoLogin() {
        this.loginDialogVisible = true;
        console.log('login');
      },
      register() {
        //todo
        console.log('register');
      },
      login(){
        if(this.user.username === this.form.username && this.user.password === this.form.password){
          this.$message.success('登录成功');
          this.user.isLogin = true;
          this.loginDialogVisible = false;
        }else{
          this.$message.error('账户或密码错误');
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .el-menu-demo {
    .el-menu-item {
      float: right;
    }

    .el-submenu {
      float: right;
    }

    .re-login {
      margin-top: 13px;
      margin-right: 10px;
      float: right;
    }
  }
</style>
