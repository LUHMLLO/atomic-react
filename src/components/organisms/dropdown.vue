<script setup lang="ts">
	import { ref } from 'vue';
	import {
		useFloating,
		flip,
		offset,
		shift,
		autoUpdate,
	} from '@floating-ui/vue';

	import Icon from '../atoms/icon.vue';
	import Text from '../atoms/text.vue';

	const props = defineProps<{
		className?: string;
		filled?: boolean;
		flat?: boolean;
		leading_icon?: string;
		leading_icon_filled?: boolean;
		text?: string;
	}>();

	const reference = ref(null);
	const floating = ref(null);
	const { floatingStyles } = useFloating(reference, floating, {
		placement: 'bottom',
		middleware: [
			flip({
				fallbackStrategy: 'bestFit',
				padding: 6,
			}),
			offset(6),
			shift({
				mainAxis: true,
				crossAxis: true,
			}),
		],
		whileElementsMounted: autoUpdate,
	});
</script>

<template>
	<details
		:class="[
			'relative inline-flex flex-col',
			props.className,
		]">
		<summary
			ref="reference"
			:class="[
				'flex items-center gap-5xs min-w-full max-w-max cursor-pointer rounded-5xs',
				props.filled ? 'bg-neutral-900' : '',
				props.text && !props.flat && 'px-sm py-xs',
				!props.text && !props.flat && 'p-5xs',
			]">
			<Icon
				:name="props.leading_icon"
				:filled="props.leading_icon_filled"
				v-if="props.leading_icon" />
			<Text
				tag="span"
				:text="props.text"
				className="w-full"
				v-if="props.text" />
			<Icon name="expand_more" />
		</summary>
		<ul
			ref="floating"
			class="flex flex-col gap-5xs p-5xs min-w-full max-w-max bg-neutral-900 rounded-5xs whitespace-nowrap"
			:style="floatingStyles">
			<slot />
		</ul>
	</details>
</template>
