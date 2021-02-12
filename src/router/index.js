import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Login from '@/components/Login'
import Write from '@/components/Write'
import Mypage from '@/components/Mypage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/write',
      name: 'Write',
      component: Write
    },
    {
      path: '/mypage',
      name: 'Mypage',
      component: Mypage
    }
  ]
})
