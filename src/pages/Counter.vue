<script lang="ts" setup>
import Emoji from '@/components/Emoji.vue'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>

<template>
	<div>
		<section>
			<h3>Counter</h3>
			<p>
				<button @click="store.decrement">-</button>
				<span>{{ store.count }}</span>
				<button @click="store.increment">+</button>
			</p>
		</section>

		<section>
			<h3>Emoji</h3>
			<Emoji :count="store.count" />
		</section>
	</div>
</template>
