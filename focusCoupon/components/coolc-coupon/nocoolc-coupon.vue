<template>
    <view class="coupon-item">
		<view class="coupon-money">
			<view class="nick" v-if="!types">{{item.seller_name}}使用</view>
			<view class="layof" :style="{color:theme}">￥{{item.money}}</view>
			
			<view v-if="!types">
				<view class="tit">券号：{{item.ticket}}</view>
				<view class="demand">{{item.title}}</view>
			</view>
		</view>	
		<view>
			<text class="cuIcon-more"></text>
		</view>
			<view>
				<text class="cuIcon-right"></text>
			</view>
			<text class="cu-bar">拥有个数：{{item.num}}</text>
    </view>
</template>

<script>
export default {
	components:{

	},
	data() {
		return {
			
		}
	},
	props:{
		item:{
			type: Object
		},
		types:{
			type: String,
			default: ''
		},
		theme:{
			type: String,
			default: '#ff9000'
		},
		solid:{
			type: String,
			default: '#ffffff'
		},
		color:{
			type: String,
			default: '#ff9000'
		},
	},
	methods: {
		changeCoin:function()
		{
			this.$store.state.coin = this.$store.state.coin-50;
			//this.item.state++;
		}
	}
}
</script>

<style lang='scss'>
.coupon-item {
	width:100%; height:auto; display:table; border-radius:10upx; 
	margin-top:22upx; border:1px solid #eeeeee; position:relative;
	background: lightgrey;  // 右边的颜色
	border-radius: 10px;
	color: #fff;
	.coupon-money {
		background: pink; // 左边的颜色
		width:465upx; height:auto; display:table; float:left; padding:26upx 0 26upx 20upx; border-style:none dotted none none; border-color:#eeeeee;
		.nick { width:100%; height:50upx; line-height:50upx; font-size:$font-sm; color:$font-color-999; color: #fff;}
		.tit { width:100%; height:50upx; line-height:50upx; font-size:$font-sm; color:$font-color-999; color: #fff;}
		.demand { width:100%; height:30upx; line-height:30upx; font-size:$font-sm; color:$font-color-999; color: #fff;}
		
		.layof { width:100%; height:48upx; line-height:30upx; font-size:44upx; color:#ff9000; font-weight:bold; }
		.end_time { width:100%; height:30upx; line-height:30upx; font-size:$font-sm; color:$font-color-999; }
	}
	.get-btn { width:146upx; height:52upx; line-height:50upx; position:absolute; top:50%; right:26upx; margin-top:-26upx; text-align:center; border-radius:60upx; color:#ff9000; border:1px solid #ff9000; font-size:$font-sm; float:right; }
}
.coupon-item:after { width:40upx; height:20upx; position:absolute; left:445upx; top:-1px; border-radius:0 0 40upx 40upx; content:""; display:block; background:$bgcolor_white; border:1px solid #eeeeee; border-top:0px; }
.coupon-item:before { width:40upx; height:20upx; position:absolute; left:445upx; bottom:-1px; border-radius:40upx 40upx 0 0; content:""; display:block; background:$bgcolor_white; border:1px solid #eeeeee; border-bottom:0px; }
</style>