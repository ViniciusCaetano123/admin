<template>
  <header class="header">
      <div class="navegacao">
          <div class="nav-atual">
              <img src="../../assets/cardapio.svg" alt="" @click="$emit('tirarMenu', false)">
              <p>{{atual}} </p>           
          </div>
          <div class="nav-perfil">
                <div class="foto">
                    <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" alt=""><span>{{$store.state.dados[0]}}</span><i class='fas fa-caret-down'></i>
                </div>
                <div class="hover-perfil">
                    <ul>
                        <li @click="$router.push({name:'perfil'})" >
                            Perfil
                        </li>
                        <li style="border-top: 1px solid #e6ebf5;" @click="Sair">
                            Sair
                        </li>
                    </ul>
                </div>
          </div>
      </div>
      <div class="historico">
          <div>
              {{$store.state.count}}
          </div>
      </div>
  </header>
</template>

<script>
export default {
    data(){
        return{
            atual:'Dashboard'
        }
    },
    methods:{
        Sair(){
            localStorage.setItem('admin_user', JSON.stringify({'hash':''}))
            this.$router.push({name:'tela-login'})
        }
    }

}
</script>

<style>
.header{
    grid-area: header;
    background: #fff;
    border-bottom: 1px solid #d8dce5;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}
.navegacao{
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0px 20px;
}
.navegacao  .nav-atual{
    display: flex;
    align-items: center;
}
.navegacao  .nav-atual img{
    cursor: pointer;
}
.navegacao  .nav-atual p{
    margin-left: 20px;
    margin-bottom: 0px;
}
.navegacao .nav-perfil{
    position: relative;
}
.navegacao .nav-perfil:hover .hover-perfil{
    display: block;
}
.navegacao .nav-perfil .hover-perfil li:hover{
    background: rgb(232, 244, 255);
    color:rgb(54, 163, 247);
}
.navegacao .nav-perfil .hover-perfil li:hover .hover-perfil::after{
    border-top: 8px solid #fff;
}
.navegacao .nav-perfil .hover-perfil {
    display: none;
    position: absolute;
    z-index: 999;
    top:35px;
    width: 100px;
    right: 0;
    background-color: #fff;
    border: 1px solid #e6ebf5;
    border-radius: 4px;
    -webkit-box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
.navegacao .nav-perfil .hover-perfil ul{
    padding:0px;
    margin-bottom: 0px;
}
.navegacao .nav-perfil .hover-perfil ul li{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    cursor: pointer;
}
.navegacao .nav-perfil .foto {
    display: flex;
    align-items: center;
    cursor: pointer;
}
.navegacao .nav-perfil .foto img{
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 10px;
}
.navegacao .nav-perfil .foto span{
    margin:0 10px;
}
.historico{
    height: 34px;
}
</style>