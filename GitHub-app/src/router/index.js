import Vue from 'vue';
import VueRouter from 'vue-router';

import login from '../component/login.vue';
import mainCnt from '../component/main.vue';

import overview from '../component/overview.vue';
import repositories from '../component/repositories.vue';
import stars from '../component/stars.vue';
import followers from '../component/followers.vue';
import followering from '../component/followering.vue';

Vue.use(VueRouter);

const router =  new VueRouter({
    routes: [
        { name: 'login', path: '/login', component: login },
        { path: '/', component: mainCnt, children: [
            { name: 'overview', path: '', component: overview },
            { name: 'repositories', path: 'repositories', component: repositories },
            { name: 'stars', path: 'stars', component: stars },
            { name: 'followers', path: 'followers', component: followers },
            { name: 'followering', path: 'followering', component: followering } 
        ] }
    ]
})

router.beforeEach((to, from, next) => {
    let isLogin = localStorage.getItem('user')
    if (isLogin) {
        if (to.name === 'login') {
            next({ name: 'overview' });
        } else {
            next();
        }
    } else {
        if (to.name !== 'login') {
            next({ path: 'login' });
        } else {
            next();
        }
    }
});

export default router;