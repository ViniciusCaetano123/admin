<template>
<div id="indexusuario">  
  
  <modal name="cadadastrar-usuario" height="auto" >
    <div style="display: flex;justify-content: space-between;">
      <span style="line-height: 24px;font-size: 18px;color: #303133;">{{modaltxt}}</span>
      <i class="material-icons" style="cursor:pointer;" @click="$modal.hide('cadadastrar-usuario')">close</i>
    </div>
    <div v-if="modaltxt == 'Adicionar'" class="cad-usuario">
      <b-container fluid style="margin-top:35px;">
      <b-row class="mb-3" >
        <b-col sm="2" style="display: flex;align-items: center;">
          <label for="input-default">Usuário</label>
        </b-col>
        <b-col sm="10" >
          <b-form-input id="input-default" ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mb-3" >
        <b-col sm="2" style="display: flex;align-items: center;">
          <label for="input-default">Senha</label>
        </b-col>
        <b-col sm="10" >
          <b-form-input id="input-default"></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mb-3" >
        <b-col sm="2" style="display: flex;align-items: center;">
          <label for="input-default">Nome</label>
        </b-col>
        <b-col sm="10">
          <b-form-input id="input-default" ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="mb-3" >
        <b-col sm="2" style="display: flex;align-items: center;">
          <label for="input-default">E-mail</label>
        </b-col>
        <b-col sm="10">
          <b-form-input id="input-default" ></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-form-group label="Cargo" >
              <b-form-radio-group
                id="radio-slots"        
                name="radio-options-slots" >
                <div class="d-flex justify-content-between">
                <div>
                  <b-form-radio value="1" style="padding-bottom: 5px;">Desenvolvedor</b-form-radio>
                  <b-form-radio value="2" >Administrador</b-form-radio>
                </div>
                <div>
                  <b-form-radio value="3" style="padding-bottom: 5px;">Supervisor</b-form-radio>
                  <b-form-radio value="4">Suporte</b-form-radio>
                </div>
              <div>
                  <b-form-radio value="5" style="padding-bottom: 5px;">Consultor</b-form-radio>
                  <b-form-radio value="6">Vendedor</b-form-radio>
                </div>
                </div >
              </b-form-radio-group>
        </b-form-group>
      </b-row>
      <div class="btn-permi">
        <button type="button"  @click="$modal.hide('cadadastrar-usuario')" class="el-button el-button--defaul" style="margin-right: 10px;background: #fff; border: 1px solid #dcdfe6;border-color: #dcdfe6;color: #606266;"><span> Cancelar </span></button>
        <button type="button" class="el-button el-button--primary " @click="modaltxt = 'Permissões'"><span> Permissões </span></button>
      </div>
    </b-container>  
    </div>
    <div v-else>  
      <div class="menus-permissao">
        <p style="margin-top:35px;">Produtos e Conteudos</p>  
        <div class="bloco-permissao">
          <div class="bloco">            
            <input type="checkbox" name="" id="">
            <label for="">Editar</label>
          </div>
           <div class="bloco">            
            <input type="checkbox" name="" id="">
            <label for="">Adicionar</label>
          </div>
          <div class="bloco">
            <input type="checkbox" name="" id="">
            <label for="">Alterar</label>
          </div>
        </div>      
        <p>Menu</p>  
        <div class="bloco-permissao">
          <div class="bloco">            
            <input type="checkbox" name="dsa" id="">
            <label for="">Editar</label>
          </div>
           <div class="bloco">            
            <input type="checkbox" name="dsa" id="">
            <label for="">Adicionar</label>
          </div>
          <div class="bloco">
            <input type="checkbox" name="dsa" id="">
            <label for="">Alterar</label>
          </div>
        </div> 
    <p>Usuários</p>  
        <div class="bloco-permissao">
          <div class="bloco">            
            <input type="checkbox" name="" id="" @click="AdicionarNivel(nivel_acesso[0].usuarios.al)">
            <label for="" >Editar</label>
          </div>
           <div class="bloco">            
            <input type="checkbox" name="" id="" @click="AdicionarNivel(nivel_acesso[0].usuarios.in)">
            <label for="">Adicionar</label>
          </div>
          <div class="bloco">
            <input type="checkbox" name="" id="" @click="AdicionarNivel(nivel_acesso[0].usuarios.de)">
            <label for="">Deletar</label>
          </div>
        </div> 
        <div class="btn-permi">
        <button type="button"  @click="$modal.hide('cadadastrar-usuario')" class="el-button el-button--defaul" style="margin-right: 10px;background: #fff; border: 1px solid #dcdfe6;border-color: #dcdfe6;color: #606266;"><span> Cancelar </span></button>
        <button type="button" class="el-button el-button--primary " @click="Cadastrar" ><BtnLoader nome="Confirmar"/></button>
      </div>
      </div>
    </div>
  </modal> 
  <div class="opcoes">
    <button type="button" @click="$modal.show('cadadastrar-usuario');modaltxt = 'Adicionar'" class="el-button filter-item el-button--primary " ><i class="material-icons">edit</i><span> Adicionar </span></button>
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
      nome:'',
      usuario:'',
      senha:'',
      email:'',
      cargo:'',
      nivel_acesso:[{produtosConteudo:{in:0,de:0,al:0},usuarios:{in:0,de:0,al:0 },perguntasRespostas:{in:0,de:0,al:0 }}],
      selected: [],
        options: [
          { text: 'Orange', value: 'orange' },
          { text: 'Apple', value: 'apple' },
          { text: 'Pineapple', value: 'pineapple' },
          { text: 'Grape', value: 'grape' }
        ],
      modaltxt:'',
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
  methods:{
    AdicionarNivel(bit){
      if(bit == 0){
        bit = 1
      }else{
        bit = 0
      }
    },
    async Cadastrar(){
      this.$store.state.spiner = true
        await axios.post('http://192.168.10.107:3000/usuarios',{ 
        "email":this.email,
        "senha":this.senha,
        "nome":this.nome,
        "cargo":this.cargo,
        "usuario":this.usuario,
        "nivel_acesso":this.nivel_acesso
      }).then(e=>{  
        this.$store.state.spiner = false
        this.$store.state.txtNoti = e.data.msg
      }).catch(err=>{
        this.$store.state.spiner = false
        if(err.response.status == 401){
          this.$router.push({name:'dashboard'})
        }
        else if(err.response.status == 402){
          this.$router.push({name:'tela-login'})
        }else{
          this.$store.state.notificacoes.push({"nome":err.response.data.msg})  
        }
      })
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
#indexusuario .custom-radio input{
transform: scale(1.3);
}
#indexusuario p{
  margin-bottom:0px;
}
#indexusuario .menus-permissao p{
  margin-top:10px;
  font-weight: 600;
}
#indexusuario .bloco-permissao{
  display: flex;
  align-items: center;
 justify-content: space-between;
 padding: 10px;
 background: #f7f9fb;
}
#indexusuario .bloco-permissao .bloco{
  display: flex;
  align-items: center;
}
#indexusuario .bloco-permissao .bloco input{
transform: scale(1.3);
}
#indexusuario .bloco-permissao .bloco label{
  margin-left: 10px; 
}
#indexusuario .btn-permi{
  display: flex;align-items: flex-end;width: 100%;justify-content: flex-end;margin-top: 35px;
}
#indexusuario .btn-permi button{
  padding:10px;
  height: 35px;
}
#indexusuario .cad-usuario .custom-control{
  display: flex;
  align-items: center;
}
#indexusuario .cad-usuario .custom-control .custom-control-label{
  margin-left: 5px;
}
#indexusuario .cad-usuario .input-default{
  font-size: 15px;
    color: #606266;
    font-weight: 600;
    font-weight: 700;
}
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
