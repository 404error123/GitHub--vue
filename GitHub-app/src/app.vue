<template>
    <div>
        <my-header></my-header>
        <div class="main clearfix">
            <router-view></router-view>
        </div>
        <my-footer></my-footer>
    </div>
</template>

<script>
import MyHeader from './component/header.vue';
import MyFooter from './component/footer.vue';

export default {
    data() {
        return {

        }
    },
    components: {
        'my-header': MyHeader,
        'my-footer': MyFooter
    },
    created() {
        this.$store.commit('getUser')
    }
}
</script>

<style>
    header {
        margin-bottom: 25px;
    }
    .main,
    footer {
        width: 980px;
        margin: 0 auto;
    }
    .main aside {
        margin-right: 25px;
    }
</style>