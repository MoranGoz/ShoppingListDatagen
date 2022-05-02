import {createRouter, createWebHistory} from 'vue-router'
import ShoppingList from '../views/ShoppingListPage/ShoppingListPage.vue'
import ItemPage from "../views/ItemPage/ItemPage.vue";


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
            component: ItemPage
        }
    ]
})

export default router
