import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Course from '@/components/Course'
import News from '@/components/News'
import Login from '@/components/Login'
import Shoppingcar from '@/components/Shoppingcar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/course',
      name: 'Course',
      component: Course
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/shoppingcar',
      name: 'Shoppingcar',
      component: Shoppingcar
    }
  ]
})
