<template>
  <div>
    <h1>用户登录</h1>
    <input type="text" placeholder="用户名" v-model.trim="username">
    <input type="text" placeholder="密码" v-model.trim="password">
    <input type="button"  v-on:click="doLogin">
    <a v-on:click="doLogin">点我</a>

  </div>
</template>

<script>
    export default {
        name: "login",
        data(){
          return {
            username:'',
            password:'',
        }
    },
      mounted(){
          this.doLogin()
      },
      methods:{
          doLogin:function () {
            this.$axios.request({
              url: 'http://127.0.0.1:8000/api/v1/auth/',
              method: 'POST',
              data:{
                user:this.username,
                pwd:this.password
              },
              headers:{
                'Content-Type':'application/json'
              },
              responseType: 'json'
            }).then(function (args) {
              // 发送数据成功 之后
              alert(66666666)
            }).catch(function () {
              alert("发送数据失败")
            })
          }
      }
    }
</script>

<style scoped>

</style>
