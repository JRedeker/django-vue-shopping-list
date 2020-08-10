import Vue from "vue/dist/vue.js";
import {
    VuexAsPlugin,
    registerModules
} from "../../store/vuex_usage_utils";
// import ShoppingModule from "../store/module_shopping"
const FruitInspector = () =>
    import ( /* webpackChunkName: "chunk-fruit-inspector" */ "../components/ShoppingList.vue");

Vue.config.productionTip = false

Vue.use(VuexAsPlugin);

registerModules({
    'shopping': {
        module: ShoppingModule,
        persistedPaths: ['list']
    },
})

// Mount top level components
new Vue({
    el: "#app",
    components: {
        ShoppingList
    }
});