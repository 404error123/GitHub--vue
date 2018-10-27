<template>
    <div class="stars">
        <div class="search-box">
            <el-input v-model="input" placeholder="Find a repository..."></el-input>
            <el-dropdown class="type" trigger="click">
                <el-button type="primary">
                    Sort: <span class="word">{{sortSelect}}<i class="el-icon-caret-bottom"></i></span>
                </el-button>
                <el-dropdown-menu class="type-item" slot="dropdown">
                    <el-dropdown-item v-for="(type, key) in sortItem" :key="key" @click.native="sortSelect = type">{{type}}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <empty v-if="!stars" :message="message"></empty>
        <div class="star-box pro-box" v-for="(star, index) in stars" :key="index" v-else>
            <h2><a href="">{{star.name}}</a></h2>
            <p class="des">{{star.des}}</p>
            <p class="type-time">
                <type :type="star.type"></type>
                <a href="" class="xin">
                    <svg aria-label="star" class="octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>{{star.num}}
                </a>
                <span class="time">Updated {{star.time}} days ago</span>
            </p>
            <div class="rt-btn">
                <el-button><svg aria-label="star" class="octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg>Star</el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            input: '',
            sortItem: ['Recently starred', 'Recently active', 'Most stars'],
            sortSelect: 'Recently starred',
            // stars: null,
            stars: [
                { name: '404error / MyPage', des: '我的个人主页', type: 'css', num:100, time: 5 },
            ],
            message: 'starred repositories'
        }
    }
}
</script>

<style>
    .stars .search-box .el-input {
        margin-right: 24px;
    }
    .stars .xin {
        margin-left: 20px;
    }
    .stars .xin:hover {
        color: #0366d6;
    } 
    .stars svg.octicon-star {
        margin-bottom: -3px;
        fill: currentColor;
    }
    .stars .star-box {
        position: relative;
    }
    .stars .star-box .rt-btn {
        position: absolute;
        top: 24px;
        right: 0;
    }
</style>
