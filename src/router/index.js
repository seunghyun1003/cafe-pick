import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import PostList from '@/components/PostList'
import Login from '@/components/Login'
import Write from '@/components/Write'
import Mypage from '@/components/Mypage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PostList',
      component: PostList
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
