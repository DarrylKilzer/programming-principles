import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Solid from "@/components/Solid"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/solid',
      name: 'Solid',
      component: Solid
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
