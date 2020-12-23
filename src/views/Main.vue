<template>
    <div class="main">
        <navHeader></navHeader>
            <div class="container middle">
                <div class="sort">
                    <ul class="sortName">
                        <li v-for="(item, index) in tagList" :key="index" @click="gotoAddress({path: item.path}, index)" :class="{active: activeIndex == index }">{{ item.name }}</li>
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
            tagList: [
                {
                    name: '未购买，如何购买',
                    path: '/NoPurchase'
                },
                {
                    name: '已购买，如何使用',
                    path: '/Purchase'
                },
                {
                    name: '请上传的您的问题',
                    path: '/Message'
                }
            ],
            activeIndex: 0,
        };
    },
    components: {
        navHeader,
        navFooter
    },
    methods:{
       gotoAddress(path, index) {
           this.$router.push(path);
           this.activeIndex = index;
       }
    }
};
</script>

<style lang="scss" scoped>
@import url('../assets/scss/main.scss');
</style>