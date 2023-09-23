<script setup lang="ts">
	import Step from '../molecules/step.vue';

	const props = defineProps<{
		steps: Array<{
			name: string;
			hasBar: boolean;
			done?: boolean;
		}>;
		className?: string;
	}>();
</script>

<template>
	<ul
		:class="[
			'flex items-center flex-shrink justify-center whitespace-nowrap gap-5xs w-full',
			props.className,
		]">
		<Step
			:text="step.name"
			:hasBar="step.hasBar"
			:done="step.done"
			v-for="step in props.steps" />
	</ul>
</template>
