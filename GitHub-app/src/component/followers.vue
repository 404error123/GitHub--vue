<template>
    <div class="followers">
        <empty v-if="!followers" :message="message"></empty>
        
        <div class="user" v-for="(user, key) in followers" :key="key" v-else>
            <div class="head-img">
                <a href="">
                    <img :src="user.headerURL" alt="">
                </a>
            </div>
            <div class="user-info">
                <p class="user-name">
                    <a href=""><span class="realname">{{user.realName}}</span><span class="nickname">{{user.nickName}}</span></a>
                </p>
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
            followers: [
                {
                    headerURL: '../static/img/hd3.png',
                    realName: 'abcdefg66',
                    nickName: '404123',
                    other: 'aaaaaaa',
                },
                 {
                    headerURL: '../static/img/hd2.png',
                    realName: 'lisi',
                    nickName: 'dadadada',
                    other: '',
                }
            ],
            // followers: null,
            message: 'followers'
        }
    }
}
</script>
