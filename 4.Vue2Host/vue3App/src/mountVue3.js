import {createApp, defineAsyncComponent} from "vue";
import Vue from "vue"
export default (selector, componentName) => {
    const componente = defineAsyncComponent(() => 
    import('./views/'+componentName+'.vue')
    );
    console.log(componente);
    createApp(componente).mount(selector);
};


