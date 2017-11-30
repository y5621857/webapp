<template>
  <div class="white_bg">
    <div class="middle-box text-center loginscreen animated fadeInDown">
      <div>
        <div>
          <h1 class="logo-name">IN+</h1>
        </div>
        <h3>Register to IN+</h3>
        <p>注册一个新用户</p>
        <el-form :model="Form" :rules="rules" ref="Form" class="demo-ruleForm" status-icon>
          <el-form-item prop="name">
            <el-input placeholder="用户名" v-model="Form.name" auto-complete="off"
                      @keyup.enter.native="submitForm('Form')"></el-input>
          </el-form-item>
          <el-form-item prop="email">
            <el-input placeholder="邮箱" v-model="Form.email" auto-complete="off"
                      @keyup.enter.native="submitForm('Form')"></el-input>
          </el-form-item>
          <el-form-item prop="phone">
            <el-input placeholder="电话" v-model="Form.phone" auto-complete="off"
                      @keyup.enter.native="submitForm('Form')"></el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input type="password" placeholder="密码" v-model="Form.pass" auto-complete="off"
                      @keyup.enter.native="submitForm('Form')"></el-input>
          </el-form-item>
          <el-form-item prop="confirmPass">
            <el-input type="password" placeholder="请再次输入密码" v-model="Form.confirmPass" auto-complete="off"
                      @keyup.enter.native="submitForm('Form')"></el-input>
          </el-form-item>
          <el-form-item>
            <button type="button" class="btn btn-primary block full-width m-b" @click="submitForm('Form')">注册
            </button>
            <router-link :to="{name:'Login'}" class="btn btn-sm btn-white btn-block">登录</router-link>
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
    name: 'Regist',
    mounted() {
    
    },
    data() {
      var validateName = (rule, value, callback) => {
        if (!/^\w+$/.test(value)) {
          callback(new Error('请输入用户名，数字、字母、下划线组成'));
        } else {
          callback()
        }
      };
      var validatePhone = (rule, value, callback) => {
        if (!/^\d{11}$/.test(value)) {
          callback(new Error('请输入正确的电话号码'));
        } else {
          callback()
        }
      };
      var validatePass = (rule, value, callback) => {
        if (!/^\w+$/.test(value)) {
          callback(new Error('请输入密码，数字、字母、下划线组成'));
        } else {
          if (this.Form.confirmPass !== '') {
            this.$refs.Form.validateField('confirmPass');
          }
          callback()
        }
      };
      var validateConfirmPass = (rule, value, callback) => {
        if (value !== this.Form.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback()
        }
      };
      return {
        Form: {
          name: '',
          email: '',
          phone: '',
          pass: '',
          confirmPass: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 6, max: 20, message: "6-20个字符", trigger: 'blur'},
            {validator: validateName, trigger: 'blur'},
          ],
          email: [
            {required: true, message: '请输入邮箱地址', trigger: 'blur'},
            {type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur'}
          ],
          phone: [
            {required: true, message: '请输入电话号码', trigger: 'blur'},
            {validator: validatePhone, trigger: 'blur'}
          ],
          pass: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 6, max: 20, message: "6-20个字符", trigger: 'blur'},
            {validator: validatePass, trigger: 'blur'}
          ],
          confirmPass: [
            {required: true, message: '请再次输入密码', trigger: 'blur'},
            {validator: validateConfirmPass, trigger: 'blur'}
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
              text: '注册中请稍等...',
              spinner: 'el-icon-loading',
              background: 'rgba(0, 0, 0, 0.7)'
            });
            setTimeout(() => {
              loading.close();
              this.$message.error('注册失败，请重新提交');
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
    position: fixed;
    overflow-y: scroll;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #f3f3f4;
  }
</style>
