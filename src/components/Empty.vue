<template>
  <div class="white_bg">
    <div class="middle-box text-center animated fadeInDown">
      <h1>404</h1>
      <h3 class="font-bold">Page Not Found</h3>
      
      <div class="error-desc">
        对不起，没有找到您要找的页面！ <br>
        {{time}} 秒后将退回上级的页面！
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Empty',
    mounted() {
      var timer=setInterval(()=>{
        -- this.time
        if (this.time === 0) {
          clearInterval(timer)
          this.$router.back()
        }
      },1000)
    },
    data() {
      return {
        time: 5
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .middle-box {
    padding-top: 0;
  }
  
  .white_bg {
    overflow-y: scroll;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #f3f3f4;
  }
</style>
