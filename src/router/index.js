import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Write from '@/views/Write'
import Mypage from '@/views/Mypage'
import Search from '@/views/Search'
import Signup from '@/views/Signup'
import FindPw from '@/views/FindPw'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/findpw',
      name: 'FindPw',
      component: FindPw
    }
  ]
})
