<template>
  <div id="wrapper">
    <!--左侧导航-->
    <left-slide-menu></left-slide-menu>
    
    <div id="page-wrapper" class="gray-bg dashbard-1">
      <!--顶部导航-->
      <right-top-nav></right-top-nav>
      
      <keep-alive>
        <router-view/>
      </keep-alive>
      
      <!--页脚-->
      <footer-bar></footer-bar>
    </div>
    
    <!--聊天控件-->
    <small-chat></small-chat>
    <!--右侧弹出框-->
    <right-slide-bar></right-slide-bar>
  </div>
</template>

<script>
  import LeftSlideMenu from '@/components/base/LeftSlideMenu'
  import RightTopNav from '@/components/base/RightTopNav'
  import RightSlideBar from '@/components/base/RightSlideBar'
  import SmallChat from '@/components/base/SmallChat'
  import FooterBar from '@/components/base/FooterBar'
  
  export default {
    name: 'Home',
    components: {
      LeftSlideMenu,
      RightTopNav,
      RightSlideBar,
      SmallChat,
      FooterBar
    },
    mounted() {
    
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
