import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import MyHeader from './component/header.vue';
import MyFooter from './component/footer.vue';
import PersonAaside from './component/aside.vue';
import repository from './component/repository.vue';
import type from './component/type.vue';

import overview from './component/overview.vue';
import storage from './component/storage.vue';
import stars from './component/stars.vue';
import followers from './component/followers.vue';
import followering from './component/followering.vue';

import empty from './component/empty.vue';

import '../static/css/comment.css'

import Axios from 'axios';

Vue.component('my-header', MyHeader);
Vue.component('my-footer',MyFooter);
Vue.component('p-aside', PersonAaside);
Vue.component('repository', repository);
Vue.component('type', type);

Vue.component('empty', empty);

Vue.use(ElementUI);
Vue.use(VueRouter);

Vue.prototype.$axios = Axios;

let router = new VueRouter({
    routes: [
        { name: 'overview', path: '/', component: overview },
        { name: 'storage', path: '/storage', component: storage },
        { name: 'stars', path: '/stars', component: stars },
        { name: 'followers', path: '/followers', component: followers },
        { name: 'followering', path: '/followering', component: followering }        
    ]
})

new Vue({
    el: '#app',
    router,
    render: (c) => c(App)
})