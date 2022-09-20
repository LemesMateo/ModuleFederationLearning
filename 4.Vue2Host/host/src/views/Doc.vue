<template>
	<div id="target">
	</div>
</template>
<script>
	import mountVue3 from 'vue3App/mountVue3';
	import mountReact from 'reactApp/mountReact';
	import { vue2ToVue3 } from '../utils';
	
export default {
	data() {
		return {
			currentView: null,
			calls: {
				fnVue(target, componentName){
					mountVue3('#' + target, componentName);
				},
				fnReact(target, componentName){
					mountReact(target, componentName);
				}
			}
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
			try{
				if (component.substring(0,5) == 'react') {
					vm.calls.fnReact('target', component);
				}
				else {
					vm.calls.fnVue('target', component);
				}
			}
			catch {
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