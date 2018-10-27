<template>
    <div class="storage">
        <div class="search-box">
            <el-input v-model="input" placeholder="Find a repository..."></el-input>
            <div class="button-box">
                <el-dropdown class="type" trigger="click">
                    <el-button type="primary">
                        Type: <span class="word">{{typeSelect}}<i class="el-icon-caret-bottom"></i></span>
                    </el-button>
                    <el-dropdown-menu class="type-item" slot="dropdown">
                        <el-dropdown-item v-for="(type, key) in typeItem" :key="key" @click.native="typeSelect = type">{{type}}</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown class="language" trigger="click">
                    <el-button type="primary">
                        Language: <span class="word">{{langSelect}}<i class="el-icon-caret-bottom"></i></span>
                    </el-button>
                    <el-dropdown-menu class="language-item" slot="dropdown">
                        <el-dropdown-item v-for="(lang, key) in langItem" :key="key" @click.native="langSelect = lang">{{lang}}</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-button class="new" type="success"><i class="el-icon-document"></i>New</el-button>
            </div>
        </div>

        <empty v-if="!storage" :message="message"></empty>

        <div class="ck-box pro-box" v-for="(sto, key) in storage" :key="key" v-else>
            <h2><a href="">{{sto.name}}</a></h2>
            <p class="des">{{sto.des}}</p>
            <p class="type-time">
                <type :type="sto.type"></type>
                <span class="time">Updated {{sto.time}} days ago</span>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            input: '',           
            langItem: ['All', 'CSS', 'HTML', 'Javascript'],
            typeItem: ['All', 'Public', 'Private', 'Sources', 'Forks'],
            langSelect: 'All',
            typeSelect: 'All',
            storage: [
                { name: 'MyPage', des: '我的个人主页', type: 'css', time: 5 },
                { name: 'Demo', des: '我的个人主页', type: 'js', time: 8 },
                { name: 'Test', des: '我的个人主页', type: 'html', time: 1 }                
            ],
            message: 'repositories'            
        }
    }
}
</script>
<style>
   
    .storage .search-box .el-dropdown.type {
        margin-left: 24px;
    }
    .storage .search-box .el-dropdown.language {
        margin-right: 15px;
    }
    .storage .search-box .el-button {
        padding: 9px 10px;
    }
    .storage .search-box .el-button.new {
        background-color: #28a745;
    }
    .storage .search-box .el-button.new:hover {
        background-color: #15812e;
    }
    .storage .search-box .el-button.new i {
        font-size: 16px;
        margin-right: 4px;
        margin-top: -2px;
    }
    
</style>
