<template>
	<div id="admin">
		<router-view />
	</div>
</template>

<script>

export default {
	data(){
		return{		
		}
	},
	components:{
	},
	name: "Admin",
	methods:{		
	},
	async created(){		
	}
}
//https://panjiachen.github.io/vue-element-admin/#/components/split-pane
</script>

<style>
*{
	font-family: "Roboto",sans-serif;		
}
.vm--modal{
	padding:15px;
}
body{
	margin:0;	
}
#admin{
	color: #303133;
	height: 100vh;
	font-size: 16px;
}
</style>