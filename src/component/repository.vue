<template>
    <div class="repository">
        <nav>
            <ul class="clearfix">
                <li :class="{ select : select === 1 }">
                    <router-link :to="{ name: 'overview' }"><span>Overview</span></router-link>
                </li>
                <li :class="{ select : select === 2 }">
                    <router-link :to="{ name: 'storage' }"><span>Repositories</span><i class="num">{{num[0]}}</i></router-link>
                </li>
                <li :class="{ select : select === 3 }">
                    <router-link :to="{ name: 'stars' }"><span>Stars</span><i class="num">{{num[1]}}</i></router-link>
                </li>
                <li :class="{ select : select === 4 }">
                    <router-link :to="{ name: 'followers' }"><span>Followers</span><i class="num">{{num[2]}}</i></router-link>
                </li>
                <li :class="{ select : select === 5 }">
                    <router-link :to="{ name: 'followering' }"><span>Followering</span><i class="num">{{num[3]}}</i></router-link>
                </li>
            </ul>
        </nav>
        <router-view class="box" @select="selectListen"></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            select: 1,
            num: [6, 0, 8, 10]
        }
    },
    methods: {
        selectListen(e) {
            this.select = e;
        }
    }
}
</script>

<style>
    .repository {
        float: left;
        width: 725px;
        color: #586069;
    }
    .repository nav {
        border-bottom: solid 1px #d1d5da;
    }
    .repository nav ul li {
        float: left;
        line-height: 20px;
        margin-right: 16px;
        margin-bottom: -1px;
        border-bottom: 2px solid transparent;
    }
    .repository nav ul li:hover {
        border-bottom-color: #d1d5da;
    }
    .repository nav ul li.select {
        border-bottom-color: #e36209;
    }
    .repository nav ul li.select span {
        font-weight: bold;
    }    
    .repository nav ul li a {
        display: block;
        padding: 16px 8px;
        color: #586069;
    }
    .repository nav ul li.select a {
        color: #24292e;
    }
    .repository nav ul li a i.num {
        display: inline-block;
        margin-left: 4px;        
        width: 16px;
        border-radius: 50%;        
        line-height: 16px;
        background-color: rgba(27,31,35,0.08);
        vertical-align: middle;
        font-style: normal;
        font-size: 12px;
        text-align: center;
    }

    .repository .search-box {
        display: flex;        
        padding: 16px 0;
        border-bottom: 1px #d1d5da solid;
    }
    .repository .search-box .el-input {
        flex: 1;
    }
    .repository .search-box .el-input input {
        height: 34px;
        line-height: 34px;
    }
    .repository .search-box .el-dropdown button {
        padding: 9px 10px;
    }
    .repository .search-box .el-dropdown button {
        background-color: #eff3f6;
        color: #586069;
        border-color: rgba(27,31,35,0.2);
    }
    .repository .search-box .el-dropdown button span.word {
        color: #24292e;
    }
    .repository .search-box .el-dropdown button i {
        font-size: 12px;
    }    
    .repository .search-box .el-dropdown button:hover,
    .repository .search-box .el-dropdown button:focus {
        background-color: #e9ecef;
    }
    .type-item,
    .language-item {
        margin: 0;
        padding: 0;
    }
    .type-item li,
    .language-item li {
        padding: 0 150px 0 20px;
    }

    .repository .user {
        height: 54px;
        padding: 24px 0;
        border-bottom: 1px #e1e4e8 solid
    }
    .repository .user > div {
        float: left;
    }
    .repository .user .head-img {
        width: 54px;
        height: 54px;
        margin-right: 10px;
        border-radius: 4px;
        overflow: hidden;
    }
    .repository .user .head-img img {
        height: 100%;
        width: 100%;
    }
    .repository .user .user-info p.user-name {
        margin-top: 2px;
    }
    .repository .user .user-info p.user-name a {
        line-height: 24px;
        color: #586069;
    } 
    .repository .user .user-info p.user-name span.realname {
        font-size: 15px;
        color: #24292e;
    }    
    .repository .user .user-info p.user-name span.nickname {
        margin-left: 6px;
        font-size: 13px;
    }
    .repository .user .user-info p.user-name span:hover {
        color: #0366d6;
    }
    .repository .user .user-info p.other {
        margin-top: 4px;
        font-size: 12px;
        color: #586069;
    }
    .repository .user .btn {
        float: right;
    }
    .repository .user .btn button {
        padding: 6px 10px;
        background-color: #eff3f6;
        color: #24292e;
    }
    .repository .user .btn button:hover {
        background-color: #e6ebf1;
        border-color: rgba(27,31,35,0.35);
    }
</style>
