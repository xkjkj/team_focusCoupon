<template>
	<view class="coupon_box">
		<coin></coin>
		
		<coupon v-for="(item, index) in coupon[0].list" :key="index" v-bind:item="item" theme="#ff0000" @changeCoin='changeCoin'></coupon>
		
		
	</view>
</template>

<script>
	import coupon from '@/components/coolc-coupon/coolc-coupon';
	import coin from "../../components/mycoin.vue"
	
	export default{
		data(){
			return{
				coupon:[{
					list: [{
						url: "",
						money: "150",
						cost:50,
						title: "满2000减150元",
						ticket: "YMC_5c929fbf47235",
						seller_name: "百达翡丽官方旗舰店",
						end_time: "2019-04-20 01:51:20",
						state: 0
					},
					{
						url: "",
						money: "50",
						cost:500,
						title: "满1000减50元",
						ticket: "YMC_5c929fbf47235",
						seller_name: "百达翡丽官方旗舰店",
						end_time: "2019-04-20 01:51:20",
						state: 0
					}]
				}]
			}
		},
		onLoad : function(){
			let tthis=this;
			tthis.coupon[0].list[0].state=tthis.$store.state.ticket1;
			tthis.coupon[0].list[1].state=tthis.$store.state.ticket2;
		},
		onShow : function(){
			let tthis=this;
			tthis.coupon[0].list[0].state=tthis.$store.state.ticket1;
			tthis.coupon[0].list[1].state=tthis.$store.state.ticket2;
		},
		methods:{
			changeCoin(t){
				let tthis=this;
				tthis.$store.state.coin = tthis.$store.state.coin-t;
				tthis.$store.state.ticket1=tthis.coupon[0].list[0].state;
				tthis.$store.state.ticket2=tthis.coupon[0].list[1].state;
				//this.$store.state.coin = this.$store.state.coin + 50;
				
				console.log(this.$store.state.coin);
			}
			
		},
		components:{
			coupon,
			coin
		}
	}
</script>

<style>
	<style lang='scss'>
	page { background:$bgcolor_white; }
	.coupon_box {
		width:100%; height:auto; display:table; padding:6upx 26upx 26upx 26upx;
	}
	
	.other_type {
		width:100%; height:90upx; padding-top:50upx;
		
		.text { width:100%; border-top:1px solid #eeeeee; display:block; text-align:center; position:relative; }
		.text span { width:180upx; height:40upx; line-height:40upx; color:#999999; display:block; background:#ffffff; position:absolute; left:50%; top:50%; margin-left:-90upx; margin-top:-20upx; font-size:$font-base; }
	}
</style>
