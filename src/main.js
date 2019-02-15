import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.use(ElementUI);
Vue.prototype.$axios=axios;
Vue.config.productionTip = false

/*创建全局过滤器 */
//年月日
Vue.filters('date',(val)=>{
  var date=new Date(val);
  var year=date.getFullYear();
  var month=date.getMonth()+1;
  month=month>9?month:'0'+month;
  var day=date.getDate();
  day=day>9?day:'0'+day;
  return year+"-"+month+"-"+day;
})
//年月日+时分秒
Vue.filters('datetime',(val)=>{
  var date=new Date(val);
  var year=date.getFullYear();
  var month=date.getMonth()+1;
  month=month>9?month:'0'+month;
  var day=date.getDate();
  day=day>9?day:'0'+day;
  var hour=date.getHours();
  hour=hour>9?hour:'0'+hour;
  var minute=date.getMinutes();
  minute=minute>9?minute:'0'+minute;
  var second=date.getSeconds();
  second=second>9?second:'0'+second;
  return year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second;
})
//价格
Vue.filters('currency',(val)=>{
  return "￥"+val.toFixed(2)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
