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
    </div>
</template>
<script>
export default {
    data() {
        return {
            input: '',
            sortItem: ['Recently starred', 'Recently active', 'Most stars'],
            sortSelect: 'Recently starred',
            stars: null,
            message: 'starred repositories'
        }
    },
     created() {
        this.$emit('select', 3);
    }
}
</script>

<style>
    .stars .search-box .el-input {
        margin-right: 24px;
    }
    
</style>
