<template>
   <div class="content">
        <h2>购买步骤</h2>
        <el-steps :active="active" align-center finish-status="success" direction="vertical">
            <el-step title="步骤1" description="是否登录，如果没有登录，请先点击登录"></el-step>
            <el-step title="步骤2" description="在网页端或安卓APP内，可使用支付宝和微信完成支付"></el-step>
            <el-step title="步骤3" description=""></el-step>
        </el-steps>
        <el-button @click="next">下一步</el-button>
        <div v-show="step1" class="step">
            登录页
        </div>
        <div v-show="step2" class="step"></div>
        <div v-show="step3" class="step"></div>
   </div>
</template>
    
<script>
export default {
    name: "NoPurchase",
    data() {
        return {
        active: 0
        };
    },
    methods: {
        next() {
            if (this.active++ > 2) {
                this.active = 0;
            }
        },
        stepFunction() {
            if (this.active++ > 3) {
                this.active = 1;
                this.step++;
                switch(this.step){
                    case 1: 
                        this.step1 = true;
                        this.step2 = false;
                        this.step3 = false;
                        break;
                    case 2: 
                        this.step1 = false;
                        this.step2 = true;
                        this.step3 = false;
                        break;
                    case 3: 
                        this.step1 = false;
                        this.step2 = false;
                        this.step3 = true;
                        break;
                }
            }
        }
    }
};
</script>
  
<style lang="scss" scoped>
@import url('../assets/scss/main.scss'); 
</style>