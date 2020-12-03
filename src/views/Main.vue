<template>
    <div class="main">
        <navHeader></navHeader>
            <div class="container">
                <div class="sort">
                    <ul>
                        <li>
                            <router-link to="/NoPurchase">未购买，如何购买</router-link>
                        </li>
                        <li>
                            <router-link to="/Purchase">已购买，如何使用</router-link>
                        </li>
                        <li>
                            <router-link to="/Message">请上传的您的问题</router-link>
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
     }
};
</script>
  
<style lang="scss" scoped>
@import url('../assets/scss/main.scss');
</style>