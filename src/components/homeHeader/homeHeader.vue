<template>
	<view>
		<div class="homeHeader_wrapper">
			<div class="weather_wrapper">
				<div>
					<image src="../../static/cloud/manyCloud.png"></image>
					<text>多云 17℃</text>
				</div>
				<div>
					<text>02月2日</text>
					<text>农历一月初九</text>
				</div>
			</div>
			<div class="position_wrapper">
				<div>
					<image src="../../static/icon/position.png"></image>
					<text>深圳</text>
				</div>
				<div>
					龙岗区随和达到
				</div>
			</div>
			<div class="function_list">
				<div v-for="(item,index) in function_list" :key="index">
					<div>
						<image :src="item.iconPath" mode=""></image>
						<text>{{item.text}}</text>
					</div>
				</div>
			</div>
		</div>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				function_list:[
					{
						path:"",
						text:"发问答",
						iconPath:"../../static/function/problem.png"
					},
					{
						path:"",
						text:"病虫害",
						iconPath:"../../static/function/pest.png"
					},
					{
						path:"",
						text:"农资店",
						iconPath:"../../static/function/shop.png"
					},
					{
						path:"",
						text:"专家咨询",
						iconPath:"../../static/function/expert.png"
					},
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="stylus">
.homeHeader_wrapper
	height 300upx;
	background-color #01CF9E
	padding 50upx 50upx
	color #F5F5F5
	display flex
	justify-content space-between
	flex-wrap wrap
	font-family 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
	.weather_wrapper
		&>div:nth-child(1)
			font-size 50upx
			display flex
			align-items center
			image
				width 100upx;
				height 100upx;
	.position_wrapper
		&>div:nth-child(1)
			font-size 50rpx
			display flex
			align-items center
			image
				width 60upx;
				height 60upx;
	.function_list
		margin-top 50upx;
		padding 50upx
		width 100%;
		display flex
		justify-content space-between
		background-color #F5F5F5
		color black;
		border 1px solid #AAAAAA
		border-radius 20rpx;
		div
			div
				display flex
				flex-direction column
				align-items center
				image
					width 60rpx;
					height 60rpx;
</style>
