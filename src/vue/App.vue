<template>
	<main>
		<RouterView></RouterView>
	</main>
</template>

<script lang="ts">
	import {defineComponent} from "@vue/composition-api";

	export default defineComponent({
		name: "App",
		components: {},
		props: {},
		setup(props) {
		}
	});

</script>
