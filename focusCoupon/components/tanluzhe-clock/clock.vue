<template>
	<cover-view class="clock">
		<cover-view>{{hour}}:</cover-view>
		<cover-view>{{minute}}:</cover-view>
		<cover-view>{{second}}</cover-view>
	</cover-view>
</template>

<script>
	export default {
		data(){
			return {
				hour:"00",
				minute:"00",
				second:"00",
				totalCount:0,
				timer:null
			};
		},
		props:{
			lists:{
				type:Object
			}
		},
		methods:{
			end(e){
				this.is_show = false;
				clearInterval(this.timer);
				this.$emit('clockend',this.totalCount);
				console.log('结束了',e);
			},
			showNum(num) {
				if (num < 10) {
					return '0' + num
				}
				return num
			},
			start(){
				let _this = this;
				let count = 0;
				_this.timer = setInterval(function(){
					count++;
					_this.second = _this.showNum(count % 60);
					_this.hour = _this.showNum(parseInt(count / 60 / 60));
					_this.minute = _this.showNum(parseInt(count / 60) % 60);
					_this.totalCount = count;
				},1000);
				this.is_show = true;
			},
			created(){
				let _this=this;
				this.start();
			}
		}
	}
</script>

<style lang="scss">
	.clock{
		display: flex;
	}
</style>
