import axios from 'axios';
import routes from "./routes"
import Vue from "vue";
import VueRouter from "vue-router";

window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Vue.use(VueRouter);

let app = new Vue({
    el: '#app',
    router: new VueRouter(routes)
});
