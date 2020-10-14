import Vue from 'vue'
import VueRouter from 'vue-router'
import Cocktails from '../components/Cocktails'
import AddCocktail from '../components/AddCocktail'
import Stock from '../components/Stock'
import AddStock from '../components/AddStock'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Cocktails },
    { path: '/stock', component: Stock },
    { path: '/add-cocktails', component: AddCocktail},
    { path: '/add-stock', component: AddStock}
]

const router = new VueRouter({
    // mode: 'history',
    routes // short for `routes: routes`
})

export default router