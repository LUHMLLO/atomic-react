<script setup lang="ts">
	import Icon from '../atoms/icon.vue';
	import Text from '../atoms/text.vue';

	const props = defineProps<{
		text: string;
		className?: string;
		flat?: boolean;
		leading_icon?: string;
		leading_icon_filled?: boolean;
	}>();
</script>

<template>
	<details
		:class="[
			'w-full rounded-5xs overflow-hidden',
			props.flat ? '' : 'bg-neutral-900',
			props.className,
		]">
		<summary
			:class="[
				'flex items-center gap-5xs  w-full cursor-pointer ',
				props.flat ? '' : 'px-nm py-sm bg-neutral-800',
			]">
			<Icon
				:name="props.leading_icon"
				:filled="props.leading_icon_filled"
				v-if="props.leading_icon" />
			<Text tag="span" :text="props.text" className="w-full" />
			<Icon name="expand_more" />
		</summary>
		<ul class="flex flex-col gap-5xs p-5xs w-full">
			<slot />
		</ul>
	</details>
</template>
