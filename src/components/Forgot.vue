<template>
  <div class="white_bg">
    <div class="passwordBox animated fadeInDown">
      <div class="row">
        <div class="col-md-12">
          <div class="ibox-content">
            <h2 class="font-bold">找回密码</h2>
            <p>
              输入您的电子邮件地址，您的密码将被重置并通过电子邮件发送给您。
            </p>
            <div class="row">
              <div class="col-lg-12">
                <el-form ref="Form" :model="Form" :rules="rules" class="demo-ruleForm" status-icon>
                  <el-form-item prop="email">
                    <el-input placeholder="邮箱地址" v-model="Form.email" auto-complete="off"></el-input>
                  </el-form-item>
                  <button type="button" class="btn btn-primary block full-width m-b" @click="submitForm('Form')">找回密码
                  </button>
                </el-form>
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
      return {
        Form:{
          email:''
        },
        rules:{
          email:[
            {required: true, message: '请输入邮箱地址', trigger: 'blur'},
            {type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur'}
          ]
        }
      }
    },
    methods:{
      submitForm(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const loading = this.$loading({
              lock: true,
              text: '发送中请稍等...',
              spinner: 'el-icon-loading',
              background: 'rgba(0, 0, 0, 0.7)'
            });
            setTimeout(() => {
              loading.close();
              this.$message.error('发送失败，请重新提交');
            }, 2000);
          } else {
            return false;
          }
        })
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
    position: fixed;
    overflow-y: scroll;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #f3f3f4;
  }
</style>
