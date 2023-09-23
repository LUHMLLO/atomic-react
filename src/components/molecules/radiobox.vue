<script setup lang="ts">
	import Radio from '../atoms/radio.vue';
	import Text from '../atoms/text.vue';

	const props = defineProps<{
		groupName: string;
		text: string;
		checked?: boolean;
		className?: string;
	}>();
</script>

<template>
	<fieldset
		:class="['inline-flex items-center gap-5xs flex-shrink', props.className]">
		<Radio :groupName="props.groupName" :checked="props.checked" />
		<Text tag="label" :text="props.text" />
	</fieldset>
</template>
