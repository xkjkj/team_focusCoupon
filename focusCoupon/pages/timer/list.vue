<template>
	<view class="content">
		<coin></coin>
		<!-- 头部模块 -->
		<view class="todo-header" v-if="list.length !== 0">
			<view class="todo-header-left">
				<text class="active-txt">{{statusTxt}}</text>
				<text>{{listData.length}}条</text>
			</view>
			<view class="todo-header-right">
				<view class="todo-header-right-item" :class="{'active-tab': tabActive===0}" @click='tab(0)'>全部</view>
				<view class="todo-header-right-item" :class="{'active-tab': tabActive===1}" @click='tab(1)'>代办</view>
				<view class="todo-header-right-item" :class="{'active-tab': tabActive===2}" @click='tab(2)'>已完成</view>
			</view>
		</view>
		<!-- 列表模块 -->
		
		<view class="todo-blank" v-if="list.length === 0">
			<view class="todo-blank-img">
				<image src="../../static/default.png" mode="aspectFit"></image>
			</view>
			<view class="todo-blank-info">
				<text>您还没有创建任何待办事项</text>
				<text>点击下方+号创建一个吧</text>
			</view>
		</view>
		<view class="todo-list" v-else>
			<view class="todo-item" :class="{'todo-finish': item.checked}" v-for="(item, index) in listData" :key="index" @click="gotoClock(item.id)">
				<view class="todo-item-checkbox"><!-- @click="toggleFinish(item.id)"-->
					<view class="checkbox"></view>
				</view>
				<view class="todo-item-content">
					{{item.content}}
				</view>
			</view>
		</view>
		<!-- 新建按钮模块 -->
		<view class="add-btn" @click="showInput">
			<text class="iconfont icon-jia" :class="{'create-todo-active': inputShow}"></text>
		</view>
		<!-- 新建输入框 -->
		<view v-if="createActive" class="create-content" :class="{'create-show': inputShow}">
			<view class="create-content-box">
				<view class="create-input">
					<input type="text" v-model="inputVal" value="" placeholder="请输入您要创建的todo" />
				</view>
				<view class="create-btn" @click="addNew">
					创建
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import coin from "../../components/mycoin.vue"
	export default {
		data() {
			return {
				list: [],
				createActive: false,
				inputVal: '',
				tabActive:0,
				statusTxt: '全部',
				inputShow: false,
				opid:0,
				ifcomp:0
			}
		},
		onLoad() {
			
		},
		onShow:function(option){
			
			let tthis=this;
			uni.getStorage({
			
			key: 'startedTask',
			
			success: function(res)  {
			
			if(res.data.ifcom==1)
			{
				console.log(res.data.ifcom);
				tthis.ifcomp=1;
				console.log(tthis.ifcomp) ;
				console.log(tthis.list)
				tthis.opid=res.data.value;
				console.log(tthis.opid) ;
				tthis.toggleFinish(tthis.opid)
				tthis.ifcomp=0;
			}
			
			
			uni.removeStorage({
			
			key:'startedTask'
			
			})
			
			},
			
			})
			
			
				
			
			
		},
		methods: {
			showInput() {
				if(this.createActive) {
					this.closeInput()
				}else{
					this.openInput()
				}
			},
			openInput(){
				this.createActive = true;
				this.$nextTick(()=>{
					setTimeout(()=>{
						this.inputShow = true
					},50)
				})
			},
			closeInput(){
				this.inputShow = false
				this.$nextTick(()=>{
					setTimeout(()=>{
						this.createActive = false
					},50)
				})
			},
			addNew() {
				if(this.inputVal === '') {
					uni.showToast({
						title: '请输入内容',
						icon: 'none'
					})
					return
				}
				this.list.unshift({
					id: 'id' + new Date().getTime(),
					content: this.inputVal,
					checked: false
				})
				this.inputVal = ''
				this.closeInput()
			},
			toggleFinish(id) {
				let index = this.list.findIndex((item)=>item.id == id)
				this.list[index].checked = !this.list[index].checked;
			},
			tab: function(t) {
				this.tabActive = t;
			},
			//新建函数，跳转到计时器
				
			gotoClock(idd){
				uni.navigateTo({
					url:"clock"
				})
				let data = {value:idd ,ifcom:0}
				
				uni.setStorage({
				
				key:'startedTask',
				
				data:data
				
				})
			
			}
			
			
			
			
		},
		computed: {
			listData: function(){
				let list = JSON.parse(JSON.stringify(this.list));
				let newList = [];
				if(this.tabActive === 0) {
					this.statusTxt = '全部';
					return list
				}
				if(this.tabActive === 1) {
					this.statusTxt = '代办';
					list.forEach((item)=>{
						if(!item.checked) {
							newList.push(item) 
						}
					})
					return newList
				}
				if(this.tabActive === 2) {
					this.statusTxt = '已完成';
					list.forEach((item)=>{
						if(item.checked) {
							newList.push(item) 
						}
					})
					return newList
				}
			}
		},
		components:{
			coin
		}
	}
