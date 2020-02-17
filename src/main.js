import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router';
import {RouterMount} from 'uni-simple-router'
import routerLink from '../node_modules/uni-simple-router/component/router-link.vue'
Vue.component('router-link',routerLink)
Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}



App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
// RouterMount(app,'app');
app.$mount()
