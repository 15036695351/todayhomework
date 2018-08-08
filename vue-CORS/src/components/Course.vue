<template>
  <div>
    <h1>课程列表</h1>
    <ul v-for="item in courseList">
      <li>{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "course",
    data() {
      return {
        courseList: [
          {id: 1, name: 'Python基础'},
          {id: 2, name: 'Java基础'},
          {id: 3, name: 'Js基础'},
          {id: 4, name: 'C#基础'},
        ]
      }
    },
    mounted() {
      this.initCourse();
      // this.testCORS();
    },
    methods: {
      // 直接发送axios会引发跨域问题，因为浏览器有同源策略
      initCourse: function () {
        var that = this;

        this.$axios.request({
          url: 'http://127.0.0.1:8000/api/v1/course/',
          method: 'GET',
          responseType:'json'
        }).then(function (args) {
          // 发送数据成功 之后
          if (args.data.code === 1000) {
            that.courseList = args.data.data
          }else {
            alert(args.data.error)
          }
        }
        )
      }
    }
  }
</script>

<style scoped>

</style>
