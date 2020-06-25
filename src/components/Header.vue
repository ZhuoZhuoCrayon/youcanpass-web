<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      :router="true"
      @select="handleSelect"
      class="el-menu-demo"
      mode="horizontal">
      <div class="re-login" v-if="!user.isLogin">
        <el-divider direction="vertical"/>
        <el-button @click="gotoLogin" size="small" type="primary">Login</el-button>
        <el-button @click="register" size="small">Register</el-button>
      </div>
      <el-submenu index="/user" v-else>
        <template slot="title">{{ user.name }}</template>
        <el-menu-item @click="gotoInfo">Info</el-menu-item>
        <el-menu-item @click="logout" index="/logout">Logout</el-menu-item>
      </el-submenu>
      <el-menu-item index="/guides">Guides</el-menu-item>
      <el-menu-item index="/cost">Cost</el-menu-item>
      <el-menu-item index="/reviews">Reviews</el-menu-item>
      <el-menu-item index="/home">Home</el-menu-item>
    </el-menu>

    <el-dialog
      title="Login, Biker!"
      style="top: 10%"
      :visible.sync="loginDialogVisible"
      width="480px"
      center>
      <el-form id="login-form" ref="form" :model="form" style="margin-bottom: 40px; margin-top: 20px">
        <el-form-item>
          <el-input v-model="form.username" placeholder="username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" placeholder="password" show-password></el-input>
        </el-form-item>
        <el-form-item style="margin-top: 50px;margin-bottom: 0px">
          <el-button style="width: 100%;min-height: 40px"
                     type="primary"
                     @click="login">Submit</el-button>
        </el-form-item>
        <el-form-item style="display: inline-block;float: right;">
          <el-button style="width: 100%" type="text"
                     @click="register">No account yet? Register now</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog
      title="Join us"
      style="top: 10%"
      :visible.sync="registerDialogVisible"
      width="480px"
      center>
      <el-form id="register-form" ref="form" :model="form" style="margin-bottom: 40px; margin-top: 20px">
        <el-form-item>
          <el-input v-model="form.username" placeholder="username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" placeholder="password" show-password></el-input>
        </el-form-item>
        <el-form-item style="margin-top: 50px;margin-bottom: 0px">
          <el-button style="width: 100%;min-height: 40px"
                     type="primary"
                     @click="login">Submit</el-button>
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
        registerDialogVisible: false,
        user: {
          name: 'Caixiaoxin',
          id: '1',
          isLogin: false,
          username : '2017151019',
          password : '123'
        },
        form: {
          username: null,
          password: null
        }
      };
    },
    watch: {
      $route() {
        this.setCurrentRoute();
      }
    },
    methods: {
      setCurrentRoute() {
        console.log(this.$route);
        this.activeIndex = this.$route.path;
        // this.activeIndex= this.$route.path; // 通过他就可以监听到当前路由状态并激活当前菜单
      },
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
        this.loginDialogVisible = false;
        this.registerDialogVisible = true;
        console.log('register');
      },
      login(){
        if((this.user.username === this.form.username && this.user.password === this.form.password) ||
            (this.form.username === "Mark") && this.form.password === "123")
        {
          if (this.form.username === "Mark") {
            this.user.name = "Mark";
            this.user.id = 2;
          }
          this.$message.success('Success');
          this.user.isLogin = true;
          this.loginDialogVisible = false;
        }else{
          this.$message.error('Error');
        }
      },
      logout() {
        this.user.isLogin = false;
        this.$router.push('/home')
      }
    },
    created() {
      this.setCurrentRoute();
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
