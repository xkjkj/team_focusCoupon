<template>
	<view>
	
								<cu-custom bgColor="bg-gradual-pink" :isBack="true">
											<block slot="backText">返回</block>
											<block slot="content">表单</block>
										</cu-custom>
										<form>
											<view class="cu-form-group margin-top">
												<view class="title">昵称</view>
												<input name="input" @input="nicknameinput">{{this.$store.state.nickname}}</input>
											</view>
											<view class="cu-form-group margin-top">
												<view class="title">姓名</view>
												<input name="input" @input="nameinput">{{this.$store.state.name}}</input>
											</view>
											<view class="cu-form-group margin-top">
												<view class="title">年龄</view>
												<input name="input" @input="ageinput">{{this.$store.state.age}}</input>
											</view>
											<view class="cu-form-group margin-top">
															<view class="title">自我勉励</view>
															<textarea  @input="textareaBInput" placeholder="在这里写一句激励自己的话"></textarea>
														</view>
										</form>	
											
		</view>
</template>


<script>
	export default {
		data(){
			return {
			}
		},
		methods: {
			        nameinput: function(event) {
			            this.$store.state.name = event.target.value
			        },
					nicknameinput: function(event) {
					    this.$store.state.nickname = event.target.value
					},
					ageinput: function(event) {
					    this.$store.state.age = event.target.value
					},
					textareaBInput (event) {
					    this.$store.state.profile = event.target.value
					},
		}
		}
</script>

<style>
	.cu-form-group .title {
			min-width: calc(4em + 15px);
		}
</style>
