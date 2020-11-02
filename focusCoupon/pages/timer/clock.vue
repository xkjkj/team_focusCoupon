<template>
	<view>
		 <myClock @clockend="clockend" ref="myClock"></myClock>
		<view @click="timeOver">计时结束</view>
		
		<mdialog ref="myDialog" modalTitle="计时结束了" @onClickCancel="cancel" @onClickConfirm="confirm">
		            <template>
		                <p style="text-align: center;">是否完成任务？</p>
		            </template>
		</mdialog>
	</view>
		
</template>

<script>
	import clock from "../../components/tanluzhe-clock/clock.vue"
	import mdialog from "../../components/l-modal/l-modal.vue"
	export default{
		data(){
			return {
				
				id:0,
				
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
			            uni.switchTab({
			            	url:"list"
			            })
						console.log("cancel被调用") 
						
			        },
			confirm() {
			            // do sth
						let tthis=this;
						let k=tthis.id;
						let data = {value:k, ifcom:1};
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
					clockend(res){ console.log(res) }
		},
		components:{
			 myClock:clock,
			 mdialog
		}
	}
	
</script>

<style>
</style>
