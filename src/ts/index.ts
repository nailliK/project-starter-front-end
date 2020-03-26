// Import SCSS index file to be included in compiling
import "~/scss/index.scss";
// Import NPM libraries
import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";
// Import project libraries and files
import router from "~/ts/router";
import App from "~/vue/App.vue";

// Tell Vue V2 to use Composition API
Vue.use(VueCompositionApi);

// TypeScript interface for Composition API refs
declare module "@vue/composition-api/dist/component/component" {
	interface SetupContext {
		readonly refs: { [key: string]: Vue | Element | Vue[] | Element[] };
	}
}

// Instantiate Vue and mount App
new Vue({
	router,
	render: h => h(App)
}).$mount("#app");
