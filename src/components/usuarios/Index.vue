<template>
<div id="indexusuario">  
  <div class="opcoes">
    <button type="button" class="el-button filter-item el-button--primary " ><i class="material-icons">edit</i><span> Adicionar </span></button>
  </div>
  <b-card no-body>
    <b-tabs card>
      <b-tab no-body title="Desenvolvedor">
        <TableUsuario :dados="dados.desenvolvedor"/>
      </b-tab>
      <b-tab no-body title="Administrador">
          <TableUsuario :dados="dados.administrador"/>
      </b-tab>
     <b-tab no-body title="Supervisor">
           <TableUsuario :dados="dados.supervisor"/>
      </b-tab>
       <b-tab no-body title="Suporte">
          <TableUsuario :dados="dados.suporte"/>
      </b-tab>
       <b-tab no-body title="Consultor">
           <TableUsuario :dados="dados.consultor"/>
      </b-tab>
      <b-tab no-body title="Vendedor">
           <TableUsuario :dados="dados.vendedor"/>
      </b-tab>
    </b-tabs>
  </b-card>
</div> 
</template>
<script>
import axios from 'axios'
import TableUsuario from './TableUsuario.vue'
export default {
  components:{TableUsuario},
  data(){
    return{
      dados:{
        "desenvolvedor":[],
        "administrador":[],
        "supervisor":[],
        "suporte":[],
        "consultor":[],
        "vendedor":[]
      }
    }
  },
  async mounted(){
      await axios.get('http://192.168.10.107:3000/usuarios')
      .then(e=>{        
          for(let element of e.data){
            if(element.last_login != null){
                            let d10 = element.last_login.toString().substring(0,10).split('-')
                            console.log(d10)
                            d10 = d10[2]+'/'+d10[1]+'/'+d10[0]+ " " + element.last_login.substring(11,16)
                            element.last_login = d10
                        }
                    }      
         this.dados.desenvolvedor = e.data.filter(e=>  e.cargo === 1)
         this.dados.administrador = e.data.filter(e=>  e.cargo === 2)
         this.dados.supervisor = e.data.filter(e=>  e.cargo === 3)
         this.dados.suporte = e.data.filter(e=>  e.cargo === 4)
         this.dados.consultor = e.data.filter(e=>  e.cargo === 5)
         this.dados.vendedor = e.data.filter(e=>  e.cargo === 6)
         
      })
      .catch(err=>{
        console.log(err.response)
        if(err.response.status == 401){
          this.$router.push({name:'tela-login'})
        }
      })
  }

}
</script>
<style>
#indexusuario{
  font-size: 14px;
}
#indexusuario .opcoes{
  display: flex;
  padding-bottom: 10px;
  align-items: center;
  justify-content: flex-end;
}
#indexusuario .opcoes button{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 35px;
  width: 95px;
}
</style>
