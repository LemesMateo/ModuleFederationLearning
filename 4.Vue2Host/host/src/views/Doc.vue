<template>
	<div id="target">

	</div>
</template>
<script>
	import mountTeam from 'vue3App/mountTeam';
	import { vue2ToVue3 } from '../utils';
	import Team from 'vue3App/Team';
export default {
	data() {
		return {
			currentView: null,
		};
	},
	computed: {
		changePage: function () {
			var component = this.$route.params.casoDeUso;
			this.newView(component);
			return true;
		},
	},
	methods: {
		newView(component) {
			var vm = this;
			if (component.toLowerCase() == 'team')
			{
				mountTeam('#target');
			}
			else {
				vm.$router.push('/')
			}
		}
	},
	mounted(){
		var component = this.$route.params.casoDeUso;
			this.newView(component);
	}
};
</script>