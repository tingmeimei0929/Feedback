import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAxios, axios)

// 引入scss文件
import './assets/scss/header.scss'
import './assets/scss/main.scss'
import './assets/scss/common.scss'
import './assets/scss/footer.scss'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
