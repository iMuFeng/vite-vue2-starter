<script lang="ts" setup></script>

<template>
	<div id="app">
		<div>
			<img alt="Vue logo" class="logo" height="125" src="@/assets/logo.svg" width="125" />
			<h2>Vite Vue2 Typescript Starter</h2>
			<ul>
				<li>
					<router-link to="/">Home</router-link>
				</li>
				<li>
					<router-link to="/counter">Counter</router-link>
				</li>
			</ul>
		</div>
		<router-view />
	</div>
</template>

<style>
@import '@/assets/base.css';

#app {
	max-width: 640px;
	margin: 0 auto;
	padding: 2rem;
	font-weight: normal;
}

section {
	margin: 20px 0;
}
</style>
