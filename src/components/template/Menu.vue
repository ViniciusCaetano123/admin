<template>
  <aside class="menu" v-show="exibirMenu">

    <div class="scroll-menu">
      <div class="dim-lefisc">
        <p>DIM Lefisc</p>
      </div>
      <ul class="nav-produtos" v-if="$store.state.chaveAcesso != null">
         <div >
          <li class=nav-item :style="{'height':abertos.find(e=> e == 0 ) != undefined ?  '100%': '40px'}" >
            <div  class="div-item" >
              <div>
                <span style="margin-left: 0px;width: 18px;">
                   <i class='fas fa-tachometer-alt' ></i>
                </span>
                <span @click="AbrirRota('dashboard','dashboard')">Dashboard</span>
              </div>
            </div>           
          </li>
        </div>
        <div>
          <li class=nav-item :style="{'height':abertos.find(e=> e == 2 ) != undefined ?  '100%': '40px'}"  >
            <div  class="div-item" @click="AbrirMenu(2)" >
              <div>
                <span style="margin-left: 0px;width: 18px;">                
                <i class='fas fa-clipboard-list'></i> </span><span>Produtos e Conteudo</span>
              </div> 
               <i class="material-icons" style="margin-right: 8px;">keyboard_arrow_down</i>             
            </div>   
            <ul class="sub-menu" :style="{'display':abertos.find(e=> e == 2 ) != undefined ?  'block': 'none'}">
              <li @click="AbrirRota('produtosConteudo','produtosConteudo')">Buscar </li>
              <li @click="AbrirRota('alterarMenu','produtosConteudo')">Alterar Menu</li>
            </ul>        
          </li>
        </div>
        <div>
          <li class=nav-item :style="{'height':abertos.find(e=> e == 3 ) != undefined ?  '100%': '40px'}" >
            <div  class="div-item" >
              <div  @click="AbrirRota('usuarios','usuarios')">
                <span style="margin-left: 0px;width: 18px;">
                   <i class='fas fa-user-alt'></i>
                </span>
                <span>Usuarios</span>
              </div>
            </div>           
          </li>
        </div>
      </ul>
    </div>
  </aside>
</template>

<script>

export default {
  props:['exibirMenu'],
  data(){
    return{
      abertos:[]      
    }
  },
  methods:{
    AbrirRota(name,op){           
     this.$router.push({name:name})      
    },
    AbrirMenu(id){      
      let existeId = this.abertos.findIndex(e=> e == id)      
      if(existeId != -1){
        this.abertos.splice(existeId,1)
      }else{
        this.abertos.push(id)
      }
    }
  },
}

</script>

<style>
.menu{
    grid-area: menu;
    background-color: #304156;
}
.scroll-menu{
  height: 100%;
}
.dim-lefisc{
  height: 83px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    font-weight: bold;
    color: #fff;
}
.nav-produtos{
  color: rgb(191, 203, 217);
  padding: 0px;
  font-weight: 400;
  font-size: 15px;
}
.nav-produtos li.nav-item{  
  cursor: pointer; 
  transition: 0.5s ease;
}
.nav-produtos li.nav-item .div-item{
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-produtos li.nav-item .div-item div{
  display: flex;
  align-items: center;
}
.nav-produtos li span{
  margin-left: 10px;
}
.nav-produtos li.nav-item .sub-menu{
  display: none;
  background-color: #1f2d3d!important;
  border: none;   
  font-size: 15px;
  padding-left: 35px;
}
.nav-produtos li.nav-item .sub-menu li{
  height: 35px;
  display: flex;
  align-items: center;    
}
.nav-produtos li.nav-item div{
  height: 40px;
}
.nav-produtos li.nav-item .sub-menu li a{
color: rgb(191, 203, 217);
}
.material-icons{
  font-size: 18px;
}
</style>