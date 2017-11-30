<template>
  <div class="white_bg">
    <div class="middle-box text-center loginscreen animated fadeInDown">
      <div>
        <div>
          <h1 class="logo-name">IN+</h1>
        </div>
        <h3>Welcome to IN+</h3>
        <p>
          完美的设计和精确的管理，不断扩展和不断改进的Inspinia管理(IN +)
        </p>
        <p></p>
        <el-form :model="Form" :rules="rules" ref="Form" class="demo-ruleForm" status-icon>
          <el-form-item prop="name">
            <el-input placeholder="用户名" v-model="Form.name" auto-complete="off" @keyup.enter.native="submitForm('Form')"></el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input type="password" placeholder="密码" v-model="Form.pass" auto-complete="off" @keyup.enter.native="submitForm('Form')"></el-input>
          </el-form-item>
          <el-form-item>
            <button type="button" class="btn btn-primary block full-width m-b" @click="submitForm('Form')"
                    @keyup.enter.native="submitForm('Form')">登录
            </button>
            <router-link :to="{name:'Home'}" class="btn btn-primary block full-width m-b">登录跳转</router-link>
            <router-link :to="{name:'Forgot'}">
              <small>忘记密码？</small>
            </router-link>
            <p class="text-muted text-center">
              <small></small>
            </p>
            <router-link :to="{name:'Regist'}" class="btn btn-sm btn-white btn-block">注册</router-link>
          </el-form-item>
        </el-form>
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
      //TODO 验证器
      var validateName = (rule, value, callback) => {
        if (!/^\w+$/.test(value)) {
          callback(new Error('请输入用户名，数字、字母、下划线组成'));
        } else {
          callback()
        }
      };
      var validatePass = (rule, value, callback) => {
        if (!/^\w+$/.test(value)) {
          callback(new Error('请输入密码，数字、字母、下划线组成'));
        } else {
          callback()
        }
      };
      return {
        Form: {
          name: '',
          pass: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 6, max: 20, message: "6-20个字符", trigger: 'blur'},
            {validator: validateName, trigger: 'blur'}
          ],
          pass: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 6, max: 20, message: "6-20个字符", trigger: 'blur'},
            {validator: validatePass, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const loading = this.$loading({
              lock: true,
              text: '认证中请稍等...',
              spinner: 'el-icon-loading',
              background: 'rgba(0, 0, 0, 0.7)'
            });
            setTimeout(() => {
              loading.close();
              this.$message.error('账号密码有误，请重新填写');
            }, 2000);
          } else {
            return false;
          }
        });
      },
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
