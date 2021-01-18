<template>
  <div class="loginBox">
    <h2>CRM客户管理系统</h2>
    <h3>为保护企业的数据安全，请妥善保管密码</h3>
    <div>
      <el-input class="inp" placeholder="请输入用户名" prefix-icon="el-icon-user" v-model="name"></el-input>
      <el-input
        class="inp"
        placeholder="请输入密码"
        prefix-icon="el-icon-lock"
        v-model="psw"
        show-password
      ></el-input>
      <el-button class="btn" type="primary" @click="login">登录</el-button>
    </div>
    <p>北京珠峰世纪技术培训有限公司 京ICP备09041920号 京公网安备110108400531号</p>
  </div>
</template>
<script>
// @ is an alias to /src
import { login } from "@/api/login.js";
import md5 from "md5";
export default {
  name: "login",
  data() {
    return {
      name: "",
      psw: ""
    };
  },
  components: {},
  methods: {
    login() {
      if (!this.name || !this.psw) {
        this.$message.error("用户名密码不能为空");
        return;
      }
      let obj = {
        account: this.name,
        password: this.psw
      };
      login(obj).then(data => {
        console.log(data);
        if (data.code == 0) {
          this.$alert("恭喜登录成功", "提示", {
            confirmButtonText: "确定",
            callback: action => {
              // console.log(action)
              //action是告诉我们点击哪个按钮
              this.$router.push('/')
            }
          });
        }
      });
    }
  }
};
</script>
<style lang="less">
.loginBox {
  width: 100%;
  height: 100%;
  background: #eee;
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  h2 {
    height: 60px;
    line-height: 60px;
    margin-top: 80px;
  }
  > div {
    width: 400px;
    height: 200px;
    margin: auto;
    box-shadow: 2px 1px 7px #ccc;
    background: #fff;
    padding-top: 30px;
    border-radius: 10px;
    .inp {
      width: 80%;
      margin: 10px auto;
    }
    .btn {
      width: 80%;
    }
  }
  > p {
    position: absolute;
    bottom: 20px;
    text-align: center;
    width: 100%;
  }
}
</style>