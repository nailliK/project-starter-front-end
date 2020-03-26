<template>
	<div>
		<h2>First And Last Name</h2>
		<p>Hi, {{ firstName }} {{ lastName }}</p>

		<h2>Full Name Child Component</h2>
		<FullName :fullName="fullName"></FullName>
	</div>
</template>

<script lang="ts">
	// Import NPM libraries
	import {computed, defineComponent, ref, Ref} from "@vue/composition-api";

	// Import child components
	import FullName from "~/vue/components/FullName.vue";

	export default defineComponent({
		name: "Home",
		components: {
			FullName
		},
		props: {},
		setup(props) {
			// Declare reactive properties
			const firstName: Ref<string> = ref("John");
			const lastName: Ref<string> = ref("Smith");

			// Declare computed properties
			const fullName: any = computed((): any => {
				return `${firstName.value}  ${lastName.value}`;
			});

			// Return properties to template
			return {
				firstName,
				lastName,
				fullName
			};
		}
	});
</script>
