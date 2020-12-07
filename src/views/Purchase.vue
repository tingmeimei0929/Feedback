<template>
    <div class="content">
        <el-steps :active="active" align-center finish-status="success" direction="vertical" style="float:left; width:300px">
            <el-step title="步骤1" description="是否登录，如果没有登录，请先点击登录"></el-step>
            <el-step title="步骤2" description="在网页端或安卓APP内，可使用支付宝和微信完成支付"></el-step>
            <el-step title="步骤3" description=""></el-step>
        </el-steps>
        <div class="reveal" style="float:left;">
            <div v-if="active==1" class="step">
            登录页
            </div>
            <div v-if="active==2" class="step">
                详情页
            </div>
            <div v-if="active==3" class="step">
                问题页
            </div>
            <el-button @click="next" v-if="active<3">下一步</el-button>
            <el-button @click="pre" v-if="active>1">上一步</el-button>
        </div>
    </div>
</template>
<script>
export default {
    name: "Purchase",
    data() {
        return {
            active: 1
        }
    },
    methods: {
        next() {
            if (this.active++ > 2){
                this.active = 1;
            }
        },
        pre() {
            if (this.active-- < 2) {
                this.active = 1;
            }
        }
    }
};
</script>
<style lang="scss" scoped>
@import url('../assets/scss/main.scss');
</style>