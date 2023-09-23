<script setup lang="ts">
	import Icon from '../atoms/icon.vue';
	import Text from '../atoms/text.vue';

	const props = defineProps<{
		text: string;

		className?: string;

		leading_icon?: string;
		leading_icon_fill?: boolean;

		trailing_icon?: string;
		trailing_icon_fill?: boolean;
	}>();
</script>

<template>
	<span
		:class="[
			'inline-flex items-center rounded-5xs px-xs py-5xs w-max bg-neutral-900 text-neutral-400',
			props.className,
		]">
		<Icon
			:name="props.leading_icon"
			:filled="leading_icon_fill"
			v-if="props.leading_icon" />
		<Text tag="span" :text="props.text" scale="xs" />
		<Icon
			:name="props.trailing_icon"
			:filled="trailing_icon_fill"
			v-if="props.trailing_icon" />
	</span>
</template>
