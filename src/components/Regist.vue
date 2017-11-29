<template>
  <div class="white_bg">
    <div class="middle-box text-center loginscreen animated fadeInDown">
      <div>
        <div>
          <h1 class="logo-name">IN+</h1>
        </div>
        <h3>Register to IN+</h3>
        <p>注册一个新用户</p>
        <form class="m-t" role="form" action="">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="用户名" required="">
          </div>
          <div class="form-group">
            <input type="email" class="form-control" placeholder="邮箱" required="">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="密码" required="">
          </div>
          <div class="form-group">
            <div class="checkbox i-checks"><label> <input type="checkbox"><i></i> 同意条款和政策 </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary block full-width m-b">注册</button>
        
          <p class="text-muted text-center">
            <small> </small>
          </p>
          <router-link :to="{name:'Login'}" class="btn btn-sm btn-white btn-block">登录</router-link>
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
    name: 'Regist',
    mounted(){
      $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green',
      });
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
