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
		url?: string;
	}>();
</script>

<template>
	<a
		:href="props.url ? props.url : 'javascript:void(0)'"
		class="inline-flex items-center gap-5xs w-max text-inherit">
		<Icon
			:name="props.leading_icon"
			:filled="leading_icon_fill"
			v-if="props.leading_icon" />
		<Text tag="span" :text="$props.text" />
		<Icon
			:name="props.trailing_icon"
			:filled="trailing_icon_fill"
			v-if="props.trailing_icon" />
	</a>
</template>
