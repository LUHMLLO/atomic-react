<script setup lang="ts">
	const props = defineProps<{
		className?: string;
	}>();
</script>

<template>
	<ul
		:class="[
			'inline-flex items-center flex-shrink gap-5xs whitespace-nowrap w-max',
			props.className,
		]">
		<slot />
	</ul>
</template>
