<template>
	<div id="app">
		<Header @tirarMenu="MudarGrid()" />
		<Menu  :exibirMenu="exibirMenu"/>
		<Footer  />
		<Content />
	</div>
</template>

<script>

import Header from './template/Header.vue'
import Menu from './template/Menu.vue'
import Footer from './template/Footer.vue'
import Content from './template/Content.vue'
export default {
	data(){
		return{
			exibirMenu:true,
			logado:true,
		}
	},
	components:{
		Header,
		Menu,
		Footer,
		Content		
	},
	name: "App",
	methods:{
		MudarGrid(){
			this.exibirMenu = !this.exibirMenu			
			let elem = document.getElementById("app");					
			if(this.exibirMenu){				
				elem.style.gridTemplateAreas = '"menu header" "menu content" "menu footer"';	
			}else{
				elem.style.gridTemplateAreas = '"header header" "content content" "footer footer"';	
			}
		}
	},
	created(){	
	}
}
//https://panjiachen.github.io/vue-element-admin/#/components/split-pane
</script>

<style>
*{
	font-family: "Roboto",sans-serif;
}
body{
	margin:0;
    padding:0px;	
}
#app{
	height: 100%;
	display: grid;
	grid-template-rows: 84px 1fr 40px;
	grid-template-columns:  240px 1fr;
	grid-template-areas: 
	"menu header"
	"menu content"
	"menu footer";
}
</style>