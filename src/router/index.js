import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Regist from '@/components/Regist'
import Forgot from '@/components/Forgot'
import Home from '@/components/Home'
import Index from '@/components/Index'
import Table from '@/components/Table'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
      path: '/regist',
      name: 'Regist',
      component: Regist
    }, {
      path: '/forgot',
      name: 'Forgot',
      component: Forgot
    }, {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/home/index',
      children: [
        {
          path: 'index',
          name: 'Index',
          component: Index
        }, {
          path: 'table',
          name: 'Table',
          component: Table
        }
      ]
    }
  ]
})
