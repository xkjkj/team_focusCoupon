<template>
	<view>
	 <uni-view data-v-72ed984f="" class="bg-img bg-mask flex align-center" style="background-image: url(static/y.png); height: 207px;">
		
		<uni-view data-v-72ed984f="" class="padding-xl text-white">
			<navigator url="/pages/task/task" >
			  <uni-text data-v-85e0946e="" class="cuIcon-profile" style="font-size: 28px;"></uni-text>
			</navigator>
				
			
			<uni-view data-v-72ed984f="" class="padding-xs text-xxl text-white">
				{{this.$store.state.nickname}}
			</uni-view>
			
			<uni-view data-v-32f3237a="" class="cu-avatar round lg margin-left" style="background-image: url(&quot;https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1692870414,3595671481&fm=26&gp=0.jpg&quot;);">
				<uni-view data-v-32f3237a="" class="cu-tag badge cuIcon-male bg-blue">
				</uni-view>
			</uni-view>
			<uni-view data-v-72ed984f="" class="padding-xs text-lg">
				你好，开始自律的一天吧.
			</uni-view>
			
			<uni-view data-v-85e0946e="" class="cu-capsule">
				<uni-view data-v-85e0946e="" class="cu-tag bg-gold">
					<uni-text data-v-85e0946e="" class="cuIcon-coin">
						<span></span>
					</uni-text>
				</uni-view>
				<uni-view data-v-85e0946e="" class="cu-tag line-white">
					{{this.$store.state.coin}}
				</uni-view>
			</uni-view>
			<uni-view data-v-85e0946e="" class="cu-capsule">
				<uni-view data-v-85e0946e="" class="cu-tag bg-gold">
					<uni-text data-v-85e0946e="" class="cuIcon-time">
						<span></span>
					</uni-text>
				</uni-view>
				<uni-view data-v-85e0946e="" class="cu-tag line-white">
					{{this.$store.state.totaltime}}s
				</uni-view>
			</uni-view>
		</uni-view>
	 </uni-view>
	 
	 
		<navigator url="/pages/ticket/ticket" >
		  <button>优惠券</button>
		</navigator>
		
						<view class="flex-sub text-center">
							<view class="solid-bottom text-sl padding">
							</view>
							<text class=" cuIcon-lightfill text-yellow"></text>
							<view class="padding">{{this.$store.state.profile}}</view>
						</view>
	</view>
</template>

<script>
	
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
