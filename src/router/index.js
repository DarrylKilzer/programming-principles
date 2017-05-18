import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Solid from "@/components/Solid"
import Principle from "@/components/Principle"

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
      path: '/solid/:letter',
      name: 'Principle',
      component: Principle
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
