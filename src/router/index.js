import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import DragList from '@/components/DragList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/list',
      name: 'DragList',
      component: DragList
    }
  ]
})
