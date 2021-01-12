<template>
    <div class="content">
        <div class="search">
            反馈查询号：<el-input placeholder="请输入您的反馈查询号"></el-input>
            <el-button><i class="el-icon-search"></i>搜索</el-button>
        </div>
        <div class="table">
            <!-- <el-table :data="tableData" border style="width:100%">
                <el-table-column prop="number" label="反馈查询号" width="180" class="t-header"></el-table-column>
                <el-table-column prop="desc" label="问题表述" width="320" class="t-header"></el-table-column>
                <el-table-column prop="date" label="日期" width="180" class="t-header"></el-table-column>
            </el-table> -->
        </div>
    </div>
</template>
<script>
export default {
    name: "Examine",
    data() {
        return {
            tableData: [
                {
                    number: '122333',
                    desc: '邮箱错误',
                    date: '2021-01-11'
                },
                {
                    number: '33333',
                    desc: '邮箱错误,图片显示不完整',
                    date: '2020-12-11'
                },
                 {
                    number: '122333',
                    desc: '邮箱错误',
                    date: '2021-01-11'
                },
                {
                    number: '33333',
                    desc: '邮箱错误,图片显示不完整',
                    date: '2020-12-11'
                },
                 {
                    number: '122333',
                    desc: '邮箱错误',
                    date: '2021-01-11'
                },
                {
                    number: '33333',
                    desc: '邮箱错误,图片显示不完整',
                    date: '2020-12-11'
                }
            ]
        }
    },
    methods: {
       
    }
};
</script>
<style lang="scss" scoped>
@import url('../assets/scss/main.scss');
</style>