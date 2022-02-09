<template>
  <main class="content">
	  <div class="listaNoti" >
		  <Notificacao  v-for="(n,i) in $store.state.notificacoes" :key="i" :nome="n.nome"  :id="i" /> 
	  </div>
     <router-view />
  </main>
</template>

<script>
import Notificacao from '../Notificacao.vue'
import axios from 'axios'
export default {
	data(){
		return{		
		}
	},
	components:{
		Notificacao
	},
	name: "Admin",
	methods:{		
	},
	async created(){
		let admin_user  = localStorage.getItem("admin_user")
		if(admin_user == null){
			this.$router.push({name:'tela-login'})
		}
		else 
		{
			admin_user = JSON.parse(admin_user)
			if(admin_user.hash == ""){				
				this.$router.push({name:'tela-login'})
			}else{			
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
.listaNoti{
	display: flex;
	align-items: center;
	flex-direction: column;
	position: absolute;
	z-index: 9999;
	margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
}
.content{
    grid-area: content;	  
    padding:20px;
}
</style>