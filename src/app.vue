<template>
	<div class="app">
		<h1>欢迎学习webpack4!</h1>
		<div>{{title}}</div>
		<div class="group">
			<el-button type="default" @click="handleClick">默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
    import ElButton from './components/button'
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
			},
			handleClick(){
				alert("点击按钮");
			}
		},
		components:{
			[ElButton.name]:ElButton
		}
	}
</script>
<style lang="scss">
    .app{
        text-align: center;
        img{
            width:260px;
            height: 260px;
        }
    }
</style>