<script setup lang="ts">
	import Button from '@/components/molecules/button.vue';

	const props = defineProps<{
		variant?: string;
		tabs: Array<{
			active?: boolean;
			className?: string;
			leading_icon?: string;
			leading_icon_fill?: boolean;
			text?: string;
			trailing_icon?: string;
			trailing_icon_fill?: boolean;
		}>;
		className?: string;
	}>();
</script>

<template>
	<ul
		:class="[
			'inline-flex items-stretch overflow-x-auto overflow-y-hidden whitespace-nowrap max-w-full',
			props.variant === 'rounded' ? 'rounded-5xl' : '',
		]">
		<Button
			:text="tab.text"
			:leading_icon="tab.leading_icon"
			:leading_icon_fill="tab.leading_icon_fill"
			:trailing_icon="tab.trailing_icon"
			:trailing_icon_fill="tab.trailing_icon_fill"
			borderless
			flat
			:class="[
				props.variant === 'rounded' ? 'rounded-5xl' : '',
				tab.active ? 'bg-accent-500 text-accent-900' : '',
			]"
			v-for="tab in props.tabs" />
	</ul>
</template>
