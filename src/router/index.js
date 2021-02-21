import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import App from '@/App'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Write from '@/views/Write'
import Detail from '@/views/Detail'
import Mypage from '@/views/Mypage'
import Search from '@/views/Search'
import Register from '@/views/Register'
import FindPw from '@/views/FindPw'

Vue.use(Router)

//로그인한 유저들 접속 막기
const rejectAuthUser = (to,from, next) => {
  if(store.state.isLoginSuccess === true){
    alert("이미 로그인 하였습니다.")
    next('/mypage')
  }
  else{ 
    next()
  }
}

//로그인 안된 유저들 접속 막기
const onlyAuthUser = (to,from, next) => {
  if(store.state.isLoginSuccess === true){
    alert("로그인이 필요합니다.")
    next('/mypage')
  }
  else{ 
    next()
  }
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      beforeEnter: rejectAuthUser,
      name: 'Login',
      component: Login
    },
    {
      path: '/write/:contentId?',
      name: 'Write',
      component: Write
    },
    {
      path: '/detail/:contentId',
      name: 'Detail',
      component: Detail
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
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/findpw',
      name: 'FindPw',
      component: FindPw
    }
  ]
})
