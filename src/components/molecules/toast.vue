<script setup lang="ts">
	import Icon from '../atoms/icon.vue';
	import Text from '../atoms/text.vue';

	const props = defineProps<{
		text: string;
		className?: string;
	}>();
</script>

<template>
	<span
		class="inline-flex items-center justify-center gap-5xs p-5xs rounded-5xs bg-amber-300 text-amber-950 max-w-full">
		<Icon name="warning" />
		<Text
			tag="span"
			:text="props.text"
			className="whitespace-nowrap overflow-ellipsis overflow-hidden" />
		<Icon name="close" />
	</span>
</template>
