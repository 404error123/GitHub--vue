<template>
    <header>
        <div class="header-cnt clearfix">
            <div class="logo">
                <a href="">
                    <svg class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" height="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
                </a>
            </div>
            <div class="search">
                <el-autocomplete
                popper-class="my-autocomplete"
                v-model="state3"
                :fetch-suggestions="querySearch"
                placeholder="Search or jump to..."
                @select="handleSelect">
                    <i
                        class="el-icon-edit el-input__icon"
                        slot="suffix">
                    </i>
                    <template slot-scope="{ item }">
                        <div class="name">{{ item }}</div>
                    </template>
                </el-autocomplete>
            </div>
            <div class="hd-nav">
                <ul>
                    <li><a href="">Pull requests</a></li>
                    <li><a href="">Issues</a></li>
                    <li><a href="">Marketplace</a></li>
                    <li><a href="">Explore</a></li>
                </ul>
            </div>
            <div class="sign-in">
                <ul>
                    <li>
                        <a href="" :class=" { bell: true, mess: newMess }">
                            <i class="el-icon-bell"></i>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;"> 
                            <el-dropdown :hide-on-click="false" trigger="click">
                                <span class="el-dropdown-link">
                                    <i class="el-icon-plus"></i>
                                    <i class="el-icon-caret-bottom"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item>New repository</el-dropdown-item>                                    
                                    <el-dropdown-item>Import repository</el-dropdown-item>
                                    <el-dropdown-item>New gist</el-dropdown-item>
                                    <el-dropdown-item>New organization</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>         
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <el-dropdown :hide-on-click="false" trigger="click">
                                <span class="el-dropdown-link">
                                    <span class="head-ico">
                                        <img :src="user.imageUrl" alt="">
                                    </span>
                                    <i class="el-icon-caret-bottom"></i>   
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item class="user-name">
                                        Signed in as
                                        <h4>{{user.nickname}}</h4>
                                    </el-dropdown-item>                                    
                                    <el-dropdown-item divided>Your profile</el-dropdown-item>
                                    <el-dropdown-item>Your repositories</el-dropdown-item>
                                    <el-dropdown-item>Your stars</el-dropdown-item>
                                    <el-dropdown-item>Your gists</el-dropdown-item>
                                    <el-dropdown-item divided>Help</el-dropdown-item>
                                    <el-dropdown-item>Settings</el-dropdown-item>
                                    <el-dropdown-item>Sign out</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>                    
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  data() {
    return {
      state3: "",
      text: [],
      newMess: false,
      searchText: ''
    };
  },
  props: ['user'],
  methods: {
    querySearch(queryString, cb) {
      var text = this.text;
      var results = queryString
        ? text.filter(this.createFilter(queryString))
        : text;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return text => {
        return text.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
      };
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  mounted() {
    this.text = ["abcDemo", "Test"];
  }
};
</script>

<style>

header {
  padding: 12px 0;
  height: 36px;
  background-color: #eee;
  color: rgba(255, 255, 255, 0.75);
  background-color: #24292e;
}
header .header-cnt {
  width: 980px;
  margin: 0 auto;
}
header .header-cnt > div {
  float: left;
}
header .header-cnt .logo {
  width: 32px;
  height: 32px;
}
header .header-cnt .logo a {
  display: block;
  height: 100%;
  border-radius: 50%;
  background: #eee;
}
header .header-cnt .logo a .octicon-mark-github {
  background-color: #24292e;
  fill: #fff;
}
header .header-cnt .search {
  height: 30px;
  width: 300px;
  padding: 3px 0;
  margin: 0 10px;
}
header .header-cnt .search .el-autocomplete {
  width: 100%;
  height: 100%;
}
header .header-cnt .search .el-autocomplete input {
  height: 30px;
  line-height: 30px;
  border: 0;
  background-color: #3f4448;
}
header .header-cnt .search .el-autocomplete input:focus {
  background-color: #fff;
}
header .header-cnt .search .el-autocomplete i {
  line-height: 30px;
}
header .header-cnt li {
  float: left;
  line-height: 36px;
}
header .header-cnt .hd-nav li a {
  padding: 0 8px;
  color: #fff;
}
header .header-cnt li a:hover {
  color: rgba(255, 255, 255, 0.75);
}
header .header-cnt .sign-in {
  float: right;
}
header .header-cnt .sign-in a {
  padding: 0 4px;
  color: #fff;
  font-size: 18px;
}
header .header-cnt .sign-in a.bell {
    position: relative;
}
header .header-cnt .sign-in a.bell.mess::after {
    position: absolute;
    top: 0px;
    right: 0px;
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #e34c26;
}
header .header-cnt .sign-in li {
    margin: 0 6px;
}
header .header-cnt .sign-in a i.el-icon-caret-bottom {
    font-size: 12px;
}
header .header-cnt .sign-in a .el-dropdown-link i {
    color: #fff;
}
header .header-cnt .sign-in a span.head-ico {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: #eee;
    vertical-align: middle;
    border-radius: 2px;
    overflow: hidden;
}
header .header-cnt .sign-in a span.head-ico img {
    width: 100%;
    height: 100%;
}
.el-dropdown-menu li {
    padding-right: 30px;
}
.el-dropdown-menu .user-name {
    line-height: 22px;
}
.el-dropdown-menu .user-name:hover {
    background: #fff;
    color: #606266;
}
</style>
