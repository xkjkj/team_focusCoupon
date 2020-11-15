<template>
	<view>
		<img src="static/y.png" class="img_size"></img>
		<view class="middle_box">
			<view class="font_css">任务进度</view>
			<view class="time_css">
				<myClock @clockend="clockend" ref="myClock"></myClock>
			</view>
			<view class="button_css">
				<button size="mini" @click="timeOver" class="box" hover-class="box-active">计时结束</button>
			</view>
			<mdialog ref="myDialog" modalTitle="计时结束了" @onClickCancel="cancel" @onClickConfirm="confirm">
					<template>
		                <p style="text-align: center;">是否完成任务？</p>
		            </template>
			</mdialog>
		</view>
		<view class="margin_css">...</view>
		<view class="bottom_css">
			<view>{{this.$store.state.profile}}</view>
			
		</view>
	</view>
		
</template>

<script>
	import clock from "../../components/tanluzhe-clock/clock.vue"
	import mdialog from "../../components/l-modal/l-modal.vue"
	export default{
		data(){
			return {
				
				id : 0,
				total_second : 0
			}
		},
			
		onReady(){
			this.$refs.myClock.start();
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
		        
				let tthis=this;
				
				 console.log(tthis.id); //打印出上个页面传递的参数。
				 
				 uni.getStorage({
				 
				 key: 'startedTask',
				 
				 success: function(res)  {
				 
				 console.log(res.data) // ==>{key:'name',value:'hello'}
				 tthis.id=res.data.value
				 
				 console.log(tthis.id) 
				 
				 
				 
				 },
				 
				 })
				
		    },
		
		
		
		methods:{
			timeOver(){
				this.$refs.myClock.end(); 
				this.$refs['myDialog'].showModal();
			},
			
			cancel() {
			            let tthis=this;
			            let k=tthis.id;
			            let total = tthis.total_second;
			            let data = {value:k, ifcom:0,total_second:total};
			            uni.removeStorage({
			                key: 'startedTask',
			                success: function (res) {
			                    console.log(data);
			                }
			            })
			            
			            uni.setStorage({
			            
			            key:'startedTask',
			            
			            data:data
			            
			            })
						uni.switchTab({
			            	url:"list"
			            })
						console.log("cancel被调用") 
						
			        },
			confirm() {
			            // do sth
						let tthis=this;
						let k=tthis.id;
						let total = tthis.total_second;
						let data = {value:k, ifcom:1,total_second:total};
						uni.removeStorage({
						    key: 'startedTask',
						    success: function (res) {
						        console.log(data);
						    }
						})
						
						uni.setStorage({
						
						key:'startedTask',
						
						data:data
						
						})
						
						
						uni.switchTab({
							url:"list"
				        })
			        },
			clockend(res){ 
				console.log(res);
				this.$data.total_second = res;
				console.log(this.$data.total_second)
			}
		},
		components:{
			 myClock:clock,
			 mdialog
		}
	}
	
</script>

<style>
	//计时结束的按钮样式
	.box{
		width:auto;
				height:auto;
				background-color: #8799A3;
				outline-style:double;
	}
	//点击按钮之后,按钮的颜色变化
	.box-active{
		width:auto;
		height:auto;
		background-color: #007AFF;
	}
	//图片大小
	.img_size{
		width:400px;
		height:200px;
	}
	//中间部分的样式
	.middle_box{
		width:400px;
				height:180px;
				background-color:#D2F1F0;
	}
	//任务进度样式
	.font_css{
		position: relative;
		font-size:x-large;
		text-align: center;
	}
	//底部格言样式
	.bottom_css{
		width:400px;
				height:250px;
				background-color:#91D1E8;
				font-size:medium;
				font-weight:bold
	}
	.margin_css{
		width:400px;
				heght:200px;
				background-color:#1CBBB4;
				text-align: center;
	}
	.button_css{
		text-align: center;
	}
	.time_css{
			height:30px;
			background-color: #39B54A;
			font-size:x-large;
			display:flex;
			flex-direction:row; 
			justify-content:center;
		}
	
</style>
