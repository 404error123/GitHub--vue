<template>
    <aside>
        <el-tooltip class="item" effect="dark" content="Change your avatar" placement="bottom" :open-delay="delay">
            <div class="user-photo">
                <el-upload
                class="avatar-uploader"
                :action="imgPostUrl"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                    <img v-if="user.imageUrl" :src="user.imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </div>
        </el-tooltip>
        <p class="user-name">{{user.username}}</p>
        <p class="nick-name">{{user.nickname}}</p>
        <div class="add-info">
            <button class="btn" @click="isShow = true" v-if="!isShow">Add a bio</button>
            <div class="add-hid-box" v-if="isShow">
                <textarea v-model="text"></textarea>
                <div>
                    <el-button type="success" @click="addMess(), clear()">Save</el-button>                    
                    <el-button @click="clear">Cancel</el-button>
                </div>
            </div>
        </div>
        <div class="website">
            <i class="el-icon-share"></i>
            <a :href="user.website" target="_blank">{{user.website}}</a>
        </div>
    </aside>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            isShow: false,
            text: "",
            delay: 300,
            imgPostUrl: 'http://120.78.164.247:8099/manager/file/upload'
        };
    },
    computed: {
        ...mapState(['user'])
    },
    methods: {
        handleAvatarSuccess(res, file) {
            var url = "http://39.108.81.60:8888/" + res.data.groupname +"/"+ res.data.id;
            this.user.imageUrl = url;
            this.$store.commit('setLogin', this.user)
        },
        beforeAvatarUpload(file) {
            const isJPG =
                file.type === "image/jpeg" || file.type === "image/png";
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG) {
                this.$message.error("上传头像图片只能是 JPG、PNG 格式!");
            }
            if (!isLt2M) {
                this.$message.error("上传头像图片大小不能超过 2MB!");
            }
            return isJPG && isLt2M;
        },
        addMess() {
            var cnt = this.text.trim();
            if (cnt) {
                console.log(cnt);
            }
        },
        clear() {
            this.text = "";
            this.isShow = false;
        }
    }
};
</script>

<style>
aside {
    float: left;
    width: 230px;
}
aside .user-photo {
    height: 230px;
    border-radius: 5px;
    overflow: hidden;
}
aside .user-photo .el-upload,
aside .user-photo .avatar-uploader {
    height: 230px;
}
aside .user-photo img {
    width: 230px;
    height: 230px;
}
aside .user-name {
    margin-top: 16px;
    line-height: 30px;
    font-weight: bold;
    font-size: 24px;
    color: #333;
}
aside .nick-name {
    margin-bottom: 16px;
    line-height: 24px;
    font-size: 20px;
    font-weight: lighter;
    color: #666;
}
aside .add-info {
    margin-bottom: 16px;
}
aside .add-info button.btn {
    height: 34px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid rgba(27, 31, 35, 0.2);
    background-color: #eff3f6;
    font-weight: bold;
    color: #333;
    cursor: pointer;
}
aside .add-info button.btn:hover {
    background-color: #e6ebf1;
}
aside .add-info .add-hid-box textarea {
    width: 216px;
    height: 100px;
    padding: 6px;
    margin-bottom: 8px;
    border: 1px solid #ccc;
    box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);
}
aside .add-info .add-hid-box button {
    height: 28px;
    padding: 0 10px;
    font-size: 12px;
}
aside .website {
    padding: 16px 0;
    border-top: 1px solid #eaecef;
}
aside .website a {
    padding-left: 4px;
    color: #0366d6;
}
aside .website a:hover {
    text-decoration: underline;
}
</style>