import Vue from 'vue';
import Router from 'uni-simple-router';
Vue.use(Router);
const router = new Router({
		 h5:{
			vueRouterDev:true,  //完全使用vue-router开发 默认 false  
		  },
	routes:[
		{
			path:"/pages/collection/collection",
			name:"collection",
			component:()=>import('@/pages/collection/collection'),
			
		},
		{
			path:"/pages/message/message",
			name:"message",
			component:()=>import('@/pages/message/message'),
			
		},
		{
			path:"/pages/home/home",
			name:"home",
			component:()=>import('@/pages/home/home'),
		},
			{
				path:"/pages/personal/personal",
				name:"personal",
				component:()=>import('@/pages/personal/personal'),
			}
		
	]
})
export default router;