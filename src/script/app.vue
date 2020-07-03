<template>
	<div class="app">
		<h1>欢迎学习webpack4!</h1>
		<div>{{title}}</div>
		<img  src="../assets/logo.png">
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
		name:'app',
		data(){
			return{
				title:"hello Vue!"
			}
		},
		mounted(){
			this.getList();
		},
		methods:{
			getList(){
				axios.get('/api/goods/list').then((res)=>{
                  console.log('list:'+res)
				})
			}
		}
	}
</script>
<style lang='scss'>
  .app{
    text-align:center;
    img{
    	width:260px;
    	height:260px;
    }
  }
</style>