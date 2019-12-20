import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import BeforeCreate from '@/components/BeforeCreate'
import Created from '@/components/Created'
import BeforeMount from "@/components/BeforeMount"
import Mounted from "@/components/Mounted"
import BeforeUpdate from "@/components/BeforeUpdate"
import BeforeDestroy from "@/components/BeforeDestroy"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      component: Test
    },
    {
      path: '/beforeCreate',
      name: 'beforeCreate',
      component: BeforeCreate
    },
    {
      path: '/created',
      name: 'created',
      component: Created
    },
    {
      path: '/beforeMount',
      name: 'beforeMount',
      component: BeforeMount
    },
    {
      path: '/mounted',
      name: 'mounted',
      component: Mounted
    },
    {
      path: '/beforeUpdate',
      name: 'beforeUpdate',
      component: BeforeUpdate
    },
    {
      path: '/beforeDestroy',
      name: 'beforeDestroy',
      component: BeforeDestroy
    },
  ]
})
