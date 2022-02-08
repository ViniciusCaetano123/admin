<template>
  <div id="mensagem">
      {{$store.state.txtNoti}}
  </div>
</template>

<script>

export default {

}
</script>

<style>
#mensagem{  

    min-width: 380px;    
    box-sizing: border-box;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    border-color: #e6ebf5;
    position: fixed;
    left: 50%;
    top: 20px;   
    transform: translateX(-50%);
    background-color: #edf2fc;  
    transition: opacity .3s,top .4s,-webkit-transform .4s;
    transition: opacity .3s,transform .4s,top .4s;
    transition: opacity .3s,transform .4s,top .4s,-webkit-transform .4s;
    overflow: hidden;
    padding: 15px 15px 15px 20px;
    display: flex;   
    align-items: center;
}
</style>