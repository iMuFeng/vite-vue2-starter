<script lang="ts" setup>
import { useRouter } from '@/hooks/router'

const router = useRouter()

function onPush() {
	router.push('/counter')
}

function onReplace() {
	router.replace('/counter')
}
</script>

<template>
	<section>
		<h2>This starter template includes:</h2>
		<ol>
			<li>Vite</li>
			<li>Typescript</li>
			<li>Vue v2.7</li>
			<li>Vue Router v3</li>
			<li>Pinia v2</li>
		</ol>

		<div class="navigation">
			<button @click="onPush">Go to page Counter</button>
			<button @click="onReplace">Replace with page Counter</button>
		</div>
	</section>
</template>

<style scoped>
.navigation {
	padding: 10px;
	margin-top: 40px;
	border: 2px solid #e5e5e5;
}
</style>
