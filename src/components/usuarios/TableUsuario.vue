<template>
<div id="usuario">
    <table id="tableusuario">
      <thead>
        <tr>
          <th>Id</th>
          <th>Usuário</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Cargo</th>
          <th>Último Login</th>
          <th>Status</th>
          <th >Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(n,i) in dados" :key="i">
          <td>
            {{n.id}}
          </td>
          <td>
            {{n.usuario}}
          </td>
          <td>
            {{n.nome}}
          </td>
          <td>
            {{n.email}}
          </td>
          <td>
            {{n.cargo == 1 ? 'Desenvolvedor' : n.cargo == 2 ? 'Administrador' : n.cargo == 3 ? 'Supervisor' : n.cargo == 4 ? 'Suporte' : n.cargo == 5 ? 'Consultor' : 'Vendedor' }}
          </td>
           <td>
           <b> {{n.last_login  }}</b>
          </td>
          <td >
              <div v-if="n.ativo" class="ativo">
                  ativado
              </div>
              <div v-else class="desativo">
                  desativado
              </div>
          </td>
          <td > 
            <button type="button" class="el-button el-button--primary el-button--mini" style="padding: 0px 8px"> Editar</button>
            <button type="button" class="el-button  el-button--mini" @click="AtivarDesativar(n)" :style="{'margin-left':'10px', 'padding':'0px 8px','background': !n.ativo ? '#13ce66' : '#fff','color': !n.ativo ? '#fff' : '#606266','border':n.ativo ? '1px solid #dcdfe6': ''}">
                <span v-if="!n.ativo"> Ativar </span>
                <span v-else> Desativar</span>
            </button>
            
          </td>
        </tr>
      </tbody>
    </table>
</div> 
</template>

<script>
import axios from 'axios'
export default {
props:['dados'],
    data(){
        return{
            esperar:true
        }
    },
    methods:{
        async AtivarDesativar(n){          
             n.ativo = n.ativo ? !n.ativo : !n.ativo
            await axios.get(`http://192.168.10.107:3000/desativar-ativar/${n.ativo}/${n.id}`)
            .then(e=>{
                this.$store.state.txtNoti = e.data.msg
            })
            .catch(err=>{
              if(err.response.status == 401){
                this.$router.push({name:'dashboard'})
              }
              if(err.response.status == 402){
                this.$router.push({name:'tela-login'})
              }
            })          
        }
    }
}
</script>

<style >
#usuario{
    padding:20px;
}
table#tableusuario {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
table#tableusuario  td, th {  
  text-align: left;
  padding: 5px;
  border : 1px solid #dfe6ec !important;
}
#usuario .el-button{
    height: 30px !important;    
}
#usuario .ativo{
    background-color: #e7faf0;
    border-color: #d0f5e0;
    color: #13ce66;
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    line-height: 26px;
    text-align: center;
    
    
}
#usuario .desativo{
    background-color: #f4f4f5;
    border-color: #e9e9eb;
    color: #909399;
    text-align: center;
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    line-height: 26px;
    
}
</style>