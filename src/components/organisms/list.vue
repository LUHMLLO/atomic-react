<script setup lang="ts">
	import { allowedLists } from '@/commons/logic/atomicRules';

	const props = defineProps<{
		tag: string;
		className?: string;
	}>();

	if (!allowedLists.includes(props.tag)) {
		throw new Error(`Invalid or unauthorized tag provided: ${props.tag}`);
	}
</script>

<template>
	<component :is="props.tag" :class="[props.className]">
		<slot />
	</component>
</template>
