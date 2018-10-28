<template>
    <div>
        <p-aside></p-aside>
        <div class="repository">
            <nav>
                <ul class="clearfix">
                    <li>
                        <router-link exact-active-class="select" :to="{ name: 'overview' }"><span>Overview</span></router-link>
                    </li>
                    <li>
                        <router-link exact-active-class="select" :to="{ name: 'repositories' }"><span>Repositories</span><i class="num">{{num[0]}}</i></router-link>
                    </li>
                    <li>
                        <router-link exact-active-class="select" :to="{ name: 'stars' }"><span>Stars</span><i class="num">{{num[1]}}</i></router-link>
                    </li>
                    <li>
                        <router-link exact-active-class="select" :to="{ name: 'followers' }"><span>Followers</span><i class="num">{{num[2]}}</i></router-link>
                    </li>
                    <li>
                        <router-link exact-active-class="select" :to="{ name: 'followering' }"><span>Followering</span><i class="num">{{num[3]}}</i></router-link>
                    </li>
                </ul>
            </nav>
            <router-view class="box"></router-view>
        </div>
    </div>
</template>

<script>
import aside from './aside.vue';
import '../../static/css/main.css';

export default {
    data() {
        return {
            select: 1,
            num: [6, 1, 8, 10]
        }
    },
    methods: {
        
    },
    components: {
        'p-aside': aside
    }
}
</script>
