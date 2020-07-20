import Vue from "vue";
import VueRouter from "vue-router";
import Home from "~vue/views/Home.vue";

Vue.use(VueRouter);

const router: VueRouter = new VueRouter({
	mode: "history",
	routes: [
		{
			path: "/",
			component: Home
		}
	]
});

export default router;
