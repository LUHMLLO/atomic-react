<script setup lang="ts">
	import Icon from '../atoms/icon.vue';

	const props = defineProps<{
		checked?: boolean;
		className?: string;
		icon?: string;
		icon_fill?: boolean;
	}>();
</script>

<template>
	<fieldset
		:class="[
			'relative inline-flex items-center w-5xl bg-neutral-900 rounded-5xl isolate overflow-hidden',
			props.className,
		]">
		<input
			type="checkbox"
			:class="[
				'absolute inset-0 z-10 before:invisible before:absolute before:inset-0 appearance-none',
				props.className,
			]"
			:checked="props.checked" />
		<label class="flex flex-grow p-9xs">
			<Icon
				:name="props.icon ? props.icon : 'check'"
				:filled="icon_fill"
				class="rounded-5xl text-lg" />
		</label>
	</fieldset>
</template>

<style scoped lang="scss">
	fieldset {
		input {
			cursor: pointer;
		}

		input:checked ~ label {
			@apply bg-accent-500;
			@apply justify-end;
		}

		label > [class*='material-symbols'] {
			@apply bg-neutral-800;
		}

		input:checked ~ label > [class*='material-symbols'] {
			@apply bg-neutral-50;
			@apply text-accent-900;
		}
	}
</style>
