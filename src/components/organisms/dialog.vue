<script setup lang="ts">
	import { ref } from 'vue';

	import Text from '../atoms/text.vue';
	import Button from '../molecules/button.vue';

	const props = defineProps<{
		text: string;
		open?: boolean;
		fullscreen?: boolean;
	}>();

	const dialogComponent = ref();

	const isModal = ref(false);

	function reOpen() {
		dialogComponent.value.close();
		dialogComponent.value.show();
		isModal.value = !isModal.value;
	}

	function reOpenAsModal() {
		dialogComponent.value.close();
		dialogComponent.value.showModal();
		isModal.value = !isModal.value;
	}
</script>

<template>
	<dialog
		ref="dialogComponent"
		class="flex flex-col flex-grow flex-shrink gap-xs p-xs bg-neutral-900 text-neutral-400 rounded-5xs min-w-fit w-max max-w-full max-h-full overflow-hidden"
		:open="props.open">
		<header class="flex items-center justify- gap-xs z-10">
			<Button
				className="p-5xs"
				leading_icon="close"
				
				v-if="isModal"
				@click="reOpen" />

			<Text tag="h6" :text="props.text" className="flex-grow"/>

			<Button
				className="p-5xs"
				leading_icon="fullscreen"
				
				v-if="props.fullscreen && !isModal"
				@click="reOpenAsModal" />
		</header>
		<section
			class="flex flex-col gap-xs flex-grow flex-shrink max-h-full w-full z-0 overflow-y-auto">
			<slot />
		</section>
		<footer class="flex items-center justify-end gap-xs z-10">
			<Button text="Accept" />
			<Button text="Cancel" />
		</footer>
	</dialog>
</template>
