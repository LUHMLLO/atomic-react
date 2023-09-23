<script setup lang="ts">
	import Icon from '../atoms/icon.vue';
	import Text from '../atoms/text.vue';
	import Spacer from '../atoms/spacer.vue';

	const props = defineProps<{
		text: string;
		hasBar: boolean;
		done?: boolean;
		className?: string;
	}>();
</script>

<template>
	<li
		:class="[
			'flex items-center gap-5xs overflow-hidden whitespace-nowrap',
			props.className,
		]">
		<Icon
			name="check_circle"
			:filled="props.done"
			:className="props.done ? 'text-accent-500' : 'text-accent-900'" />

		<Text tag="label" :text="props.text" className="whitespace-nowrap" />

		<Spacer
			:direction="'horizontal'"
			:className="props.done ? 'bg-accent-500' : 'bg-accent-900'"
			v-if="props.hasBar" />
	</li>
</template>

<style scoped lang="scss">
	li {
		@apply w-full;
		width: -moz-available;
		width: -webkit-fill-available;
		width: stretch;

		&:last-of-type {
			@apply flex-shrink-0;
			@apply w-max;
		}
	}
</style>
