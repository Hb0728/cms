<template>
	<div style="min-height:720px" v-loading="isLoading">
		<cms-header></cms-header>
		<meau></meau>
		<router-view />
	</div>
</template>
<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex'
import cmsHeader from '@/components/cmsheader.vue';
import meau from "@/components/meau.vue";
export default {
	name: 'app',
	components: {
		cmsHeader,
		meau
	},
	setup() {
		const store = useStore()	
		function getisLoading() { 
			store.commit('setLoading', false)
		}
		let isLoading = computed(()=>store.state.isLoading)
		return {
			isLoading,
			store,
			getisLoading,
		}
	},

};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

img {
	display: block;
}

body {
	margin: 0;
	background-color: #F5F5F5;
}

a {
	text-decoration: none;
}

a:hover {
	color: #2975dc;
}

/* 当前活跃的路由 */
a.router-link-exact-active {
	color: #ffd04b;
}

.text-ellipsis {
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	display: block;
}
</style>
