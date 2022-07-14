// see https://github.com/vuejs/vue-router/issues/3760#issuecomment-1178468293
import { getCurrentInstance } from 'vue'

export function useRoute() {
	const { proxy } = getCurrentInstance()!

	return proxy.$route
}

export function useRouter() {
	const { proxy } = getCurrentInstance()!

	return proxy.$router
}
