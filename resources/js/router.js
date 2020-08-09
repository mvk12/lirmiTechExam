import Vue from 'vue'
import VueRouter from "vue-router"

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/pages/HomePage.vue'),
        },
        {
            path: '/profesores',
            name: 'profesores',
            component: () => import('@/pages/ProfesoresPage.vue')
        }
    ]
})
