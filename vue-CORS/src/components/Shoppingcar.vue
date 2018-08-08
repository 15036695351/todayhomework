<template>

</template>

<script>
    export default {
        name: "shoppingcar",
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
    }
</script>

<style scoped>

</style>
