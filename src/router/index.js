import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ChartContainer from '@/components/ChartContainer'
import Cart from '@/components/Cart'
// Admin Components
import Index from '@/components/admin/Index'
import New from '@/components/admin/New'
import Products from '@/components/admin/Products'
import Edit from '@/components/admin/Edit'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/chart',
      name: 'LineChartContainer',
      component: ChartContainer
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Index,

      // Child routes
      children: [{
          path: 'new',
          name: 'New',
          component: New
        },
        {
          path: '',
          name: 'Products',
          component: Products
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit
        }
      ]
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    }
  ]
})
