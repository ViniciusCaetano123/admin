<template>
  <div class="mensagem" >
      {{nome}} - {{id}}
  </div>
</template>

<script>

export default {
props:['nome','id'],
mounted(){
  setTimeout(()=>{
    this.$store.state.notificacoes.splice(this.id, 1)
    console.log( this.$store.state.notificacoes)
  },2000)
}

}
</script>

<style>
.mensagem{  
    min-width: 380px;    
    box-sizing: border-box;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    border-color: #e6ebf5;
    background-color: #edf2fc;  
    transition: opacity .3s,top .4s,-webkit-transform .4s;
    transition: opacity .3s,transform .4s,top .4s;
    transition: opacity .3s,transform .4s,top .4s,-webkit-transform .4s;
    overflow: hidden;
    padding: 15px 15px 15px 20px;
    display: flex;   
    align-items: center;
    margin-top:10px;
}
</style>