<template>
  <div class="login-container">
      <form action="" class="el-form login-form el-form--label-left">
          <h3  class="title"> Administrador </h3>
          <div class="el-form-item is-success is-required el-form-item--medium">
              <div class="el-form-item__content">
                  <span class="svg-container"><i class='fas fa-user-alt'></i></span>
                  <div class="el-input el-input--medium">
                      <input v-model="login" tabindex="1" type="text" autocomplete="on" placeholder="Username" name="username" class="el-input__inner">
                  </div>
              </div>              
          </div>
          <span class="nao-preenchido" v-if="msgLogin">Login não preenchido</span>
          <span class="tamanho" v-else></span>
          <div class="el-form-item is-success is-required el-form-item--medium">
              <div class="el-form-item__content">
                    <span  class="svg-container">
                      <img src="../assets/cadeado.svg" alt="">
                    </span>
                  <div class="el-input el-input--medium">
                    <input v-model="senha" tabindex="2" type="password" autocomplete="on" placeholder="Password" name="password" class="el-input__inner">
                  </div>
              </div>                
          </div>
          <span class="nao-preenchido" v-if="msgSenha">Senha não preenchido</span>
          <span class="tamanho" v-else></span>
        
        <button  @click="Logar" type="button" class="el-button el-button--primary el-button--medium" style="width: 100%; margin-bottom: 30px;"><span v-if="!$store.state.spiner"> Login </span>  <b-spinner v-else variant="success" label="Spinning" style="color: #fff !important;width: 20px;height: 20px;" ></b-spinner> </button>
        <p class="nao-preenchido" style="text-align">{{msgRetorno}}</p>
      </form>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            login:'',
            senha:'',
            msgLogin:false,            
            msgSenha:false,  
            msgRetorno:''

        }
    },
    methods:{
        async Logar(){            
            if(this.login ==''){
                this.msgLogin = true
            }
            else if(this.senha == ''){
                this.msgSenha = true
            }else{
                try{
                this.$store.state.spiner = true
                await axios.post('http://192.168.10.107:3000/logar',{"login":this.login,"senha":this.senha})
                .then(e=>{                    
                    
                    localStorage.setItem("admin_user",JSON.stringify({"hash":e.data.hash}))
                    axios.defaults.headers.common['hash'] = `${e.data.hash}` 
                    this.$router.push({name:'dashboard'})                    
                }).catch(e=>{
                    this.msgRetorno = e.response.data.msg
                })
                this.$store.state.spiner = false
                }catch(e){
                    this.msgRetorno= 'Erro ao conectar'
                    this.$store.state.spiner = false
                }
            }             
        }
    },
    mounted(){

    }

}
</script>

<style>
.tamanho{
    height: 23px;
    display: block
}
.nao-preenchido{
    color: #ff4949;
    margin-bottom: 22px;
    display: block;
    font-size: 14px;
}
.el-button--medium {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
}
.el-button--primary {
    color: #fff;
    background-color: #1890ff;
    border-color: #1890ff;
}
.el-button {
    border: none;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;    
    color: #fff;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 400;
    height: 40px;
    font-size: 14px;
    border-radius: 4px;
}
.login-container{
        min-height: 100%;
    width: 100%;
    background-color: #202f42;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}
.login-container .login-form{
    position: relative;
    width: 520px;
    max-width: 100%;
    
    margin: 0 auto;
    overflow: hidden;
}
.login-container  .title {
    font-size: 26px;
    color: #eee;
    margin: 0 auto 40px auto;
    text-align: center;
    font-weight: 700;
}
.login-container .el-form-item {
    border: 1px solid hsla(0,0%,100%,.1);
    background: rgba(0,0,0,.1);
    border-radius: 5px;
    color: #454545;
}
.el-form-item--medium .el-form-item__content, .el-form-item--medium .el-form-item__label {
    line-height: 36px;
}

.el-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
}
.login-container .svg-container{
    padding: 6px 5px 6px 15px;
    color: #889aa4;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
}
.svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
.login-container .el-input input {
    background: transparent;
    border: 0;
    -webkit-appearance: none;
    border-radius: 0;
    padding: 12px 5px 12px 15px;
    color: #fff;
    caret-color: #fff;
    width: 90%;
}
.login-container .el-input {
    display: inline-block;
    width: 85%;
}
</style>