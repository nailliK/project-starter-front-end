<template>
	<main>
		<h1>Front End Starter</h1>

		<section>
			<h2>First And Last Name</h2>
			<p>Hi, {{ firstName }} {{ lastName }}</p>
		</section>

		<section>
			<h2>Full Name Child Component</h2>
			<full-name :first-name="firstName"
			           :last-name="lastName"></full-name>
		</section>
	</main>
</template>

<script lang="ts">
	// Import NPM libraries
	import {defineComponent, ref, Ref} from "@vue/composition-api";
	// Import child components
	import FullName from "~/vue/components/FullName.vue";

	export default defineComponent({
		name: "Home",
		components: {
			FullName
		},
		props: {},
		setup(props: any) {
			// Declare reactive properties
			const firstName: Ref<string> = ref("John");
			const lastName: Ref<string> = ref("Smith");

			// Return properties to template
			return {
				firstName,
				lastName
			};
		}
	});
</script>
