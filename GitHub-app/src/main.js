import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from './store';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'nprogress/nprogress.css';

import type from './component/type.vue';

import empty from './component/empty.vue';

import '../static/css/comment.css';
import '../static/css/main.css';

import Axios from 'axios';
Axios.defaults.crossDomain = true;
Axios.defaults.withCredentials = true;

Axios.interceptors.response.use(
    response => {
        if(response.data.err_code === 2) {
            store.commit('signOut'); 
        }

        return response
    },error => {
        console.log(error)
        return Promise.reject(error);
    }
)

Vue.prototype.$axios = Axios;

Vue.component('type', type);
Vue.component('empty', empty);

Vue.use(ElementUI);

new Vue({
    el: '#app',
    router,
    store,
    render: (c) => c(App)
})