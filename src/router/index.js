import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import PostList from '@/components/PostList'
import Login from '@/components/Login'
import Write from '@/components/Write'
import Mypage from '@/components/Mypage'
import Search from '@/components/Search'
import Signup from '@/components/Signup'
import FindPw from '@/components/FindPw'

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
