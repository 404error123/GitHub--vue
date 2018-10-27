<template>
    <div class="followering">
        <empty v-if="!followering" :message="message"></empty>
        
        <div class="user" v-for="(user, key) in followering" :key="key" v-else>
            <div class="head-img">
                <a href="">
                    <img :src="user.headerURL" alt="">
                </a>
            </div>
            <div class="user-info">
                <p class="user-name"><a href=""><span class="realname">{{user.realName}}</span><span class="nickname">{{user.nickName}}</span></a></p>
                <p class="other">{{user.other}}</p>
            </div>
            <div class="rt-btn">
                <el-button>Unfollow</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            followering: [
                {
                    headerURL: '../static/img/hd3.png',
                    realName: 'demo',
                    nickName: 'test',
                    other: 'aaaaadsgaa',
                },
                 {
                    headerURL: '../static/img/hd1.png',
                    realName: 'zhangsan',
                    nickName: 'wangmaz',
                    other: '',
                }
            ],
            // followering: null,
            message: 'followering'
        }
    }
}
</script>
