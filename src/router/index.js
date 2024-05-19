import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Categories from '../views/categories.vue';
import EditarCategorie from '../components/categories/EditarCategorie.vue';
import NewCategorie from '../components/categories/NewCategorie.vue';
import Products from '../views/products.vue';
import EditarProduct from '../components/products/EditarProduct.vue';
import NewProduct from '../components/products/NewProduct.vue';
import Invoices from '../views/invoices.vue';
import EditarInvoice from '../components/invoices/EditarInvoice.vue';
import NewInvoice from '../components/invoices/NewInvoice.vue';
import Details from '../views/details.vue';
import EditarDetail from '../components/details/EditarDetail.vue';
import NewDetail from '../components/details/NewDetail.vue';
import Paymodes from '../views/paymodes.vue';
import EditarPaymode from '../components/paymodes/EditarPaymode.vue';
import NewPaymode from '../components/paymodes/NewPaymode.vue';
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
        path: '/editar-product/:id',
        name: 'EditarProduct',
        component: EditarProduct
    },
    {
        path: '/add-product/',
        name: 'NewProduct',
        component: NewProduct
    },
    {
        path: '/invoices',
        name: 'Invoices',
        component: Invoices
    },
    {
        path: '/editar-invoice/:id',
        name: 'EditarInvoice',
        component: EditarInvoice
    },
    {
        path: '/add-invoice/',
        name: 'NewInvoice',
        component: NewInvoice
    },
    {
        path: '/details',
        name: 'Details',
        component: Details
    },
    {
        path: '/editar-detail/:id',
        name: 'EditarDetail',
        component: EditarDetail
    },
    {
        path: '/add-detail/',
        name: 'NewDetail',
        component: NewDetail
    },
    {
        path: '/paymodes',
        name: 'Paymodes',
        component: Paymodes
    },
    {
        path: '/editar-paymode/:id',
        name: 'EditarPaymode',
        component: EditarPaymode
    },
    {
        path: '/add-paymode/',
        name: 'NewPaymode',
        component: NewPaymode
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