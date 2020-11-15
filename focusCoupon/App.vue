<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		created () {
		    // 在页面加载时读取localStorage
		    if (localStorage.getItem('store')) {
		      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(localStorage.getItem('store'))))
		    }
			this.$store.state.coin = 5000;/*
			this.$store.state.ticket1 = 0;
			this.$store.state.ticket2 = 0;*/
			
			
		    // 在页面刷新时将store保存到localStorage里
		    window.addEventListener('beforeunload', () => {
		      localStorage.setItem('store', JSON.stringify(this.$store.state))
		    })
		  }
	}
</script>

<style>
	@import "colorui/main.css";
	@import "colorui/icon.css";
	/*每个页面公共css */
</style>
