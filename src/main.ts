import { createPinia, PiniaVuePlugin } from 'pinia'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.use(PiniaVuePlugin)

const pinia = createPinia()

new Vue({
	pinia,
	router,
	render: h => h(App)
}).$mount('#app')
