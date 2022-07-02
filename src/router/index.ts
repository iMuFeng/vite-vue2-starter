import Home from '@/pages/Home.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	base: '/',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/counter',
			name: 'counter',
			component: () => import('@/pages/Counter.vue')
		}
	]
})

export default router
