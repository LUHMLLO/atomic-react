<script setup lang="ts">
	import Button from '@/components/molecules/button.vue';

	const props = defineProps<{
		buttons: Array<{
			className?: string;
			filled?: boolean;
			leading_icon?: string;
			leading_icon_fill?: boolean;
			text?: string;
			trailing_icon?: string;
			trailing_icon_fill?: boolean;
		}>;
		className?: string;
		filled?: boolean;
	}>();
</script>

<template>
	<ul
		:class="[
			'inline-flex items-stretch justify-center flex-shrink rounded-5xs gap-8xs overflow-hidden whitespace-nowrap w-max',
			props.filled
				? 'bg-neutral-950'
				: 'border-2 border-neutral-900 bg-neutral-900',
			props.className,
		]">
		<Button
			:text="btn.text"
			:leading_icon="btn.leading_icon"
			:leading_icon_fill="btn.leading_icon_fill"
			:trailing_icon="btn.trailing_icon"
			:trailing_icon_fill="btn.trailing_icon_fill"
			filled
			flat
			borderless
			:class="[props.filled ? '' : 'bg-neutral-950']"
			v-for="btn in props.buttons" />
	</ul>
</template>
