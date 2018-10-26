<template>
    <div class="overview">
        <h2>
            <span>Popular repositories</span>
            <a href="">Customize your pinned repositories</a>
        </h2>
        <div class="repository-list">
            <div class="repository-box" v-for="(repository, key) in repositories" :key="key">
                <p class="title"><a href="">{{repository.title}}</a></p>
                <p class="des">{{repository.des}}</p>
                <p class="category">
                    <type :type="repository.category"></type>
                </p>
            </div>
        </div>
        <div class="contribution">
            <div>
                <span>Contribution activity</span>
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        Jump to<i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>First repository</el-dropdown-item>
                        <el-dropdown-item>Joined GitHub</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <a href="" class="year-btn">{{year}}</a>
            </div>
            <div class="timeline-box">
                <div class="timeline-title">
                    <span class="month">{{month}}</span>{{year}}
                </div>
                <div class="timeline-cnt" v-for="(value, key) in timeline" :key="key">
                    <div v-if="value.type === 'commits'">
                        <span class="discussion-item-icon"><svg class="octicon octicon-repo-push" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 3H3V2h1v1zM3 5h1V4H3v1zm4 0L4 9h2v7h2V9h2L7 5zm4-5H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h4v-1H1v-2h4v-1H2V1h9.02L11 10H9v1h2v2H9v1h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z"></path></svg></span>
                        <p class="cnt-title">
                            Created {{value.comNum}} commits in {{value.repoNum}} repositories
                            <span class="right-ico" aria-label="Collapse">
                                <svg class="octicon octicon-fold" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 9l3 3H8v3H6v-3H4l3-3zm3-6H8V0H6v3H4l3 3 3-3zm4 2c0-.55-.45-1-1-1h-2.5l-1 1h3l-2 2h-7l-2-2h3l-1-1H1c-.55 0-1 .45-1 1l2.5 2.5L0 10c0 .55.45 1 1 1h2.5l1-1h-3l2-2h7l2 2h-3l1 1H13c.55 0 1-.45 1-1l-2.5-2.5L14 5z"></path></svg>
                            </span>
                        </p>
                        <ul>
                            <li v-for="(dataLi, key) in value.data" :key="key">
                                <a class="url" href="">{{dataLi.url}}</a>
                                <a class="commit" href="">{{dataLi.num}} commits</a>
                            </li>
                        </ul>
                    </div>
                    <div v-if="value.type === 'repository'">
                        <span class="discussion-item-icon"><svg class="octicon octicon-repo-push" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 3H3V2h1v1zM3 5h1V4H3v1zm4 0L4 9h2v7h2V9h2L7 5zm4-5H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h4v-1H1v-2h4v-1H2V1h9.02L11 10H9v1h2v2H9v1h2c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1z"></path></svg></span>
                        <p class="cnt-title">
                            Created {{value.num}} repository
                            <span class="right-ico" aria-label="Collapse">
                                <svg class="octicon octicon-fold" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 9l3 3H8v3H6v-3H4l3-3zm3-6H8V0H6v3H4l3 3 3-3zm4 2c0-.55-.45-1-1-1h-2.5l-1 1h3l-2 2h-7l-2-2h3l-1-1H1c-.55 0-1 .45-1 1l2.5 2.5L0 10c0 .55.45 1 1 1h2.5l1-1h-3l2-2h7l2 2h-3l1 1H13c.55 0 1-.45 1-1l-2.5-2.5L14 5z"></path></svg>
                            </span>
                        </p>
                        <ul>
                            <li v-for="(dataLi, key) in value.data" :key="key">
                                <a class="url" href="">
                                    <span class="repo-icon">
                                        <svg viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
                                    </span>
                                    {{dataLi.url}}
                                </a>
                                <type :type="dataLi.type"></type>                                
                            </li>
                        </ul>
                    </div>
                </div>
                <el-button class="more">Show more activity</el-button>                
            </div>
        </div>
    </div>
</template>
<script>

import '../../static/css/overview.css';

export default {
    data() {
        return {
            repositories: [],
            year: '2018',
            month: 'October',
            timeline: [
                {
                    type: 'commits',
                    comNum: 6,
                    repoNum: 2,
                    data: [
                        { url: '404error123/zixun', num: 4 },
                        { url: '404error123/QQmusic', num: 2 }
                    ]
                },
                {
                    type: 'repository',
                    comNum: 1,
                    data: [
                        { url: '404error123/zixun', type: 'js' }
                    ]
                },
                {
                    type: 'repository',
                    comNum: 1,
                    data: [
                        { url: '404error123/QQmusic', type: 'html' }
                    ]
                }
            ]
        }
    },
    created() {
        this.$axios.get('http://127.0.0.1:5000/overview').then((res) => {
            this.repositories = JSON.parse(res.data.data);
        })
    }
}
</script>
