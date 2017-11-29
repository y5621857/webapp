<template>
  <div id="app">
    <div id="wrapper">
      <!--左侧导航-->
      <left-slide-menu></left-slide-menu>
      <div id="page-wrapper" class="gray-bg dashbard-1">
        <!--顶部导航-->
        <right-top-nav></right-top-nav>
        <router-view/>
        <!--页脚-->
        <footer-bar></footer-bar>
      </div>
      
      <!--聊天控件-->
      <small-chat></small-chat>
      <!--右侧弹出框-->
      <right-slide-bar></right-slide-bar>
    </div>
  </div>
</template>

<script>
  import LeftSlideMenu from '@/components/base/LeftSlideMenu'
  import RightTopNav from '@/components/base/RightTopNav'
  import RightSlideBar from '@/components/base/RightSlideBar'
  import SmallChat from '@/components/base/SmallChat'
  import FooterBar from '@/components/base/FooterBar'
  
  export default {
    name: 'app',
    components: {
      LeftSlideMenu,
      RightTopNav,
      RightSlideBar,
      SmallChat,
      FooterBar
    },
    mounted(){
      toastr.options = {
        closeButton: true,
        progressBar: true,
        showMethod: 'slideDown',
        timeOut: 4000
      };
    },
    
  }
</script>

<style>

</style>
