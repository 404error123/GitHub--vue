# vue + element + node.js 仿制 GitHub

### 使用技术

* vue、vue-router、vuex、axios
* element 组件库
* webpack 搭建项目框架
* node.js + express + MongoDB 
* session、localStorage

### 实现功能
* 页面的搭建
* `vue-router`实现跳转
* 登录功能的实现
    * `session`保持登录，返回`cookie`保存`sessionID`
    * `localStorage`保存登录后用户基本信息
    * `vue-router`守卫验证是否处于登录状态
    * `axios`拦截器拦截`response`，处理后台对登录状态验证的结果，如果后台验证为没有登录则跳转到登录页面
    * 后端请求拦截验证登录状态，如果验证不通过，则返回信息，让前端去做跳转，跳转到登录页
* `vuex`把从后台获取的用户信息，存储在`localStorage`；并设置`isLogin`和用户信息，实现不同组件都能使用用户信息
* `node + express`搭建数据服务器，并设置允许跨域行为
* `MongoDB`存储数据