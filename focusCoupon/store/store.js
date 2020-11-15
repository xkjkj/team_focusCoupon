import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)




const store = new Vuex.Store({
	state: {
		coin : 5000,
		totaltime:0,
		nickname:"用户老实人",
		name:"吴彦祖",
		age:18,
		profile:"加油，曾冠齐，你是最棒的",
		ticket1:0,
		ticket2:0
	},
	mutations: {
		/*......*/
			
		
	}
})

//导出store对象
export default store