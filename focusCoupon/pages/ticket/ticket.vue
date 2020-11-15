<template>
	<view class="coupon_box">
	<coupon v-for="(item, index) in coupon[0].list" :key="index" v-bind:item="item" theme="#ff0000" @changeCoin='changeCoin'></coupon>
	</view>
</template>

<script>
	import coupon from '@/components/coolc-coupon/nocoolc-coupon';
	import coin from "../../components/mycoin.vue"
	
	export default{
		data(){
			return{
				coupon:[{
					list: [{
						url: "../../pages/timer/list",
						money: "150",
						cost:"50",
						title: "满2000减150元",
						ticket: "YMC_5c929fbf47235",
						seller_name: "百达翡丽官方旗舰店",
						end_time: "2019-04-20 01:51:20",
						num: "1"
					},
					{
						url: "",
						money: "50",
						cost:"50",
						title: "满1000减50元",
						ticket: "YMC_5c929fbf47235",
						seller_name: "百达翡丽官方旗舰店",
						end_time: "2019-04-20 01:51:20",
						num: "1"
					}]
				}]
			}
		},
		onLoad:function(){
			this.coupon[0].list[0].num=this.$store.state.ticket1;
			this.coupon[0].list[1].num=this.$store.state.ticket2;
			
		},
		onShow:function(){
			this.coupon[0].list[0].num=this.$store.state.ticket1;
			this.coupon[0].list[1].num=this.$store.state.ticket2;
			
		},
		methods:{
			
			changeCoin(){
				this.$store.state.coin = this.$store.state.coin-50;
				
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
</style>
