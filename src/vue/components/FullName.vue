<template>
	<p>Hi, {{ fullName }}</p>
</template>

<script lang="ts">
	import {computed, defineComponent} from "@vue/composition-api";

	export default defineComponent({
		name: "FullName",
		components: {},
		props: {
			firstName: {
				type: String,
				required: true
			},
			lastName: {
				type: String,
				required: true
			}
		},
		setup(props: any) {
			// Declare computed properties
			const fullName: any = computed((): String => {
				return `${props.firstName}  ${props.lastName}`;
			});

			// Return properties to template
			return {
				fullName
			};
		}
	});
</script>
