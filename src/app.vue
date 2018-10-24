<template>
    <div>
        <my-header :user="user"></my-header>
        <div class="main clearfix">
            <p-aside :user="user"></p-aside>
            <repository></repository>
        </div>
        <my-footer></my-footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                username: 'guoc',
                nickname: '404error123',
                imageUrl: '../static/img/head.jpg',
                website: 'https://www.404error.top'
            }
        }
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