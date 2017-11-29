<template>
  <div class="white_bg">
    <div class="passwordBox animated fadeInDown">
      <div class="row">
        <div class="col-md-12">
          <div class="ibox-content">
            <h2 class="font-bold">找回密码</h2>
            <p>
              Enter your email address and your password will be reset and emailed to you.
            </p>
            <div class="row">
              <div class="col-lg-12">
                <form class="m-t" role="form" action="">
                  <div class="form-group">
                    <input type="email" class="form-control" placeholder="邮箱" required="">
                  </div>
                  <button type="submit" class="btn btn-primary block full-width m-b">发送邮件</button>
                </form>
                <router-link :to="{name:'Login'}" class="btn btn-sm btn-white btn-block">返回</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div class="row">
        <div class="col-md-6">
          Copyright Example Company
        </div>
        <div class="col-md-6 text-right">
          <small>&copy; 2017-2018</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Forgot',
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
