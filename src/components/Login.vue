<template>
  <div class="white_bg">
    <div class="middle-box text-center loginscreen animated fadeInDown">
      <div>
        <div>
          <h1 class="logo-name">IN+</h1>
        </div>
        <h3>Welcome to IN+</h3>
        <p>
          Perfectly designed and precisely prepared admin theme with over 50 pages with extra new web app views.
          Continually expanded and constantly improved Inspinia Admin Them (IN+)
        </p>
        <p>Login in. To see it in action.</p>
        <form class="m-t" role="form" action="index.html">
          <div class="form-group">
            <input type="email" class="form-control" placeholder="用户名" required="">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="密码" required="">
          </div>
          <router-link :to="{name:'Home'}" class="btn btn-primary block full-width m-b">登录</router-link>
          <router-link :to="{name:'Forgot'}">
            <small>忘记密码？</small>
          </router-link>
          <p class="text-muted text-center">
            <small> </small>
          </p>
          <router-link :to="{name:'Regist'}" class="btn btn-sm btn-white btn-block">注册</router-link>
        </form>
        <p class="m-t">
          <small>Inspinia we app framework base on Bootstrap 3 &copy; 2017</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  
  export default {
    name: 'Login',
    mounted() {
    
    },
    data() {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .white_bg {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #f3f3f4;
  }
</style>
