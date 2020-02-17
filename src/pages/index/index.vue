<template>
	<view class="app_wrapper">
		<div class="content_wrapper">
		<Home v-if="selectedIndex==0"></Home>
		<Collection v-if="selectedIndex==1"></Collection>
		<Message v-if="selectedIndex==3"></Message>
		<Personal v-if="selectedIndex==4"></Personal>
		</div>
		<div class="tabbar_wrapper">
		<div v-for="(item,index) in paths" :key="index" 
		:class="['tabbar_item',index==2?'special_icon':'']" 
		@tap="handleTap(item,index)">
			<div>
				<image :src="selectedIndex==index?item.iconSelectedPath:item.iconPath"></image>	
			</div>
		</div>
		</div>
	</view>
</template>

<script>
	import Home from '../home/home.vue'
	import Collection from '../collection/collection.vue'
	import Message from '../message/message.vue'
	import Personal from '../personal/personal.vue'
	export default {
		components:{
			Home,
			Collection,
			Message,
			Personal
		},
		data() {
			return {
				selectedIndex:0,
				//组件式导航的信息
				paths:[
					{
						path:"/pages/home/home",
						name:"home",
						iconPath:'../../static/icon/home.png',
						iconSelectedPath:"../../static/icon/home_selected.png"
					},
					{
						path:"/pages/collection/collection",
						name:"collection",
						iconPath:'../../static/icon/collection.png',
						iconSelectedPath:"../../static/icon/collection_selected.png"
					},
					{
						path:"/pages/photo/photo",
						name:"photo",
						iconPath:'../../static/icon/photoicon.png',
						iconSelectedPath:"../../static/icon/photoicon.png"
					},
					{
						path:"/pages/message/message",
						name:"message",
						iconPath:'../../static/icon/message.png',
						iconSelectedPath:"../../static/icon/message_selected.png"
					},
					{
						path:"/pages/personal/personal",
						name:"personal",
						iconPath:'../../static/icon/personal.png',
						iconSelectedPath:"../../static/icon/personal_selected.png"
					},
				]
			}
		},
		methods: {
			handleTap(item,index){
				this.selectedIndex = index;
				let {name} = item;
				this.$Router.push({
					name
				})
			}
		}
	}
</script>

<style lang="stylus">
.app_wrapper
	display flex;
	flex-direction column
	justify-content space-between
.tabbar_wrapper
	display flex;
	position fixed;
	bottom 0;
	width 100%;
	align-items center;
	justify-content space-around;
	border-top 1rpx solid #AAAAAA
	padding 20upx 0
	.tabbar_item
		&>div
			display flex;
			flex-direction column;
			align-items center;
			image
				width 50upx
				height 50upx
.special_icon
		image
			transform scale(3) translate(0,-30%);
</style>
