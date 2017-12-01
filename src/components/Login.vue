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
            <el-input placeholder="用户名" v-model="Form.name" auto-complete="off"
                      @keyup.enter.native="submitForm('Form')"></el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input type="password" placeholder="密码" v-model="Form.pass" auto-complete="off"
                      @keyup.enter.native="submitForm('Form')"></el-input>
          </el-form-item>
          <div class="mb8">
            <div>
              <el-checkbox v-model="Form.remember">记住我有效期7天</el-checkbox>
            </div>
            <small class="default">不是自己的电脑上不要勾选此项</small>
          </div>
          <el-form-item>
            <el-button type="green" class="full-width m-b" :loading="loading.type"
                       @click="submitForm('Form')">{{loading.value}}
            </el-button>
            <router-link :to="{name:'Home'}" class="full-width m-b">
              <el-button class="full-width m-b">登录跳转</el-button>
            </router-link>
            <router-link :to="{name:'Forgot'}">
              <small>忘记密码？</small>
            </router-link>
            <p class="text-muted text-center">
              <small></small>
            </p>
            <router-link :to="{name:'Regist'}">
              <el-button class="full-width">注册</el-button>
            </router-link>
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
          pass: '',
          remember: false,
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
        },
        cookie: {
          Auth_token: '123',
          time: new Date().getTime() + 7 * 24 * 60 * 60 * 1000,
        },
        loading: {
          type: false,
          value: '登录'
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.loading = {
              type: true,
              value: '请稍等...'
            }
            var timer1 = setTimeout(() => {
              var _self = this
              this.$message({
                type: 'success',
                message: '登录成功！',
                showClose: true,
                duration: 1500,
                onClose() {
                  if (_self.Form.remember) {
                    document.cookie = "WabApp_Auth_token=abc; expires=" + new Date(_self.cookie.time).toGMTString() + "; path=/"
                  } else {
                    document.cookie = "WabApp_Auth_token=" + _self.cookie.Auth_token + "; path=/"
                  }
                  _self.$router.push({path: '/home'})
                }
              });
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
  .mb8 {
    margin-bottom: 8px;
  }
  
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
