<template>
    <div class="main">
        <navHeader></navHeader>
            <div class="container middle">
                <div class="banner">
                    <div class="bgColor">
                        <div class="images">
                        </div>
                        <div class="words">
                            <p class="strong">FT中文网欢迎您！</p>
                            <p>希望全球视野的FT中文网，能够带您站在高海拔的地方俯瞰世界，引发您的思考，从不同的角度看到不一样的事物，见他人之未见！</p>
                        </div>
                        <br style='clear:both'/>
                    </div>
                </div>
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
                    name: '新建问题工单',
                    path: '/Message'
                },
                {
                    name: '我的工单',
                    path: '/Examine'
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