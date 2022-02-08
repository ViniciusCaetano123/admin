<template>
  <main class="content">
     <router-view />
  </main>
</template>

<script>
import axios from 'axios'
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
		let admin_user  = localStorage.getItem("admin_user")
		if(admin_user == null){
			console.log('null')
			this.$router.push({name:'tela-login'})
		}
		else 
		{
			admin_user = JSON.parse(admin_user)
			if(admin_user.hash == ""){				
				this.$router.push({name:'tela-login'})
			}else{
				//this.$store.state.dados = [admin_user.nome,admin_user.email,admin_user.cargo,admin_user.hash]				
				axios.defaults.headers.common['hash'] = `${admin_user.hash}` 				
				await axios.get('http://192.168.10.107:3000/nivel-acesso')
                .then(e=>{
                    this.$store.state.chaveAcesso = JSON.parse(e.data.chaveAcesso)[0]
					this.$store.state.dados = [e.data.nome,e.data.email,e.data.cargo,e.data.hash]				
                    this.$router.push({name:this.$route.name})
                }).catch(e=>{
                    this.$router.push({name:'tela-login'})
                })
				
			}
		}
	}
}
</script>
<style>
.content{
    grid-area: content;	  
    padding:20px;
}
</style>