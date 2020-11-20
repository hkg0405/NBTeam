import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
console.log(66666);
console.log("文件修改")
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
