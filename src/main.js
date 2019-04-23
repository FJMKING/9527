import Vue from 'vue'
import App from './App'
import imgUrl from './utils/netAddress'

Vue.config.productionTip = false
Vue.prototype.imgUrl = imgUrl
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