</script>

<style>
	@import url("../../common/icon.css");
	/* 头部 */
	.todo-header {
		position: fixed;
		left: 0;
		top: 100;
		right: 0;
		display: flex;
		height: 45px;
		align-items: center;
		padding: 0 15px;
		color: #333;
		font-size: 12px;
		background: #FFFFFF;
		box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.1);
		z-index: 9;
	}
	.todo-header-left{
		width: 100%;
	}
	.todo-header-right{
		flex-shrink: 0;
		display: flex;
	}
	.todo-header-right-item{
		padding: 0 5px;
	}
	.active-txt{
		font-size: 14px;
		color: #2792bf;
		padding-right: 10px;
	}
	.active-tab{
		color: #2792bf;
	}
	
	/* 列表 */
	.todo-list{
		position: relative;
		padding-top: 50px;
		padding-bottom: 100px;
	}
	.todo-item{
		display: flex;
		align-items: center;
		position: relative;
		overflow: hidden;
		padding: 15px;
		margin: 15px;
		color: #0c3854;
		font-size: 14px;
		border-radius: 10px;
		background: #cfebfd;
		box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.1),-1px 2px 1px rgba(255,255,255,1) inset;
	}
	.todo-item:after{
		position: absolute;
		content: '';
		top: 0;
		bottom: 0;
		left: 0px;
		width: 5px;
		background: #91d1e8;
	}
	.todo-item-checkbox{
		padding-right: 15px;
	}
	.checkbox{
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: #FFFFFF;
		box-shadow: 0 0 5px 1px rgb(0,0,0,0.1);
	}
	
	/* 完成横线 */
	.todo-finish .checkbox{
		position: relative;
		background: #eee;
	}
	.todo-finish .checkbox:after{
		content: '';
		position: absolute;
		width: 10px;
		height: 10px;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		margin: auto;
		border-radius: 50%;
		background: #cfebfd;
		box-shadow: 0 0 2px 0 rgba(0,0,0,0.2);
	}
	.todo-finish .todo-item-content{
		color: #999999;
	}
	.todo-finish.todo-item:before{
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 40px;
		right: 10px;
		height: 2px;
		margin: auto 0;
		background: #bdcdd8;
	}
	.todo-finish.todo-item:after{
		background: #ccc;
	}
	
	/* 新建按钮 */
	.add-btn{
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		bottom: 60px;
		left: 0;
		right: 0;
		margin: 0 auto;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-color: #deeff5;
		box-shadow: -1px 1px 5px 5px rgba(0,0,0,0.1), -1px 1px 1px 0 rgba(255,255,255) inset;
	}
	.icon-jia{
		font-size: 30px;
		color: #add8e6;
	}
	/* 新建输入框 */
	.create-content{
		position: fixed;
		bottom: 120px;
		left: 20px;
		right: 20px;
		transition: all .3s;
		opacity: 0;
		transform: scale(0) translateY(200%);
	}
	.create-show{
		opacity: 1;
		transform: scale(1) translateY(0);
	}
	.create-content-box{
		display: flex;
		align-items: center;
		padding-left: 15px;
		border-radius: 50px;
		background: #DEEFF5;
		box-shadow: -1px 1px 5px 2px rgba(0,0,0,0.1),-1px 1px 1px 0 rgba(255,255,255) inset;
	}
	.create-input{
		width: 100%;
		padding-right: 15px;
		color: #ADD8E6;
	}
	.create-btn{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		width: 80px;
		height: 50px;
		border-radius: 50px;
		font-size: 16px;
		color: #88d4ec;
		box-shadow: -2px 0px 2px 1px rgba(0,0,0,0.1);
	}
	
	.create-content:after{
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		margin: 0 auto;
		bottom: -8px;
		width: 20px;
		height: 20px;
		background-color: #DEEFF5;
		box-shadow: 1px 1px 5px 2px rgba(0,0,0,0.1);
		transform: rotate(45deg);
		z-index: -1;
	}
	.create-content-box:after{
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		margin: 0 auto;
		bottom: -8px;
		width: 20px;
		height: 20px;
		background-color: #DEEFF5;
		transform: rotate(45deg);
	}
	
	/* 空白页 */
	.todo-blank{
		padding-top: 100px;
	}
	.todo-blank-img{
		display: flex;
		align-content: center;
	}
	.todo-blank-img image{
		width: 100%;
	}
	.todo-blank-info{
		text-align: center;
		font-size: 14px;
		color: #CCCCCC;
	}
	.todo-blank-info text{
		display: block;
	}
	
	.icon-jia{
		transition: transform 0.3s;
	}
	.create-todo-active{
		transform: rotate(135deg);
	}
</style>
