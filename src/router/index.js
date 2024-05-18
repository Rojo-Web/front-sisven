import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Categories from '../views/categories.vue';
import EditarCategorie from '../components/categories/EditarCategorie.vue';
import NewCategorie from '../components/categories/NewCategorie.vue';
import Products from '../views/products.vue';
import Invoices from '../views/invoices.vue';
import Details from '../views/details.vue';
import Paymodes from '../views/paymodes.vue';
import customers from '../views/customers.vue';

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/categories',
        name: 'Categories',
        component: Categories
    },
    {
        path: '/editar-categorie/:id',
        name: 'EditarCategorie',
        component: EditarCategorie
    },
    {
        path: '/add-categorie/',
        name: 'NewCategorie',
        component: NewCategorie
    },
    {
        path: '/products',
        name: 'Products',
        component: Products
    },
    {
        path: '/invoices',
        name: 'Invoices',
        component: Invoices
    },
    {
        path: '/details',
        name: 'Details',
        component: Details
    },
    {
        path: '/paymodes',
        name: 'Paymodes',
        component: Paymodes
    },
    {
        path: '/customers',
        name: 'Customers',
        component: customers
    }, {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router