<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    mounted() {
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
  small.default {
    color: #bbb;
  }

  .el-form-item {
    margin-bottom: 15px;
  }
  
  .el-button {
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
  }
  
  .el-button.m-b {
    margin-bottom: 15px;
  }
  
  .el-button--green {
    background-color: #1ab394;
    border-color: #1ab394;
    border-top-color: rgb(26, 179, 148);
    border-right-color: rgb(26, 179, 148);
    border-bottom-color: rgb(26, 179, 148);
    border-left-color: rgb(26, 179, 148);
    color: #FFFFFF;
  }
  
  .el-button--green:hover,
  .el-button--green:focus {
    background-color: #18a689;
    border-color: #18a689;
    color: #FFFFFF;
  }
  
</style>
