import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import TheWelcome from '../components/TheWelcome.vue'
import ShoppingList from '../views/ShoppingListPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ShoppingList',
      component: ShoppingList
    },
    {
      path: '/item/:id',
      name: 'ItemPage',
      component: () => import('../views/ItemPage.vue')
    }
  ]
})

export default router
