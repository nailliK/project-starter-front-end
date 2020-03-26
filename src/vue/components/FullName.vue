<template>
	<p>Hi, {{ fullName }}</p>
</template>

<script lang="ts">
	import {defineComponent} from "@vue/composition-api";

	export default defineComponent({
		name: "FullName",
		components: {},
		props: {
			fullName: String
		},
		setup(props) {
			// Return properties to template
			return {
				fullName
			};
		}
	});
</script>
