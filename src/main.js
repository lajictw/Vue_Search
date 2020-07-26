// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 布局使用element-ui
import ElementUI from 'element-ui';
// 引力图使用echarts
import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
