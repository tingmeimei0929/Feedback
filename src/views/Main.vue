<template>
    <div class="main">
        <navHeader></navHeader>
            <div class="container">
                <div class="sort">
                    <ul>
                        <li @click="goNoPurchase">
                            <a>未购买，如何购买</a>
                        </li>
                        <li @click="goPurchase">
                            <a>已购买，如何使用</a>
                        </li>
                        <li @click="goMessage">
                            <a>请上传的您的问题</a>
                        </li>
                    </ul>
                </div>
                <div class="main-content">
                    <router-view></router-view>
                </div>
            </div>
        <navFooter></navFooter>
    </div>
</template>

<script>
import navHeader from '../components/Header'
import navFooter from '../components/Footer'
export default {
    name: "Main",
    data() {
        return {
        
        };
    },
    components: {
        navHeader,
        navFooter
    },
    methods:{
        goNoPurchase() {
            this.$router.push({
                path: '/NoPurchase'
            })
        },
        goPurchase() {
            this.$router.push({
                path: '/Purchase'
            })
        },
        goMessage() {
            this.$router.push({
                path: '/Message'
            })
        }

    }
};
</script>

<style lang="scss" scoped>
@import url('../assets/scss/main.scss');
</style>